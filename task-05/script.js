document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.getElementById("timer");
  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");

  let intervalId = null;
  let counter = 0;

  function updateTimer() {
    counter++;
    timerElement.textContent = counter;
  }

  startBtn.addEventListener("click", function () {
    if (!intervalId) {
      intervalId = setInterval(updateTimer, 1000);

      startBtn.disabled = true;
      stopBtn.disabled = false;
    }
  });

  stopBtn.addEventListener("click", function () {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;

      stopBtn.disabled = true;
      startBtn.disabled = false;
    }
  });

  window.addEventListener("beforeunload", function () {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
});
