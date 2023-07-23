const startTimerBtn = document.getElementById("set-btn");
const activeTimersDisplay = document.getElementById("timer-output");
const timerEndDisplay = document.getElementById("timer-stop-block");

const paragraph = document.getElementById("para");

let timers = [];

startTimerBtn.addEventListener("click", () => {
  paragraph.style.display = "none";
  const hours = parseInt(document.getElementById("hour-input").value);
  const minutes = parseInt(document.getElementById("minutes-input").value);
  const seconds = parseInt(document.getElementById("seconds-input").value);

  if (!isNaN(hours) || !isNaN(minutes) || !isNaN(seconds)) {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (totalSeconds > 0) {
      createTimer(totalSeconds);
    }
  }
});

/* formatting time*/
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(remainingSeconds).padStart(2, "0")}`;
}

//updating Time
function updateTimersDisplay() {
  activeTimersDisplay.innerHTML = "";

  timers.forEach((timer, index) => {
    const timerDiv = document.createElement("div");
    timerDiv.className = "timer-block";
    timerDiv.innerHTML = `
    <div>
          <p style="color: white; font-size: 22px; background-color: #34344A">Time Left :</p>
        </div>
      <div class=run-time>  
    <span class="timer-center" style="font-size: 58px;">${formatTime(timer.remainingTime)}</span>
      </div>
      <button class="stop-timer-btn" data-index="${index}">Stop</button>
      
      
    `;

    activeTimersDisplay.appendChild(timerDiv);
  });
}

//Play Alert Audio
function playAlertSound() {
  let audio = new Audio("./audio.wav");
  audio.currentTime = 0; 
  audio.play();
  console.log("audio run")
  // const alertSound = document.getElementById("alertSound");
  // alertSound.currentTime = 0; 
  // alertSound.play();
}

function stopTimer(index) {
  clearInterval(timers[index].intervalId);
  timers[index].intervalId = null; 
  updateTimersDisplay();
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("stop-timer-btn")) {
    const index = parseInt(event.target.dataset.index);
    stopTimer(index);
  }
});

function createTimer(totalSeconds) {
  const timer = {
    remainingTime: totalSeconds,
    intervalId: null,
  };

  timer.intervalId = setInterval(() => {
    timer.remainingTime--;

    if (timer.remainingTime <= 0) {
      clearInterval(timer.intervalId);
      timerEndDisplay.style.display = "flex";
      activeTimersDisplay.style.display = "none";
      playAlertSound();
      // setTimeout(() => {
      //   activeTimersDisplay.style.display = "none";
      // }, 2000);
      setTimeout(() => {
        timerEndDisplay.style.display = "none";
      }, 3000);
    }

    updateTimersDisplay();
  }, 1000);
  // playAlertSound();
  timers.push(timer);
  updateTimersDisplay();
}