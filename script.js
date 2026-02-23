let clicks = 0;

const btn = document.getElementById("btn");
const resetBtn = document.getElementById("resetBtn");
const msg = document.getElementById("msg");
const count = document.getElementById("count");
const timeEl = document.getElementById("time");

const yearEl = document.getElementById("year");
const dateLine = document.getElementById("dateLine");

const themeBtn = document.getElementById("themeBtn");

const messages = [
  "Hello from JavaScript! The button works ✅",
  "Nice! This is a simple interactive feature 🚀",
  "Every push triggers the workflow (CI) — then it deploys (CD) 🔁",
  "GitHub Actions is running in the cloud for you ☁️",
  "Small changes + automation = faster delivery ✅"
];

function nowTime() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function randomMessage() {
  const i = Math.floor(Math.random() * messages.length);
  return messages[i];
}

// Initial UI values
yearEl.textContent = new Date().getFullYear();
dateLine.textContent = "Today: " + new Date().toDateString();

// Click button action
btn.addEventListener("click", () => {
  clicks++;
  msg.textContent = randomMessage();
  count.textContent = clicks;
  timeEl.textContent = nowTime();
});

// Reset button action
resetBtn.addEventListener("click", () => {
  clicks = 0;
  msg.textContent = "—";
  count.textContent = "0";
  timeEl.textContent = "—";
});

// Theme toggle (Light/Dark)
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
});