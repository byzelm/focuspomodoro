let demoTime = 25 * 60;
let remaining = demoTime;
let interval;

const demoTimer = document.getElementById("demo-timer");

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function updateDisplay() {
  demoTimer.textContent = formatTime(remaining);
}

function startDemo() {
  if (interval) return;
  interval = setInterval(() => {
    if (remaining > 0) {
      remaining--;
      updateDisplay();
    } else {
      clearInterval(interval);
      interval = null;
      alert("Pomodoro concluído!");
      resetDemo();
    }
  }, 1000);
}

function pauseDemo() {
  clearInterval(interval);
  interval = null;
}

function resetDemo() {
  clearInterval(interval);
  interval = null;
  remaining = demoTime;
  updateDisplay();
}

updateDisplay();
