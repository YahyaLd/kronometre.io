var timer;
var startTime;
var elapsedTime = 0;
var running = false;

var timerDisplay = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");
var resumeBtn = document.getElementById("resumeBtn");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
resumeBtn.addEventListener("click", resumeTimer);

function startTimer() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTimer, 10);
    running = true;
  }
}

function stopTimer() {
  if (running) {
    clearInterval(timer);
    running = false;
  }
}

function resetTimer() {
  clearInterval(timer);
  elapsedTime = 0;
  updateTimerDisplay();
  running = false;
}

function resumeTimer() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTimer, 10);
    running = true;
  }
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  var milliseconds = Math.floor(elapsedTime % 1000);
  var seconds = Math.floor((elapsedTime / 1000) % 60);
  var minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
  var hours = Math.floor((elapsedTime / 1000 / 60 / 60) % 24);

  var millisecondsStr = padNumber(milliseconds, 3);
  var secondsStr = padNumber(seconds, 2);
  var minutesStr = padNumber(minutes, 2);
  var hoursStr = padNumber(hours, 2);

  timerDisplay.textContent = hoursStr + ":" + minutesStr + ":" + secondsStr + "." + millisecondsStr;
}

function padNumber(number, length) {
  var str = number.toString();
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
}
