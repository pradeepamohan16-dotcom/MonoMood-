// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const savedEmail = localStorage.getItem("userEmail");
        const savedPassword = localStorage.getItem("userPassword");

        if (!savedEmail || !savedPassword) {
            alert("No account found. Please create an account first.");
            return;
        }

        if (email === savedEmail && password === savedPassword) {
            localStorage.setItem("isLoggedIn", "true");

            alert("Login successful! Welcome to MonoMood 💜");

            window.location.href = "home.html";
        } else {
            alert("Incorrect email or password.");
        }
    });
}


// SIGN UP
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Account created successfully! 🎉");

        window.location.href = "index.html";
    });
}
// SHOW USER NAME ON HOME PAGE

const userNameElement = document.getElementById("userName");

if (userNameElement) {
    const savedName = localStorage.getItem("userName");

    if (savedName) {
        userNameElement.textContent = savedName;
    }
}


// GO TO MOOD PAGE

function goToMood() {
    window.location.href = "mood.html";
}


// TEMPORARY JOURNAL BUTTON

function openJournal() {
    alert("Journal feature coming next! 📔");
}


// TEMPORARY HISTORY BUTTON

function openHistory() {
    alert("Mood History feature coming next! 📊");
}
// MOOD RESULT

const resultMood = document.getElementById("resultMood");

if (resultMood) {

    const mood = localStorage.getItem("selectedMood");
    const emoji = localStorage.getItem("selectedEmoji");

    const moodData = {

        Happy: {
            quote: "Happiness grows when you appreciate the little things.",
            affirmation: "I allow myself to enjoy this beautiful moment.",
            advice: "Share your happiness with someone you care about.",
            activity: "Write down three things that made you smile today.",
            music: "Happy Moments"
        },

        Sad: {
            quote: "It is okay to have difficult days. You don't have to be strong all the time.",
            affirmation: "I give myself permission to feel and heal.",
            advice: "Take things slowly and be kind to yourself today.",
            activity: "Listen to a comforting song or talk to someone you trust.",
            music: "Comforting Moments"
        },

        Calm: {
            quote: "Peace begins when you choose to slow down and breathe.",
            affirmation: "I am calm, present and at peace.",
            advice: "Enjoy this peaceful moment without rushing.",
            activity: "Take five slow breaths and focus on the present.",
            music: "Peaceful Moments"
        },

        Anxious: {
            quote: "You don't have to figure everything out right now. Take one step at a time.",
            affirmation: "I am safe, and I can handle this moment.",
            advice: "Focus only on what you can control right now.",
            activity: "Try a simple 4-4 breathing exercise for one minute.",
            music: "Relaxing Moments"
        },

        Angry: {
            quote: "You can feel angry without letting anger control your actions.",
            affirmation: "I choose patience and calmness.",
            advice: "Give yourself some space before reacting.",
            activity: "Take a short walk and breathe slowly.",
            music: "Calm Down"
        },

        Tired: {
            quote: "Rest is not laziness. Your mind and body deserve a break.",
            affirmation: "I allow myself to rest without guilt.",
            advice: "Take a break and recharge your energy.",
            activity: "Put your phone away and take a few quiet minutes.",
            music: "Soft Relaxation"
        },

        Loved: {
            quote: "Love becomes more beautiful when it is shared.",
            affirmation: "I am worthy of love, care and kindness.",
            advice: "Tell someone special that you appreciate them.",
            activity: "Send a kind message to someone you love.",
            music: "Love & Peace"
        },

        Excited: {
            quote: "Let your excitement remind you how much you enjoy being alive.",
            affirmation: "I welcome positive energy and new possibilities.",
            advice: "Use your energy to do something meaningful today.",
            activity: "Write down one thing you are excited about.",
            music: "Positive Energy"
        }

    };

    const data = moodData[mood] || moodData.Happy;

    document.getElementById("resultMood").textContent = mood;
    document.getElementById("resultEmoji").textContent = emoji;

    document.getElementById("moodQuote").textContent = data.quote;
    document.getElementById("moodAffirmation").textContent = data.affirmation;
    document.getElementById("moodAdvice").textContent = data.advice;
    document.getElementById("moodActivity").textContent = data.activity;
    document.getElementById("musicName").textContent = data.music;
}


// RESULT BUTTONS

function goToJournal() {
    window.location.href = "journal.html";
}

function goToHome() {
    window.location.href = "home.html";
}
// MOOD SELECTION

function selectMood(mood, emoji) {
    localStorage.setItem("selectedMood", mood);
    localStorage.setItem("selectedEmoji", emoji);

    window.location.href = "result.html";
}
// MOOD MUSIC

const moodMusic = document.getElementById("moodMusic");

if (moodMusic) {

    const musicFiles = {
        Happy: "music/happy.mp3",
        Sad: "music/sad.mp3",
        Calm: "music/calm.mp3",
        Anxious: "music/anxious.mp3",
        Angry: "music/angry.mp3",
        Tired: "music/tired.mp3",
        Loved: "music/loved.mp3",
        Excited: "music/excited.mp3"
    };

    const selectedMood = localStorage.getItem("selectedMood");

    const musicFile = musicFiles[selectedMood];

    if (musicFile) {
        moodMusic.src = musicFile;
        moodMusic.load();
    }
}
// JOURNAL

const journalMood = document.getElementById("journalMood");
const journalEmoji = document.getElementById("journalEmoji");
const journalText = document.getElementById("journalText");

if (journalMood && journalEmoji) {

    const mood = localStorage.getItem("selectedMood") || "Happy";
    const emoji = localStorage.getItem("selectedEmoji") || "😊";

    journalMood.textContent = mood;
    journalEmoji.textContent = emoji;
}


// SAVE JOURNAL

function saveJournal() {

    const text = document.getElementById("journalText").value.trim();
    const message = document.getElementById("saveMessage");

    if (!text) {
        message.textContent = "Please write something first ✍️";
        return;
    }

    const journalEntry = {
        mood: localStorage.getItem("selectedMood") || "Happy",
        emoji: localStorage.getItem("selectedEmoji") || "😊",
        text: text,
        date: new Date().toLocaleString()
    };

    localStorage.setItem(
        "journalEntry",
        JSON.stringify(journalEntry)
    );

    message.textContent = "Your journal has been saved successfully! 💜";
}
// GO TO JOURNAL HISTORY

function goToJournalHistory() {
    window.location.href = "journal-history.html";
}
// SHOW JOURNAL HISTORY

const journalHistory = document.getElementById("journalHistory");

if (journalHistory) {

    const savedEntry = localStorage.getItem("journalEntry");

    if (savedEntry) {

        const entry = JSON.parse(savedEntry);

        journalHistory.innerHTML = `
            <div class="journal-card">

                <div class="today-mood">
                    <span>${entry.emoji}</span>
                    <strong>${entry.mood}</strong>
                </div>

                <p class="journal-date">
                    ${entry.date}
                </p>

                <p class="journal-content">
                    ${entry.text}
                </p>

            </div>
        `;

    } else {

        journalHistory.innerHTML = `
            <div class="journal-card">
                <p>No journal entries yet. ✍️</p>
            </div>
        `;
    }
}