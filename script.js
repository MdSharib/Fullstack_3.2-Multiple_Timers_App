
const setBtn = document.getElementById("set-btn");

let timer = [];

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
    hour.innerText = userHour;
    console.log(timer);
}



setBtn.addEventListener("click", setBtnHandler);





