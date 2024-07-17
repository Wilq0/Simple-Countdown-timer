let timer;
let timerCount = document.getElementById("timerCount");
let timerSet = document.getElementById("setTimer");
let startTimer = document.getElementById("startOrStopTimer");

function setTimer() {
    timer = prompt("How long should your timer be (in seconds)?");
    timerCount.innerText = timer;
}

function startTimerorStopTimer() {
    let interval = setInterval(function(){
        if (timer === 0) {
            clearInterval(interval);
        } else {
            timer--;
            timerCount.innerText = timer;
        }
    }, 1000)
}

timerSet.onclick = setTimer;
startTimer.onclick = startTimerorStopTimer;
