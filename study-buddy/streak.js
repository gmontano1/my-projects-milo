// streak.js — tracks how many days in a row you've studied.

const STREAK_KEY = "studyBuddyStreak";

// Reads the saved streak from localStorage.
function loadStreak() {
  const raw = localStorage.getItem(STREAK_KEY);
  if (!raw) return { count: 0, lastDay: null }; // nothing saved yet
  return JSON.parse(raw);
}

// Turns "right now" into a simple day stamp like "2026-07-01".
function todayStamp() {
  return new Date().toISOString().slice(0, 10);
}

// Call this once each time the user finishes a quiz.
// Returns the current streak count.
function recordStudySession() {
  const streak = loadStreak();
  const today = todayStamp();

  if (streak.lastDay === today) return streak.count;

  const oneDayMs = 24 * 60 * 60 * 1000;
  const yesterday = new Date(Date.now() - oneDayMs)
    .toISOString()
    .slice(0, 10);

  if (streak.lastDay === yesterday) {
    streak.count = streak.count + 1; // kept the chain going
  } else {
    streak.count = 1; // first day ever, or the chain broke
  }

  streak.lastDay = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
  return streak.count;
}
