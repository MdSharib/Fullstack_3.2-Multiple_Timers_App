
const setBtn = document.getElementById("set-btn");
const timerOutput = document.getElementById("timer-output");
const deleteBtn = document.getElementsByClassName("delete-btn")[0];

let timer = [];
let interval = null;

const setBtnHandler = () => {
    const userHour = document.getElementById("hour-input").value;
const userMinutes = document.getElementById("minutes-input").value;
const userSeconds = document.getElementById("seconds-input").value;
let hour = document.getElementsByClassName("hour");
// validation
    if(userHour < 0 || userHour > 24) {
        alert("please enter valid 24 hour format")
        return;
    }
    if(userMinutes < 0 || userMinutes > 60) {
        alert("please enter valid minute from 0 to 60")
        return;
    }
    if(userSeconds < 0 || userSeconds > 60) {
        alert("please enter valid second from 0 to 60")
        return;
    }

    let userTimer = {
        hour: userHour,
        minutes: userMinutes,
        seconds: userSeconds,
    }
    timer.push(userTimer);
    userHour.value = "";
    userMinutes.value = "";
    userSeconds.value = "";
    setTimer(userSeconds, userMinutes, userHour );

}

const countTimer = (seconds, mins, hrs) => {
    // seconds--;
    // let hrs = Math.floor(seconds/ 3600);
    // let mins = Math.floor((seconds -(hrs * 3600)) / 60);
    // let sec = seconds % 60;
    
    // if(sec < 10) sec = '0' + sec;
    // if(mins < 10) mins = '0' + mins;
    // if(hrs < 10) hrs = '0' + hrs;
    if(seconds < 10) seconds = '0' + seconds;
    if(mins < 10) mins = '0' + mins;
    if(hrs < 10) hrs = '0' + hrs;

    
    console.log(deleteBtn);


    timerOutput.innerHTML = `<div class="timer-block">
    <div class="timer-left">Time Left:</div>
    <div class="timer-center" >
      <div class="hour">${hrs}</div>
      <div class="minutes">${mins}</div>
      <div class="seconds">${seconds}</div>
    </div>
    <div class="timer-right">
      <button class="delete-btn">Delete</button>
    </div>
  </div>
    `
    console.log(`${hrs} ${mins} ${seconds}`);
}


const setTimer = (seconds, minutes, hours) => {

    if(interval){
        return;
    }

    interval = setInterval(() => {
        // seconds--;
        if(minutes == 0 && seconds == 0 && hours == 0){
            clearInterval(interval);
            interval = null;
            return;
        }else{
            if(seconds !== 0){
                seconds--;
            }else{
                if(minutes !== 0){
                    minutes--;
                    seconds = 60;
                }else if(hours !== 0){   
                        hours--;
                        minutes = 60;
                }else if(hours === 0 && seconds === 0){
                    clearInterval(interval);
                }
            }
        }
       

        countTimer(seconds, minutes, hours);
    }, 1000);
}


const deleteBtnHandler = () => {
    console.log("delete clicked")
    clearInterval(interval);
    interval = null;
}



setBtn.addEventListener("click", setBtnHandler);
deleteBtn.addEventListener('click', deleteBtnHandler);





