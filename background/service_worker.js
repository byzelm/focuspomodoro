chrome.runtime.onInstalled.addListener(() => {
  console.log("Focus Pomodoro instalado!");
});

// Exemplo: criar alarmes periódicos se quiser notificações
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "pomodoro-alarm") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon128.png",
      title: "Focus Pomodoro",
      message: "Hora de fazer uma pausa!"
    });
  }
});
