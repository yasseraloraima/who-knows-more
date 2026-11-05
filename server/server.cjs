const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
const { createClient } = require("@supabase/supabase-js");

// =====================================
// ENVIRONMENT VARIABLES
// =====================================

dotenv.config({
  path: path.join(__dirname, ".env"),
});

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SECRET_KEY) {
  throw new Error(
    "Missing Supabase environment variables in server/.env"
  );
}

// =====================================
// SUPABASE
// =====================================

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// =====================================
// SERVER SETUP
// =====================================

const app = express();
const server = http.createServer(app);

// Frontend origins allowed to call this backend.
// Keep localhost for development and both custom-domain variants for production.
const allowedOrigins = new Set([
  "http://localhost:5173",
  "https://whoknowsmore.site",
  "https://www.whoknowsmore.site",
  ...(process.env.FRONTEND_URLS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
]);

const corsOrigin = (origin, callback) => {
  // Requests without an Origin header (such as server-to-server health checks) are allowed.
  if (!origin || allowedOrigins.has(origin)) {
    return callback(null, true);
  }

  console.warn("Blocked CORS request from origin:", origin);
  return callback(new Error(`Origin not allowed by CORS: ${origin}`));
};

const corsOptions = {
  origin: corsOrigin,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

const io = new Server(server, {
  cors: corsOptions,
});

const rooms = new Map();

const QUESTION_TIME = 15;
const MAX_PLAYERS = 8;

// =====================================
// AVATARS
// =====================================

const DEFAULT_AVATAR = "/avatars/suit-cap.jpeg";

const ALLOWED_AVATARS = [
  "/avatars/suit-cap.jpeg",
  "/avatars/long-hair.jpeg",
  "/avatars/saudi-thobe.jpeg",
];

function validateAvatar(avatar) {
  return ALLOWED_AVATARS.includes(avatar)
    ? avatar
    : DEFAULT_AVATAR;
}

// =====================================
// AUTHENTICATION
// =====================================

async function authenticateToken(req, res, next) {
  try {
    const authorization = req.headers.authorization || "";

    if (!authorization.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const token = authorization.slice(7);

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired session",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error("Authentication error:", error);

    return res.status(401).json({
      success: false,
      message: "Authentication failed",
    });
  }
}

// =====================================
// PLAYER PROFILE HELPERS
// =====================================

async function getPlayerByUserId(userId) {
  const { data, error } = await supabase
    .from("players")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

async function getAuthenticatedPlayer(userId) {
  const player = await getPlayerByUserId(userId);

  if (!player) {
    throw new Error(
      "Player profile not found. Please create your profile first."
    );
  }

  return player;
}

// =====================================
// QUESTIONS
// =====================================

const questions = require("./questions.cjs");

if (!Array.isArray(questions) || questions.length !== 1250) {
  throw new Error(`Expected exactly 1,250 questions, found ${questions?.length ?? 0}`);
}

const expectedQuestionCounts = {
  "General Knowledge": 210,
  "Sports": 210,
  "Movies & TV": 210,
  "Science": 210,
  "Gaming": 205,
  "Geography": 205,
};

for (const [category, expectedCount] of Object.entries(expectedQuestionCounts)) {
  const actualCount = questions.filter((q) => q.category === category).length;
  if (actualCount !== expectedCount) {
    throw new Error(
      `Invalid question bank: ${category} has ${actualCount}, expected ${expectedCount}`
    );
  }
}

// =====================================
// STABLE QUESTION IDS
// =====================================

questions.forEach((question, index) => {
  question.id = `question-${String(index + 1).padStart(4, "0")}`;
});
// =====================================
// PLAYER SEEN QUESTIONS
// =====================================

async function getSeenQuestions(userIds) {
  const { data, error } = await supabase
    .from("player_seen_questions")
    .select("user_id, question_id")
    .in("user_id", userIds);

  if (error) {
    throw error;
  }

  const seenByPlayer = new Map();

  for (const userId of userIds) {
    seenByPlayer.set(userId, new Set());
  }

  for (const row of data || []) {
    seenByPlayer.get(row.user_id)?.add(row.question_id);
  }

  return seenByPlayer;
}

async function markQuestionSeen(userIds, questionId) {
  const records = userIds.map((userId) => ({
    user_id: userId,
    question_id: questionId,
  }));

  const { error } = await supabase
    .from("player_seen_questions")
    .upsert(records, {
      onConflict: "user_id,question_id",
      ignoreDuplicates: true,
    });

  if (error) {
    console.error("Could not save seen question:", error);
  }
}
// =====================================
// ROOM HELPERS
// =====================================

function generateRoomCode() {
  let code;

  do {
    code = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();
  } while (rooms.has(code));

  return code;
}

function publicPlayers(room) {
  return room.players.map((player) => ({
    id: player.id,
    name: player.name,
    score: player.score,
    avatar_url: player.avatar_url || DEFAULT_AVATAR,
  }));
}

function stopTimer(room) {
  if (room.timer) {
    clearTimeout(room.timer);
    room.timer = null;
  }
}

// =====================================
// SAVE RESULTS TO SUPABASE
// =====================================

async function saveResultsToSupabase(results) {
  if (!results || results.length === 0) {
    return;
  }

  const highestScore = Math.max(
    ...results.map((player) => Number(player.score) || 0)
  );

  const winners = results.filter(
    (player) => Number(player.score) === highestScore
  );

  const isDraw = winners.length > 1;

  for (const player of results) {
    const playerScore = Number(player.score) || 0;

    const savedPlayer = await getPlayerByUserId(player.user_id);

    if (!savedPlayer) {
      throw new Error(
        `Player profile not found for ${player.name}`
      );
    }

    const isWinner = playerScore === highestScore && !isDraw;

    let result = "loss";

    if (isWinner) {
      result = "win";
    } else if (playerScore === highestScore && isDraw) {
      result = "draw";
    }

    // Update XP and game statistics
    const { error: updateError } = await supabase
      .from("players")
      .update({
        xp: (Number(savedPlayer.xp) || 0) + playerScore,
        games_played:
          (Number(savedPlayer.games_played) || 0) + 1,
        wins:
          (Number(savedPlayer.wins) || 0) + (isWinner ? 1 : 0),
      })
      .eq("user_id", player.user_id);

    if (updateError) {
      throw updateError;
    }

    // Save match history
    const opponents = results
      .filter((other) => other.user_id !== player.user_id)
      .map((other) => other.name)
      .join(", ");

    const { error: historyError } = await supabase
      .from("game_history")
      .insert({
        player_id: savedPlayer.id,
        username: player.name,
        opponent_name: opponents,
        score: playerScore,
        result,
      });

    if (historyError) {
      throw historyError;
    }

    console.log(
      `Player: ${player.name} | Score: ${playerScore} | Result: ${result}`
    );
  }

  console.log("Results successfully saved to Supabase!");
}

// =====================================
// FINISH GAME
// =====================================

async function finishGame(room) {
  stopTimer(room);

  if (room.finished) {
    return;
  }

  room.started = false;
  room.finished = true;

  const results = [...room.players].sort(
    (a, b) => b.score - a.score
  );

  console.log("FINAL GAME RESULTS:", results);

  try {
    await saveResultsToSupabase(results);
  } catch (error) {
    console.error("Supabase save error:", error);
  }

  io.to(room.code).emit("gameFinished", {
    players: results.map((player) => ({
      id: player.id,
      name: player.name,
      score: player.score,
      avatar_url: player.avatar_url || DEFAULT_AVATAR,
    })),
  });

  console.log("Game finished:", room.code);
}

// =====================================
// QUESTION SYSTEM
// =====================================

async function sendQuestion(room) {
  stopTimer(room);

  if (!room || !room.started) {
    return;
  }

  if (room.currentIndex >= room.gameQuestions.length) {
    await finishGame(room);
    return;
  }

  room.answers = new Set();
  room.playerAnswers = new Map();
  room.correctAnswerOrder = [];
  room.phase = "answer";

  // Snapshot standings before this question for rank movement.
  const beforeQuestion = [...room.players].sort(
    (a, b) => (Number(b.score) || 0) - (Number(a.score) || 0)
  );
  room.rankBeforeQuestion = new Map(
    beforeQuestion.map((player, index) => [player.id, index + 1])
  );

  const question = room.gameQuestions[room.currentIndex];

  if (!question || !Array.isArray(question.options)) {
    throw new Error(`Question is missing at index ${room.currentIndex}`);
  }

  // Persist seen-question history in the background. Database latency must
  // never block the live game from showing the next question.
  const userIds = room.players.map((player) => player.user_id);
  void markQuestionSeen(userIds, question.id).catch((error) => {
    console.error("Could not save seen question:", error);
  });

  console.log(
    `Sending question ${room.currentIndex + 1}/${room.gameQuestions.length} to room ${room.code}`
  );

  io.to(room.code).emit("questionStarted", {
    question: {
      category: question.category,
      difficulty: question.difficulty,
      en: question.en,
      ar: question.ar,
      options: question.options,
      optionsAr: question.optionsAr,
    },
    currentIndex: room.currentIndex,
    totalQuestions: room.gameQuestions.length,
    timeLeft: QUESTION_TIME,
    players: publicPlayers(room),
  });

  room.timer = setTimeout(() => {
    void nextQuestion(room);
  }, QUESTION_TIME * 1000);
}

// =====================================
// NEXT QUESTION
// =====================================

async function nextQuestion(room) {
  // Begin the reveal phase; advance only after reveal + mini leaderboard.
  if (!room || !room.started || room.phase !== "answer" || room.advancing) {
    return;
  }

  room.advancing = true;
  stopTimer(room);

  const question = room.gameQuestions[room.currentIndex];
  if (!question) {
    room.advancing = false;
    await finishGame(room);
    return;
  }

  room.phase = "reveal";

  const answers = room.players.map((player) => {
    const submitted = room.playerAnswers?.get(player.id);
    return {
      id: player.id,
      name: player.name,
      avatar_url: player.avatar_url || DEFAULT_AVATAR,
      answerIndex: submitted?.answerIndex ?? null,
      isCorrect: submitted?.isCorrect ?? false,
      pointsEarned: submitted?.points ?? 0,
      timedOut: !submitted,
    };
  });

  io.to(room.code).emit("answerReveal", {
    currentIndex: room.currentIndex,
    totalQuestions: room.gameQuestions.length,
    correctAnswerIndex: Number(question.answer),
    answers,
    players: publicPlayers(room),
  });

  // Show answer reveal for four seconds.
  room.timer = setTimeout(() => {
    if (!room.started || room.phase !== "reveal") return;

    room.phase = "leaderboard";

    const sortedPlayers = [...room.players].sort(
      (a, b) => (Number(b.score) || 0) - (Number(a.score) || 0)
    );

    const leaderboard = sortedPlayers.map((player, index) => {
      const currentRank = index + 1;
      const previousRank =
        room.rankBeforeQuestion?.get(player.id) ?? currentRank;

      return {
        id: player.id,
        name: player.name,
        avatar_url: player.avatar_url || DEFAULT_AVATAR,
        score: Number(player.score) || 0,
        pointsEarned: room.playerAnswers?.get(player.id)?.points || 0,
        rank: currentRank,
        previousRank,
        rankChange: previousRank - currentRank,
      };
    });

    io.to(room.code).emit("miniLeaderboard", {
      currentIndex: room.currentIndex,
      totalQuestions: room.gameQuestions.length,
      players: leaderboard,
    });

    // Keep the mini leaderboard visible for 4.5 seconds.
    room.timer = setTimeout(() => {
      if (!room.started || room.phase !== "leaderboard") return;

      room.currentIndex += 1;
      room.advancing = false;

      void sendQuestion(room).catch((error) => {
        console.error("Next question error:", error);
        stopTimer(room);
        room.started = false;
        io.to(room.code).emit("roomError", {
          message: "Could not load the next question. Please return to the room.",
        });
      });
    }, 4500);
  }, 4000);
}

// =====================================
// HTTP ROUTES
// =====================================

app.get("/", (req, res) => {
  res.send("Who Knows More Server is Running!");
});

// =====================================
// HEALTH CHECK
// =====================================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

// =====================================
// GET AUTHENTICATED PLAYER PROFILE
// =====================================

app.get("/api/profile", authenticateToken, async (req, res) => {
  try {
    const player = await getPlayerByUserId(req.user.id);

    if (!player) {
      return res.status(404).json({
        success: false,
        message: "Player profile not found",
      });
    }

    const { data: recentMatches, error } = await supabase
      .from("game_history")
      .select("opponent_name, score, result, played_at")
      .eq("player_id", player.id)
      .order("played_at", {
        ascending: false,
      })
      .limit(10);

    if (error) {
      throw error;
    }

    const gamesPlayed = Number(player.games_played) || 0;
    const wins = Number(player.wins) || 0;

    const winRate =
      gamesPlayed > 0
        ? Number(((wins / gamesPlayed) * 100).toFixed(1))
        : 0;

    return res.json({
      success: true,
      player: {
        ...player,
        avatar_url: player.avatar_url || DEFAULT_AVATAR,
        win_rate: winRate,
      },
      recentMatches: recentMatches || [],
    });
  } catch (error) {
    console.error("Profile error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Could not load profile",
    });
  }
});

// =====================================
// CREATE PLAYER PROFILE
// =====================================

app.post("/api/profile", authenticateToken, async (req, res) => {
  try {
    const username = String(req.body.username || "")
      .trim()
      .slice(0, 20);

    const avatar = validateAvatar(req.body.avatar_url);

    if (!username || username.length < 3) {
      return res.status(400).json({
        success: false,
        message: "Username must contain at least 3 characters.",
      });
    }

    const existingPlayer = await getPlayerByUserId(req.user.id);

    if (existingPlayer) {
      return res.json({
        success: true,
        player: existingPlayer,
      });
    }

    // Check whether username belongs to another account
    const { data: usernameTaken, error: usernameError } =
      await supabase
        .from("players")
        .select("id")
        .eq("username", username)
        .maybeSingle();

    if (usernameError) {
      throw usernameError;
    }

    if (usernameTaken) {
      return res.status(409).json({
        success: false,
        message: "Username is already taken. Choose another username.",
      });
    }

    // Create a new player linked to the authenticated account
    const { data: newPlayer, error: insertError } = await supabase
      .from("players")
      .insert({
        user_id: req.user.id,
        username,
        avatar_url: avatar,
        xp: 0,
        wins: 0,
        games_played: 0,
      })
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    return res.status(201).json({
      success: true,
      player: newPlayer,
    });
  } catch (error) {
    console.error("Create profile error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Could not create profile",
    });
  }
});

// =====================================
// UPDATE PLAYER AVATAR
// =====================================

app.post(
  "/api/profile/avatar",
  authenticateToken,
  async (req, res) => {
    try {
      const avatar = validateAvatar(req.body.avatar_url);

      const { data, error } = await supabase
        .from("players")
        .update({
          avatar_url: avatar,
        })
        .eq("user_id", req.user.id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return res.json({
        success: true,
        player: data,
      });
    } catch (error) {
      console.error("Avatar update error:", error);

      return res.status(500).json({
        success: false,
        message: error.message || "Could not update avatar",
      });
    }
  }
);

// =====================================
// GLOBAL LEADERBOARD
// =====================================

app.get("/api/leaderboard", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("players")
      .select("username, xp, wins, games_played, avatar_url")
      .order("xp", {
        ascending: false,
      })
      .limit(10);

    if (error) {
      throw error;
    }

    return res.json({
      success: true,
      players: data || [],
    });
  } catch (error) {
    console.error("Leaderboard error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Could not load leaderboard",
    });
  }
});

// =====================================
// PUBLIC PLAYER PROFILE
// =====================================

app.get("/api/players/:username", async (req, res) => {
  try {
    const username = req.params.username;

    const { data: player, error: playerError } = await supabase
      .from("players")
      .select("id, username, xp, wins, games_played, avatar_url")
      .eq("username", username)
      .maybeSingle();

    if (playerError) {
      throw playerError;
    }

    if (!player) {
      return res.status(404).json({
        success: false,
        message: "Player not found",
      });
    }

    const { data: recentMatches, error: historyError } =
      await supabase
        .from("game_history")
        .select("opponent_name, score, result, played_at")
        .eq("player_id", player.id)
        .order("played_at", {
          ascending: false,
        })
        .limit(10);

    if (historyError) {
      throw historyError;
    }

    const gamesPlayed = Number(player.games_played) || 0;
    const wins = Number(player.wins) || 0;

    const winRate =
      gamesPlayed > 0
        ? Number(((wins / gamesPlayed) * 100).toFixed(1))
        : 0;

    return res.json({
      success: true,
      player: {
        ...player,
        avatar_url: player.avatar_url || DEFAULT_AVATAR,
        win_rate: winRate,
      },
      recentMatches: recentMatches || [],
    });
  } catch (error) {
    console.error("Player profile error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Could not load player profile",
    });
  }
});

// =====================================
// SOCKET.IO AUTHENTICATION
// =====================================

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth?.accessToken;

    if (!token) {
      return next(new Error("Authentication required"));
    }

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      return next(new Error("Invalid or expired session"));
    }

    const player = await getPlayerByUserId(user.id);

    if (!player) {
      return next(new Error("Player profile not found"));
    }

    socket.user = user;
    socket.playerProfile = player;

    next();
  } catch (error) {
    console.error("Socket authentication error:", error);

    next(new Error("Authentication failed"));
  }
});

// =====================================
// SOCKET.IO CONNECTION
// =====================================

io.on("connection", (socket) => {
  console.log(
    "Authenticated player connected:",
    socket.playerProfile.username
  );

  // =====================================
  // CREATE ROOM
  // =====================================

socket.on("createRoom", async (data = {}, callback) => {
    try {
      const player = await getAuthenticatedPlayer(socket.user.id);

      // Prevent this account from joining multiple rooms
      for (const room of rooms.values()) {
        if (
          room.players.some(
            (existing) => existing.user_id === socket.user.id
          )
        ) {
          return callback?.({
            success: false,
            message: "You are already in a room.",
          });
        }
      }

      const roomCode = generateRoomCode();

      const room = {
        code: roomCode,
        host: socket.id,

selectedCategories: Array.isArray(data.selectedCategories)
  ? data.selectedCategories

  : [],
        players: [
          {
            id: socket.id,
            user_id: socket.user.id,
            name: player.username,
            score: 0,
            avatar_url: validateAvatar(player.avatar_url),
          },
        ],

        started: false,
        finished: false,
        currentIndex: 0,
        gameQuestions: [],
        answers: new Set(),
        playerAnswers: new Map(),
        rankBeforeQuestion: new Map(),
        phase: "lobby",
        timer: null,
        advancing: false,
      };

      rooms.set(roomCode, room);

      socket.join(roomCode);

      callback?.({
        success: true,
        roomCode,
        players: publicPlayers(room),
      });

      console.log("Room created:", roomCode);
    } catch (error) {
      console.error("Create room error:", error);

      callback?.({
        success: false,
        message: error.message || "Could not create room",
      });
    }
  });

  // =====================================
  // JOIN ROOM
  // =====================================

  socket.on("joinRoom", async ({ roomCode } = {}, callback) => {
    try {
      const code = String(roomCode || "")
        .trim()
        .toUpperCase();

      const room = rooms.get(code);

      if (!room) {
        return callback?.({
          success: false,
          message: "Room not found",
        });
      }

      if (room.started) {
        return callback?.({
          success: false,
          message: "Game already started",
        });
      }

      if (room.players.length >= MAX_PLAYERS) {
        return callback?.({
          success: false,
          message: "Room is full",
        });
      }

      const alreadyJoined = room.players.some(
        (player) => player.user_id === socket.user.id
      );

      if (alreadyJoined) {
        return callback?.({
          success: false,
          message: "You are already in this room.",
        });
      }

      for (const otherRoom of rooms.values()) {
        if (
          otherRoom.players.some(
            (player) => player.user_id === socket.user.id
          )
        ) {
          return callback?.({
            success: false,
            message: "You are already in another room.",
          });
        }
      }

      const player = await getAuthenticatedPlayer(socket.user.id);

      room.players.push({
        id: socket.id,
        user_id: socket.user.id,
        name: player.username,
        score: 0,
        avatar_url: validateAvatar(player.avatar_url),
      });

      socket.join(code);

      io.to(code).emit("roomUpdated", publicPlayers(room));

      callback?.({
        success: true,
        roomCode: code,
        players: publicPlayers(room),
      });

      console.log(player.username, "joined room:", code);
    } catch (error) {
      console.error("Join room error:", error);

      callback?.({
        success: false,
        message: error.message || "Could not join room",
      });
    }
  });

  // =====================================
  // START GAME
  // =====================================

 socket.on("startGame", async ({ roomCode } = {}, callback) => {
  try {
    const code = String(roomCode || "")
      .trim()
      .toUpperCase();

    const room = rooms.get(code);

    if (!room) {
      return callback?.({
        success: false,
        message: "Room not found",
      });
    }

    if (room.host !== socket.id) {
      return callback?.({
        success: false,
        message: "Only the host can start the game",
      });
    }

    if (room.started) {
      return callback?.({
        success: false,
        message: "Game already started",
      });
    }

    if (room.players.length < 2) {
      return callback?.({
        success: false,
        message: "You need at least 2 players",
      });
    }

    // Get questions from the host-selected categories only.
    const selectedQuestions = room.selectedCategories.length > 0
      ? questions.filter((q) =>
          room.selectedCategories.includes(q.category)
        )
      : [...questions];

    // Every match contains exactly 3 easy, 4 medium, and 3 hard questions.
    const requiredMix = [
      { difficulty: "easy", count: 3 },
      { difficulty: "medium", count: 4 },
      { difficulty: "hard", count: 3 },
    ];

    const insufficient = requiredMix.find(({ difficulty, count }) =>
      selectedQuestions.filter((q) => q.difficulty === difficulty).length < count
    );

    if (insufficient) {
      return callback?.({
        success: false,
        message: `Not enough ${insufficient.difficulty} questions in the selected categories. Please select more categories.`,
      });
    }

    // Get authenticated player IDs and their previously seen questions.
    const userIds = room.players.map((player) => player.user_id);
    const seenByPlayer = await getSeenQuestions(userIds);

    // Fisher-Yates shuffle.
    const shuffle = (items) => {
      const result = [...items];

      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
      }

      return result;
    };

    // Prefer questions that none of the players has seen.
    const unseenByEveryone = (question) =>
      userIds.every(
        (userId) => !seenByPlayer.get(userId)?.has(question.id)
      );

    const chosenQuestions = [];

    for (const { difficulty, count } of requiredMix) {
      const pool = selectedQuestions.filter(
        (question) => question.difficulty === difficulty
      );

      const unseen = shuffle(pool.filter(unseenByEveryone));
      const previouslySeen = shuffle(
        pool.filter((question) => !unseenByEveryone(question))
      );

      chosenQuestions.push(
        ...unseen.slice(0, count),
        ...previouslySeen.slice(
          0,
          Math.max(0, count - unseen.length)
        )
      );
    }

    // Randomize question order without changing the 3/4/3 distribution.
    room.gameQuestions = shuffle(chosenQuestions);

    if (room.gameQuestions.length !== 10) {
      return callback?.({
        success: false,
        message: "Could not prepare 10 questions. Please try different categories.",
      });
    }

    room.started = true;
    room.finished = false;
    room.currentIndex = 0;
    room.answers = new Set();
    room.playerAnswers = new Map();
    room.phase = "answer";
    room.advancing = false;

    room.players.forEach((player) => {
      player.score = 0;
    });

    io.to(code).emit("gameStarted", {
      totalQuestions: room.gameQuestions.length,
      players: publicPlayers(room),
    });

    callback?.({
      success: true,
    });

    console.log("Game started:", code);

    void sendQuestion(room).catch((error) => {
      console.error("Initial question error:", error);
      stopTimer(room);
      room.started = false;
    });
  } catch (error) {
    console.error("Start game error:", error);

    callback?.({
      success: false,
      message: error.message || "Could not start game",
    });
  }
});

 // =====================================
// SUBMIT ANSWER
// =====================================

socket.on(
    "submitAnswer",
    ({ roomCode, answerIndex } = {}, callback) => {
      const acknowledge = (payload) => {
        if (typeof callback === "function") {
          callback(payload);
        }
      };

      try {
        const code = String(roomCode || "").trim().toUpperCase();
        const room = rooms.get(code);

        if (!room || !room.started) {
          return acknowledge({
            success: false,
            message: "Game is not running",
          });
        }

        if (room.phase !== "answer") {
          return acknowledge({
            success: false,
            message: "The answer phase has ended",
          });
        }

        const player = room.players.find((p) => p.id === socket.id);

        if (!player) {
          return acknowledge({
            success: false,
            message: "Player not found",
          });
        }

        const question = room.gameQuestions?.[room.currentIndex];

        if (!question || !Array.isArray(question.options)) {
          console.error("Submit answer error: current question is missing", {
            roomCode: code,
            currentIndex: room.currentIndex,
          });

          return acknowledge({
            success: false,
            message: "Current question is unavailable",
          });
        }

        if (!(room.answers instanceof Set)) {
          room.answers = new Set();
        }

        if (room.answers.has(socket.id)) {
          return acknowledge({
            success: false,
            message: "You already answered",
          });
        }

        const selectedAnswer = Number(answerIndex);

        if (
          answerIndex === null ||
          answerIndex === undefined ||
          answerIndex === "" ||
          !Number.isInteger(selectedAnswer) ||
          selectedAnswer < 0 ||
          selectedAnswer >= question.options.length
        ) {
          return acknowledge({
            success: false,
            message: "Invalid answer",
          });
        }

        const correct = selectedAnswer === Number(question.answer);

        // Record the answer before sending updates, so it cannot be submitted twice.
        room.answers.add(socket.id);

        let points = 0;
        let rank = null;

        if (correct) {
          if (!Array.isArray(room.correctAnswerOrder)) {
            room.correctAnswerOrder = [];
          }

          const pointsByRank = [10, 8, 6, 5, 4, 3, 2, 1];

          room.correctAnswerOrder.push(socket.id);
          rank = room.correctAnswerOrder.length;
          points = pointsByRank[rank - 1] || 0;
          player.score = (Number(player.score) || 0) + points;
        }

        if (!(room.playerAnswers instanceof Map)) {
          room.playerAnswers = new Map();
        }
        room.playerAnswers.set(socket.id, {
          answerIndex: selectedAnswer,
          isCorrect: correct,
          points,
        });

        acknowledge({
          success: true,
          correct,
          points,
          rank,
        });

        io.to(code).emit("answerUpdate", {
          players: publicPlayers(room),
          answeredCount: room.answers.size,
          totalPlayers: room.players.length,
        });

        // Advance immediately when all currently connected players have answered.
        if (
          room.started &&
          !room.advancing &&
          room.answers.size >= room.players.length
        ) {
          console.log(
            `All players answered in room ${code} (${room.answers.size}/${room.players.length}).`
          );
          void nextQuestion(room);
        }
      } catch (error) {
        console.error("Submit answer handler error:", error);

        acknowledge({
          success: false,
          message: "Could not submit answer. Please try again.",
        });
      }
    }
  );


  // =====================================
  // DISCONNECT
  // =====================================

  socket.on("disconnect", () => {
    for (const [code, room] of rooms) {
      const playerIndex = room.players.findIndex(
        (player) => player.id === socket.id
      );

      if (playerIndex === -1) {
        continue;
      }

      room.players.splice(playerIndex, 1);
      room.answers.delete(socket.id);
      room.playerAnswers?.delete(socket.id);

      if (room.players.length === 0) {
        stopTimer(room);
        rooms.delete(code);
      } else {
        if (room.host === socket.id) {
          room.host = room.players[0].id;
        }

        io.to(code).emit("roomUpdated", publicPlayers(room));

        if (
          room.started &&
          room.answers.size >= room.players.length
        ) {
          void nextQuestion(room);
        }
      }

      console.log("Player disconnected:", socket.id);

      break;
    }
  });
});

// =====================================
// START SERVER
// =====================================

const PORT = Number(process.env.PORT) || 3001;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log("Supabase connection configured!");
});
