import { useCallback, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { supabase } from "./lib/supabase";
import "./App.css";

const SERVER_URL =
  import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

const AVATARS = [
  {
    id: "suit-cap",
    name: "Suit & Cap",
    nameAr: "البدلة والكاب",
    url: "/avatars/suit-cap.jpeg",
  },
  {
    id: "long-hair",
    name: "Long Hair",
    nameAr: "الشعر الطويل",
    url: "/avatars/long-hair.jpeg",
  },
  {
    id: "saudi-thobe",
    name: "Saudi Thobe",
    nameAr: "الثوب السعودي",
    url: "/avatars/saudi-thobe.jpeg",
  },
];

const DEFAULT_AVATAR = AVATARS[0].url;

// =====================================
// AVATAR COMPONENT
// =====================================

function Avatar({ src, alt = "Player avatar", className = "" }) {
  return (
    <img
      className={`player-avatar-image ${className}`}
      src={src || DEFAULT_AVATAR}
      alt={alt}
      onError={(event) => {
        event.currentTarget.src = DEFAULT_AVATAR;
      }}
    />
  );
}

// =====================================
// APP
// =====================================

function App() {
  const [language, setLanguage] = useState("en");
  const [screen, setScreen] = useState("home");

  // AUTHENTICATION
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authMode, setAuthMode] = useState("login");

  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authUsername, setAuthUsername] = useState("");

  const [authError, setAuthError] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [authSubmitting, setAuthSubmitting] = useState(false);
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [profileSetupLoading, setProfileSetupLoading] = useState(false);

  // MULTIPLAYER
  const [multiplayerView, setMultiplayerView] = useState("menu");
  const [playerName, setPlayerName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [roomPlayers, setRoomPlayers] = useState([]);
  const [roomError, setRoomError] = useState("");
  const [isHost, setIsHost] = useState(false);
  // QUESTION CATEGORIES
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [socketConnected, setSocketConnected] = useState(false);
  const [socketId, setSocketId] = useState(null);

  // AVATAR
  const [selectedAvatar, setSelectedAvatar] = useState(DEFAULT_AVATAR);

  // MULTIPLAYER GAME
  const [mpQuestion, setMpQuestion] = useState(null);
  const [mpIndex, setMpIndex] = useState(0);
  const [mpTotal, setMpTotal] = useState(10);
  const [mpTime, setMpTime] = useState(15);
  const [mpSelected, setMpSelected] = useState(null);
  const [mpPlayers, setMpPlayers] = useState([]);
  const [mpAnswered, setMpAnswered] = useState(0);
  const [mpFinished, setMpFinished] = useState([]);
  const [mpError, setMpError] = useState("");

  // LEADERBOARD
  const [leaderboardPlayers, setLeaderboardPlayers] = useState([]);
  const [leaderboardLoading, setLeaderboardLoading] = useState(true);
  const [leaderboardError, setLeaderboardError] = useState("");

  // PLAYER PROFILE
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileError, setProfileError] = useState("");

  const socketRef = useRef(null);

  const isArabic = language === "ar";

  const text = useCallback(
    (en, ar) => (isArabic ? ar : en),
    [isArabic]
  );

  // =====================================
  // AUTHENTICATED API REQUEST
  // =====================================

  async function authenticatedFetch(endpoint, options = {}) {
  const {
    data: { session: currentSession },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    throw new Error(sessionError.message);
  }

  if (!currentSession?.access_token) {
    throw new Error("Please log in again.");
  }

  const response = await fetch(`${SERVER_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
      Authorization: `Bearer ${currentSession.access_token}`,
    },
  });

  // Read response as text first
  const responseText = await response.text();

  // Check whether the server returned JSON
  let data;

  try {
    data = JSON.parse(responseText);
  } catch {
    console.error("Server returned non-JSON:", {
      endpoint,
      status: response.status,
      response: responseText.slice(0, 500),
    });

    throw new Error(
      `Server returned an invalid response (${response.status}). Check that the backend is running on port 3001 and the API endpoint is correct.`
    );
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Request failed.");
  }

  return data;
}

  // =====================================
  // LOAD PLAYER PROFILE
  // =====================================

  const loadMyProfile = useCallback(async (currentSession) => {
    if (!currentSession) return;

    setProfileSetupLoading(true);
    setAuthError("");

    try {
      const response = await fetch(`${SERVER_URL}/api/profile`, {
        headers: {
          Authorization: `Bearer ${currentSession.access_token}`,
        },
      });


      async function readApiResponse(apiResponse) {
        const responseText = await apiResponse.text();

        try {
          return JSON.parse(responseText);
        } catch {
          console.error("Invalid API response:", {
            status: apiResponse.status,
            url: apiResponse.url,
            body: responseText.slice(0, 500),
          });

          throw new Error(
            `Server returned a non-JSON response. Status: ${apiResponse.status}. URL: ${apiResponse.url}. Make sure the backend is running on port 3001.`
          );
        }
      }

      let data = await readApiResponse(response);

      if (response.status === 404) {
        const savedUsername =
          localStorage.getItem("pendingUsername") ||
          currentSession.user.email?.split("@")[0] ||
          "Player";

        const savedAvatar =
          localStorage.getItem("selectedAvatar") || DEFAULT_AVATAR;

        const createResponse = await fetch(
          `${SERVER_URL}/api/profile`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${currentSession.access_token}`,
            },
            body: JSON.stringify({
              username: savedUsername,
              avatar_url: savedAvatar,
            }),
          }
        );

        data = await readApiResponse(createResponse);

        if (!createResponse.ok || !data.success) {
          throw new Error(
            data.message || "Could not create player profile."
          );
        }
      } else if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Could not load player profile."
        );
      }

      setCurrentPlayer(data.player);
      setPlayerName(data.player.username);

      const avatar = data.player.avatar_url || DEFAULT_AVATAR;

      setSelectedAvatar(avatar);
      localStorage.setItem("selectedAvatar", avatar);
      localStorage.removeItem("pendingUsername");
    } catch (error) {
      console.error("Player profile setup error:", error);
      setAuthError(error.message || "Could not load your profile.");
    } finally {
      setProfileSetupLoading(false);
    }
  }, []);

  // =====================================
  // CHECK EXISTING SESSION
  // =====================================

  useEffect(() => {
    let mounted = true;

    async function initializeAuth() {
      try {
        const {
          data: { session: existingSession },
        } = await supabase.auth.getSession();

        if (mounted) {
          setSession(existingSession);
        }
      } catch (error) {
        console.error("Session initialization error:", error);
      } finally {
        if (mounted) {
          setAuthLoading(false);
        }
      }
    }

    initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, newSession) => {
      if (event === "PASSWORD_RECOVERY") {
        setIsPasswordRecovery(true);
        setAuthError("");
        setAuthMessage("");
      }
      setSession(newSession);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // =====================================
  // LOAD PROFILE WHEN LOGGED IN
  // =====================================

  useEffect(() => {
    const timer = setTimeout(() => {
      if (session) {
        loadMyProfile(session);
      } else {
        setCurrentPlayer(null);
        setPlayerName("");
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [session, loadMyProfile]);

  // =====================================
  // SIGN UP
  // =====================================

  async function handleSignUp(event) {
    event.preventDefault();

    setAuthError("");
    setAuthMessage("");

    const username = authUsername.trim();

    if (!username) {
      setAuthError(text("Enter a username.", "أدخل اسم المستخدم."));
      return;
    }

    if (username.length < 3) {
      setAuthError(
        text(
          "Username must be at least 3 characters.",
          "اسم المستخدم يجب أن يكون 3 أحرف على الأقل."
        )
      );
      return;
    }

    if (!authEmail.trim() || authPassword.length < 6) {
      setAuthError(
        text(
          "Enter a valid email and a password with at least 6 characters.",
          "أدخل بريدًا إلكترونيًا صحيحًا وكلمة مرور من 6 أحرف على الأقل."
        )
      );
      return;
    }

    setAuthSubmitting(true);

    try {
      localStorage.setItem("pendingUsername", username);

      const { data, error } = await supabase.auth.signUp({
        email: authEmail.trim().toLowerCase(),
        password: authPassword,
      });

      if (error) throw error;

      if (data.session) {
        setSession(data.session);

        setAuthMessage(
          text(
            "Account created successfully!",
            "تم إنشاء الحساب بنجاح!"
          )
        );
      } else {
        setAuthMessage(
          text(
            "Account created! Check your email to confirm your account, then log in.",
            "تم إنشاء الحساب! تحقق من بريدك الإلكتروني لتأكيد الحساب، ثم سجّل الدخول."
          )
        );

        setAuthMode("login");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      setAuthError(error.message || "Could not create account.");
    } finally {
      setAuthSubmitting(false);
    }
  }

  // =====================================
  // FORGOT PASSWORD
  // =====================================

  async function handleForgotPassword() {
    setAuthError("");
    setAuthMessage("");

    const email = authEmail.trim().toLowerCase();

    if (!email) {
      setAuthError(
        text(
          "Enter your email first.",
          "أدخل بريدك الإلكتروني أولًا."
        )
      );
      return;
    }

    setAuthSubmitting(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin,
      });

      if (error) throw error;

      setAuthMessage(
        text(
          "If an account exists for this email, a password reset link has been sent. Check your inbox and spam folder.",
          "إذا كان هناك حساب بهذا البريد، فسيصلك رابط إعادة تعيين كلمة المرور. تحقق من الوارد والبريد غير الهام."
        )
      );
    } catch (error) {
      console.error("Password reset error:", error);
      setAuthError(error.message || "Could not send password reset email.");
    } finally {
      setAuthSubmitting(false);
    }
  }

  // =====================================
  // UPDATE PASSWORD AFTER RESET LINK
  // =====================================

  async function handleUpdatePassword(event) {
    event.preventDefault();
    setAuthError("");
    setAuthMessage("");

    if (newPassword.length < 6) {
      setAuthError(
        text(
          "Password must be at least 6 characters.",
          "كلمة المرور يجب أن تكون 6 أحرف على الأقل."
        )
      );
      return;
    }

    setAuthSubmitting(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) throw error;

      setIsPasswordRecovery(false);
      setNewPassword("");
      setAuthPassword("");
      setAuthMessage(
        text(
          "Password updated successfully. You can continue.",
          "تم تحديث كلمة المرور بنجاح. تقدر تكمل الآن."
        )
      );
    } catch (error) {
      console.error("Update password error:", error);
      setAuthError(error.message || "Could not update password.");
    } finally {
      setAuthSubmitting(false);
    }
  }

  // =====================================
  // LOGIN
  // =====================================

  async function handleLogin(event) {
    event.preventDefault();

    setAuthError("");
    setAuthMessage("");

    if (!authEmail.trim() || !authPassword) {
      setAuthError(
        text(
          "Enter your email and password.",
          "أدخل البريد الإلكتروني وكلمة المرور."
        )
      );
      return;
    }

    setAuthSubmitting(true);

    try {
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email: authEmail.trim().toLowerCase(),
          password: authPassword,
        });

      if (error) throw error;

      setSession(data.session);

      setAuthMessage(
        text("Login successful!", "تم تسجيل الدخول بنجاح!")
      );
    } catch (error) {
      console.error("Login error:", error);
      setAuthError(error.message || "Login failed.");
    } finally {
      setAuthSubmitting(false);
    }
  }

  // =====================================
  // LOGOUT
  // =====================================

  async function handleLogout() {
    try {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }

      await supabase.auth.signOut();

      setSession(null);
      setCurrentPlayer(null);
      setScreen("home");
      setMultiplayerView("menu");

      setSocketConnected(false);
      setSocketId(null);

      setRoomPlayers([]);
      setRoomCode("");
      setIsHost(false);
      setRoomError("");

      setMpQuestion(null);
      setMpPlayers([]);
      setMpFinished([]);
      setMpSelected(null);

      setAuthEmail("");
      setAuthPassword("");
      setAuthUsername("");
      setAuthError("");
      setAuthMessage("");
    } catch (error) {
      console.error("Logout error:", error);
      setAuthError(error.message || "Could not log out.");
    }
  }

  // =====================================
  // AVATAR SELECTION
  // =====================================

  async function chooseAvatar(avatarUrl) {
    if (!AVATARS.some((avatar) => avatar.url === avatarUrl)) {
      return;
    }

    const previousAvatar = currentPlayer?.avatar_url || selectedAvatar;

    // Update the UI immediately; restore the previous avatar if saving fails.
    setSelectedAvatar(avatarUrl);
    localStorage.setItem("selectedAvatar", avatarUrl);
    setRoomError("");

    if (!session || !currentPlayer) {
      return;
    }

    try {
      // The server has a dedicated authenticated avatar endpoint.
      const data = await authenticatedFetch("/api/profile/avatar", {
        method: "POST",
        body: JSON.stringify({
          avatar_url: avatarUrl,
        }),
      });

      setCurrentPlayer(data.player);
      setSelectedAvatar(data.player.avatar_url || avatarUrl);
      localStorage.setItem(
        "selectedAvatar",
        data.player.avatar_url || avatarUrl
      );
    } catch (error) {
      console.error("Avatar save error:", error);

      setSelectedAvatar(previousAvatar);
      localStorage.setItem("selectedAvatar", previousAvatar);

      setRoomError(
        error.message ||
          text(
            "Could not save your avatar. Please try again.",
            "تعذر حفظ صورتك الشخصية. حاول مرة أخرى."
          )
      );
    }
  }

  // =====================================
  // LEADERBOARD
  // =====================================

  const loadLeaderboard = useCallback(async () => {
    try {
      setLeaderboardLoading(true);
      setLeaderboardError("");

      const response = await fetch(
        `${SERVER_URL}/api/leaderboard`
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Failed to fetch leaderboard");
      }

      setLeaderboardPlayers(data.players || []);
    } catch (error) {
      console.error("Leaderboard error:", error);

      setLeaderboardError(
        text(
          "Could not load leaderboard.",
          "تعذر تحميل لوحة المتصدرين."
        )
      );
    } finally {
      setLeaderboardLoading(false);
    }
  }, [text]);

  // FIXED EFFECT: defer leaderboard loading
  useEffect(() => {
    const timer = setTimeout(() => {
      loadLeaderboard();
    }, 0);

    return () => clearTimeout(timer);
  }, [loadLeaderboard]);

  // =====================================
  // PLAYER PROFILE
  // =====================================

  async function openPlayerProfile(username) {
    setScreen("profile");
    setSelectedProfile(null);
    setProfileLoading(true);
    setProfileError("");

    try {
      const response = await fetch(
        `${SERVER_URL}/api/players/${encodeURIComponent(username)}`
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Could not load profile");
      }

      setSelectedProfile(data);
    } catch (error) {
      console.error("Profile error:", error);

      setProfileError(
        error.message || "Could not load player profile."
      );
    } finally {
      setProfileLoading(false);
    }
  }

  function backToLeaderboard() {
    setScreen("home");

    setTimeout(() => {
      document
        .getElementById("leaderboard")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  // =====================================
  // SOCKET CONNECTION
  // =====================================

  async function openMultiplayer() {
    setRoomError("");
    setMultiplayerView("menu");
    setScreen("multiplayer");

    if (!session || !currentPlayer) {
      setRoomError(
        text(
          "Your profile is still loading. Please wait.",
          "ملفك الشخصي لا يزال قيد التحميل. انتظر قليلًا."
        )
      );
      return;
    }

    if (socketRef.current) {
      if (socketRef.current.connected) return;

      socketRef.current.disconnect();
      socketRef.current = null;
    }

    const socket = io(SERVER_URL, {
      auth: {
        accessToken: session.access_token,
      },
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      setSocketConnected(true);
      setSocketId(socket.id);
      setRoomError("");
    });

    socket.on("connect_error", (error) => {
      setSocketConnected(false);

      setRoomError(
        error.message === "Authentication required" ||
          error.message === "Invalid or expired session"
          ? text(
              "Your session expired. Please log in again.",
              "انتهت جلستك. سجّل الدخول مرة أخرى."
            )
          : text(
              "Cannot connect to the game server.",
              "تعذر الاتصال بسيرفر اللعبة."
            )
      );
    });

    socket.on("disconnect", () => {
      setSocketConnected(false);
      setSocketId(null);
    });

    socket.on("roomUpdated", (updatedPlayers) => {
      setRoomPlayers(updatedPlayers);
      setMpPlayers(updatedPlayers);
    });

    socket.on("gameStarted", (data) => {
      setMpPlayers(data.players);
      setMpTotal(data.totalQuestions);
      setMpError("");
      setScreen("multiplayerQuiz");
    });

    socket.on("questionStarted", (data) => {
      setMpQuestion(data.question);
      setMpIndex(data.currentIndex);
      setMpTotal(data.totalQuestions);
      setMpTime(data.timeLeft);
      setMpSelected(null);
      setMpAnswered(0);
      setMpPlayers(data.players);
      setMpError("");
      setScreen("multiplayerQuiz");
    });

    socket.on("answerUpdate", (data) => {
      setMpPlayers(data.players);
      setMpAnswered(data.answeredCount);
    });

    socket.on("gameFinished", (data) => {
      setMpFinished(data.players);
      setMpPlayers(data.players);
      setScreen("multiplayerResult");
      loadLeaderboard();
    });
  }

  // =====================================
  // CREATE ROOM
  // =====================================

  function createRoom() {
    const socket = socketRef.current;

    if (!socket || !socket.connected) {
      setRoomError(
        text(
          "Connecting to server. Try again.",
          "جاري الاتصال بالسيرفر. حاول مرة أخرى."
        )
      );
      return;
    }

socket.emit(
  "createRoom",
  {
    selectedCategories,
  },
  (response) => {
      if (!response?.success) {
        setRoomError(
          response?.message || "Could not create room."
        );
        return;
      }

      setRoomCode(response.roomCode);
      setRoomPlayers(response.players);
      setIsHost(true);
      setMultiplayerView("lobby");
      setRoomError("");
    });
  }

  // =====================================
  // JOIN ROOM
  // =====================================

  function joinRoom() {
    const socket = socketRef.current;

    if (!socket || !socket.connected) {
      setRoomError(
        text(
          "Connecting to server. Try again.",
          "جاري الاتصال بالسيرفر. حاول مرة أخرى."
        )
      );
      return;
    }

    if (!roomCode.trim()) {
      setRoomError(
        text(
          "Enter the room code.",
          "أدخل كود الغرفة."
        )
      );
      return;
    }

    socket.emit(
      "joinRoom",
      {
        roomCode: roomCode.trim(),
      },
      (response) => {
        if (!response?.success) {
          setRoomError(
            response?.message || "Could not join room."
          );
          return;
        }

        setRoomCode(response.roomCode);
        setRoomPlayers(response.players);
        setIsHost(false);
        setMultiplayerView("lobby");
        setRoomError("");
      }
    );
  }

  // =====================================
  // START GAME
  // =====================================

  function startMultiplayerGame() {
    const socket = socketRef.current;

    if (!socket || !socket.connected) return;

    setMpError("");

    socket.emit("startGame", { roomCode }, (response) => {
      if (!response?.success) {
        setMpError(
          response?.message || "Could not start the game."
        );
      }
    });
  }

  // =====================================
  // SUBMIT ANSWER
  // =====================================

  function submitMultiplayerAnswer(index) {
    if (mpSelected !== null) return;

    const socket = socketRef.current;

    if (!socket || !socket.connected) return;

    setMpSelected(index);
    setMpError("");

    socket.emit(
      "submitAnswer",
      {
        roomCode,
        answerIndex: index,
      },
      (response) => {
        if (!response?.success) {
          setMpError(
            response?.message || "Answer submission failed."
          );
        }
      }
    );
  }

  // =====================================
  // MULTIPLAYER TIMER
  // =====================================

  useEffect(() => {
    if (
      screen !== "multiplayerQuiz" ||
      mpSelected !== null ||
      mpTime <= 0
    ) {
      return;
    }

    const timer = setInterval(() => {
      setMpTime((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [screen, mpIndex, mpSelected, mpTime]);

  // =====================================
  // LEAVE ROOM
  // =====================================

  function leaveRoom() {
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
    }

    setSocketConnected(false);
    setSocketId(null);
    setRoomPlayers([]);
    setRoomCode("");
    setIsHost(false);
    setRoomError("");
    setMultiplayerView("menu");

    setMpQuestion(null);
    setMpPlayers([]);
    setMpFinished([]);
    setMpSelected(null);
    setMpError("");

    setScreen("home");
    loadLeaderboard();
  }

  // =====================================
  // NAVIGATION
  // =====================================

  function goHome() {
    setScreen("home");
  }

  function goToLeaderboard() {
    setScreen("home");

    setTimeout(() => {
      document
        .getElementById("leaderboard")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  // =====================================
  // PASSWORD RECOVERY SCREEN
  // =====================================

  if (isPasswordRecovery) {
    return (
      <div className="app" dir={isArabic ? "rtl" : "ltr"}>
        <header className="navbar">
          <a className="logo" href="#home">
            <span className="logo-icon">✦</span>
            WHO KNOWS MORE
            <span className="purple">?</span>
          </a>
          <button
            className="language-button"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
          >
            {isArabic ? "EN" : "AR"}
          </button>
        </header>

        <main className="game-screen">
          <div className="quiz-card multiplayer-card auth-card">
            <span className="section-label">
              {text("PASSWORD RESET", "إعادة تعيين كلمة المرور")}
            </span>
            <h1 className="question-title">
              {text("Choose a new password", "اختر كلمة مرور جديدة")}
            </h1>
            <form onSubmit={handleUpdatePassword}>
              <label className="multiplayer-label">
                {text("New password", "كلمة المرور الجديدة")}
              </label>
              <input
                className="multiplayer-input"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                minLength={6}
                placeholder={text("At least 6 characters", "6 أحرف على الأقل")}
                required
              />
              {authError && <p className="room-error">{authError}</p>}
              {authMessage && <p className="multiplayer-description">{authMessage}</p>}
              <div className="multiplayer-actions">
                <button className="primary-button" type="submit" disabled={authSubmitting}>
                  {authSubmitting
                    ? text("Please wait...", "انتظر...")
                    : text("UPDATE PASSWORD", "تحديث كلمة المرور")}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }

  // =====================================
  // AUTH LOADING
  // =====================================

  if (authLoading) {
    return (
      <div className="app">
        <main className="game-screen">
          <div className="quiz-card">
            <h2>{text("Loading...", "جاري التحميل...")}</h2>
          </div>
        </main>
      </div>
    );
  }

  // =====================================
  // AUTH SCREEN
  // =====================================

  if (!session) {
    return (
      <div className="app" dir={isArabic ? "rtl" : "ltr"}>
        <header className="navbar">
          <a className="logo" href="#home">
            <span className="logo-icon">✦</span>
            WHO KNOWS MORE
            <span className="purple">?</span>
          </a>

          <button
            className="language-button"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
          >
            {isArabic ? "EN" : "AR"}
          </button>
        </header>

        <main className="game-screen">
          <div className="quiz-card multiplayer-card auth-card">
            <span className="section-label">
              {text("WELCOME", "مرحبًا بك")}
            </span>

            <h1 className="question-title">
              {authMode === "login"
                ? text("Welcome Back!", "مرحبًا بعودتك!")
                : text("Create Account", "إنشاء حساب")}
            </h1>

            <p className="multiplayer-description">
              {text(
                "Log in to save your avatar, XP, and game progress.",
                "سجّل الدخول لحفظ صورتك ونقاطك وتقدمك في اللعبة."
              )}
            </p>

            <form
              onSubmit={
                authMode === "login"
                  ? handleLogin
                  : handleSignUp
              }
            >
              {authMode === "signup" && (
                <>
                  <label className="multiplayer-label">
                    {text("Username", "اسم المستخدم")}
                  </label>

                  <input
                    className="multiplayer-input"
                    type="text"
                    value={authUsername}
                    onChange={(e) => setAuthUsername(e.target.value)}
                    maxLength={20}
                    minLength={3}
                    placeholder={text(
                      "Choose a username",
                      "اختر اسم مستخدم"
                    )}
                    required
                  />
                </>
              )}

              <label className="multiplayer-label">
                {text("Email", "البريد الإلكتروني")}
              </label>

              <input
                className="multiplayer-input"
                type="email"
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="example@email.com"
                required
              />

              <label className="multiplayer-label">
                {text("Password", "كلمة المرور")}
              </label>

              <input
                className="multiplayer-input"
                type="password"
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                minLength={6}
                placeholder={text(
                  "At least 6 characters",
                  "6 أحرف على الأقل"
                )}
                required
              />

              {authMode === "login" && (
                <button
                  className="secondary-button"
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={authSubmitting}
                  style={{ marginTop: "10px" }}
                >
                  {text("FORGOT PASSWORD?", "نسيت كلمة المرور؟")}
                </button>
              )}

              {authError && (
                <p className="room-error">{authError}</p>
              )}

              {authMessage && (
                <p className="multiplayer-description">
                  {authMessage}
                </p>
              )}

              <div className="multiplayer-actions">
                <button
                  className="primary-button"
                  type="submit"
                  disabled={authSubmitting}
                >
                  {authSubmitting
                    ? text("Please wait...", "انتظر...")
                    : authMode === "login"
                      ? text("LOGIN", "تسجيل الدخول")
                      : text("CREATE ACCOUNT", "إنشاء حساب")}
                </button>
              </div>
            </form>

            <div className="room-divider">
              <span>{text("OR", "أو")}</span>
            </div>

            <button
              className="secondary-button"
              onClick={() => {
                setAuthMode(
                  authMode === "login" ? "signup" : "login"
                );
                setAuthError("");
                setAuthMessage("");
              }}
            >
              {authMode === "login"
                ? text("CREATE NEW ACCOUNT", "إنشاء حساب جديد")
                : text(
                    "ALREADY HAVE AN ACCOUNT? LOGIN",
                    "لديك حساب؟ سجّل الدخول"
                  )}
            </button>
          </div>
        </main>

        <footer>
          <p>
            © 2026 WHO KNOWS MORE? —{" "}
            {text("Think. Play. Win.", "فكر. العب. اربح.")}
          </p>
        </footer>
      </div>
    );
  }

  // =====================================
  // RETRY PLAYER PROFILE CREATION
  // =====================================

  async function retryCreatePlayerProfile() {
    const username =
      authUsername.trim() ||
      localStorage.getItem("pendingUsername") ||
      session?.user?.email?.split("@")[0] ||
      "";

    if (username.length < 3) {
      setAuthError(
        text(
          "Username must be at least 3 characters.",
          "اسم المستخدم يجب أن يكون 3 أحرف على الأقل."
        )
      );
      return;
    }

    setProfileSetupLoading(true);
    setAuthError("");

    try {
      const data = await authenticatedFetch("/api/profile", {
        method: "POST",
        body: JSON.stringify({
          username,
          avatar_url:
            localStorage.getItem("selectedAvatar") || DEFAULT_AVATAR,
        }),
      });

      setCurrentPlayer(data.player);
      setPlayerName(data.player.username);

      const avatar = data.player.avatar_url || DEFAULT_AVATAR;
      setSelectedAvatar(avatar);
      localStorage.setItem("selectedAvatar", avatar);
      localStorage.removeItem("pendingUsername");
      setAuthUsername(data.player.username);
    } catch (error) {
      console.error("Retry profile creation error:", error);
      setAuthError(error.message || "Could not create player profile.");
    } finally {
      setProfileSetupLoading(false);
    }
  }

  // =====================================
  // PROFILE LOADING
  // =====================================

  if (profileSetupLoading || !currentPlayer) {
    const suggestedUsername =
      authUsername ||
      localStorage.getItem("pendingUsername") ||
      session?.user?.email?.split("@")[0] ||
      "";

    return (
      <div className="app" dir={isArabic ? "rtl" : "ltr"}>
        <main className="game-screen">
          <div className="quiz-card multiplayer-card auth-card">
            <h2>
              {text(
                "Setting up your player profile...",
                "جاري تجهيز ملفك الشخصي..."
              )}
            </h2>

            {profileSetupLoading && (
              <p className="multiplayer-description">
                {text("Please wait...", "يرجى الانتظار...")}
              </p>
            )}

            {authError && (
              <>
                <p className="room-error">{authError}</p>

                <label className="multiplayer-label" htmlFor="profile-username">
                  {text("Choose a different username", "اختر اسم مستخدم مختلفًا")}
                </label>

                <input
                  id="profile-username"
                  className="multiplayer-input"
                  type="text"
                  value={authUsername || suggestedUsername}
                  onChange={(event) => setAuthUsername(event.target.value)}
                  minLength={3}
                  maxLength={20}
                  autoComplete="username"
                  placeholder={text("Enter a username", "أدخل اسم المستخدم")}
                />

                <div className="multiplayer-actions">
                  <button
                    className="primary-button"
                    type="button"
                    onClick={retryCreatePlayerProfile}
                    disabled={profileSetupLoading}
                  >
                    {text("SAVE USERNAME & RETRY", "حفظ الاسم وإعادة المحاولة")}
                  </button>
                </div>

                <button
                  className="secondary-button"
                  type="button"
                  onClick={handleLogout}
                >
                  {text("LOG OUT", "تسجيل الخروج")}
                </button>
              </>
            )}
          </div>
        </main>
      </div>
    );
  }

  // =====================================
  // MAIN UI
  // =====================================

  return (
    <div className="app" dir={isArabic ? "rtl" : "ltr"}>
      {/* NAVBAR */}

      <header className="navbar">
        <a
          className="logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            goHome();
          }}
        >
          <span className="logo-icon">✦</span>
          WHO KNOWS MORE
          <span className="purple">?</span>
        </a>

        <nav className="nav-links">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              goHome();
            }}
          >
            {text("Home", "الرئيسية")}
          </a>

          <a
            href="#leaderboard"
            onClick={(e) => {
              e.preventDefault();
              goToLeaderboard();
            }}
          >
            {text("Leaderboard", "المتصدرون")}
          </a>

          <a
            href="#play"
            onClick={(e) => {
              e.preventDefault();
              openMultiplayer();
            }}
          >
            {text("Play", "العب")}
          </a>
        </nav>

        <div className="nav-user">
          <Avatar
            src={currentPlayer.avatar_url}
            alt={currentPlayer.username}
          />

          <span>{currentPlayer.username}</span>

          <button
            className="language-button"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
          >
            {isArabic ? "EN" : "AR"}
          </button>

          <button
            className="secondary-button"
            onClick={handleLogout}
          >
            {text("LOG OUT", "خروج")}
          </button>
        </div>
      </header>

      {/* HOME */}

      {screen === "home" && (
        <main id="home">
          <section className="hero">
            <div className="hero-content">
              <div className="eyebrow">
                ✨{" "}
                {text(
                  "THE ULTIMATE MULTIPLAYER QUIZ",
                  "تجربة التحدي الجماعي الممتعة"
                )}
              </div>

              <h1>
                {text("HOW MUCH", "كم تعرف")}
                <br />
                {text("DO YOU", "من المعلومات؟")}
                <br />
                <span className="gradient-text">
                  {text("REALLY KNOW?", "اختبر نفسك!")}
                </span>
              </h1>

              <p className="hero-description">
                {text(
                  "Challenge your brain, compete with friends, and prove who knows more!",
                  "اختبر ذكاءك، نافس أصدقاءك، وأثبت من يعرف أكثر!"
                )}
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-button"
                  onClick={openMultiplayer}
                >
                  👥 {text("PLAY WITH FRIENDS", "العب مع أصدقائك")}
                </button>
              </div>

              <div className="stats">
                <div>
                  <strong>1,250+</strong>
                  <span>{text("Questions", "سؤال")}</span>
                </div>

                <div>
                  <strong>6</strong>
                  <span>{text("Categories", "تصنيفات")}</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>{text("Fun", "متعة")}</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="glow glow-one"></div>
              <div className="glow glow-two"></div>

              <div className="question-card">
                <span className="card-icon">🧠</span>
                <span className="card-label">
                  WHO KNOWS MORE?
                </span>
                <h2>?</h2>

                <div className="card-footer">
                  <span>⚡ THINK FAST</span>
                  <span>🏆 WIN BIG</span>
                </div>
              </div>

              <div className="floating-icon icon-one">🎯</div>
              <div className="floating-icon icon-two">🏆</div>
              <div className="floating-icon icon-three">💡</div>
            </div>
          </section>

          {/* HOW TO PLAY */}

          <section className="categories-section">
            <div className="section-heading">
              <div>
                <span className="section-label">
                  {text("HOW IT WORKS", "كيف تلعب")}
                </span>

                <h2>
                  {text("Play With Friends", "العب مع أصدقائك")}
                </h2>
              </div>
            </div>

            <div className="category-grid">
              <div className="category-card">
                <span className="category-icon">🏠</span>
                <strong>{text("Create Room", "أنشئ غرفة")}</strong>
                <span className="category-details">
                  {text(
                    "Create your private room",
                    "أنشئ غرفتك الخاصة"
                  )}
                </span>
              </div>

              <div className="category-card">
                <span className="category-icon">🔑</span>
                <strong>{text("Share Code", "شارك الكود")}</strong>
                <span className="category-details">
                  {text("Invite your friends", "ادعُ أصدقاءك")}
                </span>
              </div>

              <div className="category-card">
                <span className="category-icon">🏆</span>
                <strong>{text("Compete", "تنافس")}</strong>
                <span className="category-details">
                  {text(
                    "Find out who knows more",
                    "اكتشف من يعرف أكثر"
                  )}
                </span>
              </div>
            </div>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={openMultiplayer}
              >
                🚀 {text("START PLAYING", "ابدأ اللعب")}
              </button>
            </div>
          </section>

          {/* LEADERBOARD */}

          <section
            className="leaderboard-section"
            id="leaderboard"
          >
            <div className="section-heading">
              <div>
                <span className="section-label">
                  {text("THE BEST PLAYERS", "أفضل اللاعبين")}
                </span>

                <h2>
                  {text("Global Leaderboard", "لوحة المتصدرين")}
                </h2>
              </div>

              <span className="trophy-heading">🏆</span>
            </div>

            <div className="leaderboard">
              {leaderboardLoading && (
                <p className="multiplayer-description">
                  {text(
                    "Loading leaderboard...",
                    "جاري تحميل المتصدرين..."
                  )}
                </p>
              )}

              {leaderboardError && (
                <p className="room-error">{leaderboardError}</p>
              )}

              {!leaderboardLoading &&
                !leaderboardError &&
                leaderboardPlayers.length === 0 && (
                  <p className="multiplayer-description">
                    {text(
                      "No players yet.",
                      "لا يوجد لاعبون حتى الآن."
                    )}
                  </p>
                )}

              {!leaderboardLoading &&
                !leaderboardError &&
                leaderboardPlayers.map((player, index) => (
                  <div
                    className="player-row"
                    key={player.username}
                  >
                    <span className="player-rank">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="player-medal">
                      {["🥇", "🥈", "🥉"][index] || "🏅"}
                    </span>

                    <Avatar
                      src={player.avatar_url}
                      alt={player.username}
                    />

                    <button
                      className="profile-name-button"
                      onClick={() =>
                        openPlayerProfile(player.username)
                      }
                    >
                      {player.username}
                    </button>

                    <span className="player-score">
                      {Number(player.xp).toLocaleString()} XP
                    </span>
                  </div>
                ))}
            </div>

            <button
              className="secondary-button"
              onClick={loadLeaderboard}
              disabled={leaderboardLoading}
            >
              🔄 {text("REFRESH", "تحديث")}
            </button>
          </section>
        </main>
      )}

      {/* PLAYER PROFILE */}

      {screen === "profile" && (
        <main className="game-screen">
          <div className="game-top">
            <button
              className="back-button"
              onClick={backToLeaderboard}
            >
              ← {text("Back to leaderboard", "العودة للمتصدرين")}
            </button>
          </div>

          <div className="quiz-card profile-card">
            {profileLoading && (
              <p className="multiplayer-description">
                {text("Loading profile...", "جاري تحميل الملف الشخصي...")}
              </p>
            )}

            {profileError && (
              <p className="room-error">{profileError}</p>
            )}

            {selectedProfile && (
              <>
                <div className="profile-avatar">
                  <Avatar
                    src={selectedProfile.player.avatar_url}
                    alt={selectedProfile.player.username}
                    className="profile-avatar-image"
                  />
                </div>

                <span className="section-label">
                  {text("PLAYER PROFILE", "الملف الشخصي")}
                </span>

                <h1 className="question-title">
                  {selectedProfile.player.username}
                </h1>

                <div className="profile-stats">
                  <div className="profile-stat">
                    <span>⚡</span>
                    <strong>
                      {Number(
                        selectedProfile.player.xp
                      ).toLocaleString()}
                    </strong>
                    <small>XP</small>
                  </div>

                  <div className="profile-stat">
                    <span>🎮</span>
                    <strong>
                      {selectedProfile.player.games_played}
                    </strong>
                    <small>{text("Games Played", "المباريات")}</small>
                  </div>

                  <div className="profile-stat">
                    <span>🏆</span>
                    <strong>{selectedProfile.player.wins}</strong>
                    <small>{text("Wins", "الانتصارات")}</small>
                  </div>

                  <div className="profile-stat">
                    <span>📊</span>
                    <strong>
                      {selectedProfile.player.win_rate}%
                    </strong>
                    <small>{text("Win Rate", "نسبة الفوز")}</small>
                  </div>
                </div>

                <h2 className="profile-history-title">
                  {text("Recent Matches", "آخر المباريات")}
                </h2>

                {!selectedProfile.recentMatches ||
                selectedProfile.recentMatches.length === 0 ? (
                  <p className="multiplayer-description">
                    {text("No matches yet.", "لا توجد مباريات حتى الآن.")}
                  </p>
                ) : (
                  <div className="leaderboard">
                    {selectedProfile.recentMatches.map(
                      (match, index) => (
                        <div
                          className="player-row"
                          key={`${match.played_at || "match"}-${index}`}
                        >
                          <strong>
                            {match.opponent_name || "Unknown"}
                          </strong>

                          <span className="player-score">
                            {match.score} XP
                          </span>

                          <span
                            className={`match-result ${match.result}`}
                          >
                            {match.result === "win"
                              ? text("WIN 🏆", "فوز 🏆")
                              : match.result === "draw"
                                ? text("DRAW", "تعادل")
                                : text("LOSS", "خسارة")}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      )}

      {/* MULTIPLAYER MENU AND LOBBY */}

      {screen === "multiplayer" && (
        <main className="game-screen">
          <div className="game-top">
            <button
              className="back-button"
              onClick={leaveRoom}
            >
              ← {text("Back to home", "العودة للرئيسية")}
            </button>

            <span className="game-score">
              {socketConnected
                ? text("🟢 Server connected", "🟢 متصل بالسيرفر")
                : text("🟠 Connecting...", "🟠 جاري الاتصال...")}
            </span>
          </div>

          <div className="quiz-card multiplayer-card">
            {multiplayerView === "menu" ? (
              <>
                <span className="section-label">
                  {text("MULTIPLAYER", "اللعب الجماعي")}
                </span>

                <h2 className="question-title">
                  {text("Play with friends", "العب مع أصدقائك")}
                </h2>

                <p className="multiplayer-description">
                  {text(
                    "Create a private room or join your friend's room using a code.",
                    "أنشئ غرفة خاصة أو ادخل غرفة صديقك باستخدام الكود."
                  )}
                </p>

                <label className="multiplayer-label">
                  {text("Your name", "اسمك")}
                </label>

                <input
                  className="multiplayer-input"
                  value={playerName}
                  readOnly
                />

                {/* AVATAR PICKER */}

                <div className="avatar-picker">
                  <h3 className="avatar-picker-title">
                    {text("Choose your avatar", "اختر صورتك")}
                  </h3>

                  <p className="multiplayer-description">
                    {text(
                      "Your avatar will appear in the game and your profile.",
                      "صورتك بتظهر في اللعبة وملفك الشخصي."
                    )}
                  </p>

                  <div className="avatar-options">
                    {AVATARS.map((avatar) => (
                      <button
                        type="button"
                        key={avatar.id}
                        className={`avatar-option ${
                          selectedAvatar === avatar.url
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => chooseAvatar(avatar.url)}
                        aria-label={
                          isArabic ? avatar.nameAr : avatar.name
                        }
                        aria-pressed={
                          selectedAvatar === avatar.url
                        }
                      >
                        <Avatar
                          src={avatar.url}
                          alt={
                            isArabic ? avatar.nameAr : avatar.name
                          }
                        />

                        <span>
                          {isArabic ? avatar.nameAr : avatar.name}
                        </span>

                        {selectedAvatar === avatar.url && (
                          <span className="avatar-check">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

{/* CATEGORY PICKER */}

<div className="avatar-picker">
  <h3 className="avatar-picker-title">
    {text("Choose game categories", "اختر فئات اللعبة")}
  </h3>

  <p className="multiplayer-description">
    {text(
      "Select the categories you want to play. You can choose as many as you like.",
      "اختر الفئات التي تريد اللعب بها. يمكنك اختيار أي عدد."
    )}
  </p>

  <div className="avatar-options">
    {[
      {
        name: "General Knowledge",
        nameAr: "المعلومات العامة",
        emoji: "🧠",
      },
      {
        name: "Sports",
        nameAr: "الرياضة",
        emoji: "⚽",
      },
      {
        name: "Movies & TV",
        nameAr: "الأفلام والمسلسلات",
        emoji: "🎬",
      },
      {
        name: "Science",
        nameAr: "العلوم",
        emoji: "🔬",
      },
      {
        name: "Gaming",
        nameAr: "الألعاب",
        emoji: "🎮",
      },
      {
        name: "Geography",
        nameAr: "الجغرافيا",
        emoji: "🌍",
      },
    ].map((category) => (
      <label
        key={category.name}
        className="avatar-option"
        style={{ cursor: "pointer" }}
      >
        <input
          type="checkbox"
          checked={selectedCategories.includes(category.name)}
          onChange={() => {
            setSelectedCategories((previous) =>
              previous.includes(category.name)
                ? previous.filter(
                    (item) => item !== category.name
                  )
                : [...previous, category.name]
            );
          }}
        />

        <span>
          {category.emoji}{" "}
          {isArabic ? category.nameAr : category.name}
        </span>
      </label>
    ))}
  </div>
</div>

                <div className="multiplayer-actions">
                  <button
                    className="primary-button"
                    onClick={createRoom}
                  >
                    ➕ {text("CREATE ROOM", "إنشاء غرفة")}
                  </button>
                </div>



                <div className="room-divider">
                  <span>
                    {text("OR JOIN A ROOM", "أو انضم إلى غرفة")}
                  </span>
                </div>

                <label className="multiplayer-label">
                  {text("Room code", "كود الغرفة")}
                </label>

                <input
                  className="multiplayer-input room-code-input"
                  value={roomCode}
                  onChange={(e) =>
                    setRoomCode(e.target.value.toUpperCase())
                  }
                  maxLength={6}
                  placeholder={text("e.g. A1B2C3", "مثال: A1B2C3")}
                />

                <div className="multiplayer-actions">
                  <button
                    className="secondary-button"
                    onClick={joinRoom}
                  >
                    👥 {text("JOIN ROOM", "دخول الغرفة")}
                  </button>
                </div>

                {roomError && (
                  <p className="room-error">{roomError}</p>
                )}
              </>
            ) : (
              <>
                <span className="section-label">
                  {text("WAITING LOBBY", "غرفة الانتظار")}
                </span>

                <h2 className="question-title">
                  {text("Your room is ready!", "غرفتك جاهزة!")}
                </h2>

                <p className="multiplayer-description">
                  {text(
                    "Share this code with your friends:",
                    "شارك هذا الكود مع أصدقائك:"
                  )}
                </p>

                <div className="room-code-display">{roomCode}</div>

                <h3 className="lobby-players-title">
                  {text(
                    `Players (${roomPlayers.length}/8)`,
                    `اللاعبون (${roomPlayers.length}/8)`
                  )}
                </h3>

                <div className="lobby-player-list">
                  {roomPlayers.map((player, index) => (
                    <div
                      className="lobby-player-row"
                      key={player.id}
                    >
                      <span className="player-rank">
                        0{index + 1}
                      </span>

                      <Avatar
                        src={player.avatar_url}
                        alt={player.name}
                      />

                      <strong>{player.name}</strong>

                      {index === 0 && (
                        <span className="host-badge">
                          {text("HOST", "المضيف")}
                        </span>
                      )}

                      {player.id === socketId && (
                        <span className="you-badge">
                          {text("YOU", "أنت")}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <p className="multiplayer-description lobby-waiting">
                  {isHost
                    ? text(
                        "You are the host. Invite your friends and start when ready.",
                        "أنت المضيف. ادعُ أصدقاءك وابدأ عندما تكون جاهزًا."
                      )
                    : text(
                        "Waiting for the host to start the game.",
                        "بانتظار المضيف لبدء اللعبة."
                      )}
                </p>

                {isHost && (
                  <div className="multiplayer-actions">
                    <button
                      className="primary-button"
                      onClick={startMultiplayerGame}
                      disabled={roomPlayers.length < 2}
                    >
                      🚀 {text("START GAME", "ابدأ اللعبة")}
                    </button>
                  </div>
                )}

                {roomPlayers.length < 2 && isHost && (
                  <p className="multiplayer-description">
                    {text(
                      "You need at least 2 players to start.",
                      "تحتاج إلى لاعبين على الأقل لبدء اللعبة."
                    )}
                  </p>
                )}

                {mpError && (
                  <p className="room-error">{mpError}</p>
                )}

                <div className="multiplayer-actions">
                  <button
                    className="secondary-button"
                    onClick={leaveRoom}
                  >
                    {text("LEAVE ROOM", "مغادرة الغرفة")}
                  </button>
                </div>
              </>
            )}
          </div>
        </main>
      )}

      {/* MULTIPLAYER QUIZ */}

      {screen === "multiplayerQuiz" && mpQuestion && (
        <main className="game-screen">
          <div className="game-top">
            <span className="game-score">
              🏆 {text("Question", "السؤال")} {mpIndex + 1}/{mpTotal}
            </span>

            <span className={mpTime <= 5 ? "timer danger" : "timer"}>
              ⏱ {mpTime}s
            </span>
          </div>

          <div className="quiz-card">
            <span className="section-label">
              {text("MULTIPLAYER GAME", "اللعبة الجماعية")}
            </span>

            <div className="quiz-meta">
              <span>
                {text("QUESTION", "السؤال")} {mpIndex + 1} / {mpTotal}
              </span>

              <span>
                {text("PLAYERS", "اللاعبون")}: {mpPlayers.length}
              </span>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${((mpIndex + 1) / mpTotal) * 100}%`,
                }}
              />
            </div>

            <h2 className="question-title">
              {text(mpQuestion.en, mpQuestion.ar)}
            </h2>

            <div className="answers-grid">
              {(isArabic
                ? mpQuestion.optionsAr
                : mpQuestion.options
              ).map((option, index) => (
                <button
                  key={index}
                  className={`answer-button ${
                    mpSelected === index ? "selected" : ""
                  }`}
                  onClick={() => submitMultiplayerAnswer(index)}
                  disabled={
                    mpSelected !== null || mpTime === 0
                  }
                >
                  <span className="answer-letter">
                    {["A", "B", "C", "D"][index]}
                  </span>

                  {option}
                </button>
              ))}
            </div>

            {mpSelected !== null && (
              <p className="multiplayer-description">
                {text(
                  "Answer submitted! Waiting for other players...",
                  "تم إرسال إجابتك! بانتظار بقية اللاعبين..."
                )}
              </p>
            )}

            {mpTime === 0 && mpSelected === null && (
              <p className="multiplayer-description">
                {text(
                  "Time is up! Waiting for the next question...",
                  "انتهى الوقت! بانتظار السؤال التالي..."
                )}
              </p>
            )}

            <p className="multiplayer-description">
              {text(
                `Players answered: ${mpAnswered}/${mpPlayers.length}`,
                `اللاعبون الذين أجابوا: ${mpAnswered}/${mpPlayers.length}`
              )}
            </p>

            <div className="leaderboard">
              {mpPlayers.map((player) => (
                <div className="player-row" key={player.id}>
                  <Avatar
                    src={player.avatar_url}
                    alt={player.name}
                  />

                  <strong>{player.name}</strong>

                  <span className="player-score">
                    {player.score} XP
                  </span>
                </div>
              ))}
            </div>

            {mpError && (
              <p className="room-error">{mpError}</p>
            )}
          </div>
        </main>
      )}

      {/* MULTIPLAYER RESULTS */}

      {screen === "multiplayerResult" && (
        <main className="result-screen">
          <div className="result-card">
            <div className="result-trophy">🏆</div>

            <span className="section-label">
              {text("GAME COMPLETED", "اكتملت المباراة")}
            </span>

            <h1>{text("Final Results", "النتائج النهائية")}</h1>

            {mpFinished.length > 0 && (
              <div className="leaderboard">
                {mpFinished.map((player, index) => (
                  <div className="player-row" key={player.id}>
                    <span className="player-rank">
                      {index + 1}
                    </span>

                    <Avatar
                      src={player.avatar_url}
                      alt={player.name}
                    />

                    <strong>{player.name}</strong>

                    <span className="player-score">
                      {player.score} XP
                    </span>

                    {index === 0 && <span>🏆</span>}
                  </div>
                ))}
              </div>
            )}

            {mpFinished.length > 0 && (
              <h2>
                {text(
                  `Winner: ${mpFinished[0].name}`,
                  `الفائز: ${mpFinished[0].name}`
                )}
              </h2>
            )}

            <button
              className="primary-button"
              onClick={leaveRoom}
            >
              {text("BACK HOME", "العودة للرئيسية")}
            </button>
          </div>
        </main>
      )}

      {/* FOOTER */}

     <footer className="site-footer">
  <p>
    © 2026 WHO KNOWS MORE? —{" "}
    {text("Think. Play. Win.", "فكر. العب. اربح.")}
  </p>

  <span className="developer-credit">
    Developed by <strong>Yasser Aloraima</strong>
  </span>
</footer>
    </div>
  );
}

export default App;
