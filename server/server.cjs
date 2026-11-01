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

const FRONTEND_URL = [
  "https://www.whoknowsmore.site",
  "https://whoknowsmore.site",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
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

const questions = [
  {
    category: "General Knowledge",
    en: "What is the largest planet in our solar system?",
    ar: "ما هو أكبر كوكب في المجموعة الشمسية؟",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    optionsAr: ["الأرض", "المريخ", "المشتري", "الزهرة"],
    answer: 2,
  },
  {
    category: "General Knowledge",
    en: "How many continents are there?",
    ar: "كم عدد القارات في العالم؟",
    options: ["5", "6", "7", "8"],
    optionsAr: ["5", "6", "7", "8"],
    answer: 2,
  },
  {
    category: "Sports",
    en: "How many players are on a football team on the field?",
    ar: "كم عدد لاعبي فريق كرة القدم داخل الملعب؟",
    options: ["9", "10", "11", "12"],
    optionsAr: ["9", "10", "11", "12"],
    answer: 2,
  },
  {
    category: "Sports",
    en: "Which country won the 2022 FIFA World Cup?",
    ar: "أي دولة فازت بكأس العالم لكرة القدم 2022؟",
    options: ["France", "Brazil", "Argentina", "Germany"],
    optionsAr: ["فرنسا", "البرازيل", "الأرجنتين", "ألمانيا"],
    answer: 2,
  },
  {
    category: "Movies & TV",
    en: "What is the name of the wizarding school in Harry Potter?",
    ar: "ما اسم مدرسة السحر في هاري بوتر؟",
    options: ["Narnia", "Hogwarts", "Neverland", "Camelot"],
    optionsAr: ["نارنيا", "هوغوورتس", "نيفرلاند", "كاميلوت"],
    answer: 1,
  },
  {
    category: "Movies & TV",
    en: "Which movie features the character Jack Sparrow?",
    ar: "في أي سلسلة أفلام تظهر شخصية جاك سبارو؟",
    options: [
      "Titanic",
      "Avatar",
      "Pirates of the Caribbean",
      "Jaws",
    ],
    optionsAr: [
      "تايتانيك",
      "أفاتار",
      "قراصنة الكاريبي",
      "الفك المفترس",
    ],
    answer: 2,
  },
  {
    category: "Science",
    en: "What is the chemical symbol for water?",
    ar: "ما الرمز الكيميائي للماء؟",
    options: ["CO2", "H2O", "O2", "NaCl"],
    optionsAr: ["CO2", "H2O", "O2", "NaCl"],
    answer: 1,
  },
  {
    category: "Science",
    en: "Which planet is known as the Red Planet?",
    ar: "أي كوكب يُعرف بالكوكب الأحمر؟",
    options: ["Venus", "Saturn", "Mars", "Mercury"],
    optionsAr: ["الزهرة", "زحل", "المريخ", "عطارد"],
    answer: 2,
  },
  {
    category: "Gaming",
    en: "Which company created Minecraft?",
    ar: "أي شركة طورت لعبة ماينكرافت؟",
    options: ["Nintendo", "Mojang", "Sony", "Valve"],
    optionsAr: ["نينتندو", "موجانغ", "سوني", "فالف"],
    answer: 1,
  },
  {
    category: "Gaming",
    en: "What is the main character's name in The Legend of Zelda?",
    ar: "ما اسم الشخصية الرئيسية في لعبة The Legend of Zelda؟",
    options: ["Mario", "Link", "Kirby", "Sonic"],
    optionsAr: ["ماريو", "لينك", "كيربي", "سونيك"],
    answer: 1,
  },
  {
    category: "Geography",
    en: "What is the capital of Japan?",
    ar: "ما عاصمة اليابان؟",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    optionsAr: ["سيول", "بكين", "طوكيو", "بانكوك"],
    answer: 2,
  },
  {
    category: "Geography",
    en: "Which is the largest ocean on Earth?",
    ar: "ما أكبر محيط على الأرض؟",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    optionsAr: ["الأطلسي", "الهندي", "المتجمد الشمالي", "الهادئ"],
    answer: 3,
  },
];

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

function sendQuestion(room) {
  stopTimer(room);

  if (room.currentIndex >= room.gameQuestions.length) {
    finishGame(room);
    return;
  }

  room.answers = new Set();

  const question = room.gameQuestions[room.currentIndex];

  io.to(room.code).emit("questionStarted", {
    question: {
      category: question.category,
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
    nextQuestion(room);
  }, QUESTION_TIME * 1000);
}

function nextQuestion(room) {
  if (!room.started) {
    return;
  }

  stopTimer(room);

  room.currentIndex += 1;

  sendQuestion(room);
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

  socket.on("createRoom", async (_data = {}, callback) => {
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
        timer: null,
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

  socket.on("startGame", ({ roomCode } = {}, callback) => {
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

    room.started = true;
    room.finished = false;
    room.currentIndex = 0;
    room.answers = new Set();

    room.players.forEach((player) => {
      player.score = 0;
    });

    room.gameQuestions = [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    io.to(code).emit("gameStarted", {
      totalQuestions: room.gameQuestions.length,
      players: publicPlayers(room),
    });

    callback?.({
      success: true,
    });

    console.log("Game started:", code);

    sendQuestion(room);
  });

  // =====================================
  // SUBMIT ANSWER
  // =====================================

  socket.on(
    "submitAnswer",
    ({ roomCode, answerIndex } = {}, callback) => {
      const code = String(roomCode || "")
        .trim()
        .toUpperCase();

      const room = rooms.get(code);

      if (!room || !room.started) {
        return callback?.({
          success: false,
          message: "Game is not running",
        });
      }

      const player = room.players.find(
        (p) => p.id === socket.id
      );

      if (!player) {
        return callback?.({
          success: false,
          message: "Player not found",
        });
      }

      if (room.answers.has(socket.id)) {
        return callback?.({
          success: false,
          message: "You already answered",
        });
      }

      const question = room.gameQuestions[room.currentIndex];

      if (
        !Number.isInteger(Number(answerIndex)) ||
        Number(answerIndex) < 0 ||
        Number(answerIndex) >= question.options.length
      ) {
        return callback?.({
          success: false,
          message: "Invalid answer",
        });
      }

      const correct =
        Number(answerIndex) === question.answer;

      room.answers.add(socket.id);

      if (correct) {
        player.score += 10;
      }

      callback?.({
        success: true,
        correct,
      });

      io.to(code).emit("answerUpdate", {
        players: publicPlayers(room),
        answeredCount: room.answers.size,
        totalPlayers: room.players.length,
      });

      if (room.answers.size === room.players.length) {
        nextQuestion(room);
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
          room.answers.size === room.players.length
        ) {
          nextQuestion(room);
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

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Supabase connection configured!");
});

