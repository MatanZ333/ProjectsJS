//Local clock
let run;
function go() {
    let hour = document.forme.clock;
    let theTime = new Date();
    let hr = theTime.getHours();
    let mt = theTime.getMinutes();
    let sc = theTime.getSeconds();

    if (sc < 10) {
        sc = "0" + sc;
    }

    if (mt < 10) {
        mt = "0" + mt;
    }

    if (hr > 12) {
        hr = hr - 12;
        hour.value = hr + ":" + mt + ":" + sc + "PM";
    }
    else {
        hour.value = hr + ":" + mt + ":" + sc + "AM";
    }

}

function start() {
    run = setInterval(go, 1000);
}
function stop() {
    clearInterval(run);
}
// International clock
const NewYork = new Date();
const tokyo = new Date();
const shanghai = new Date();
const sidney = new Date();

NewYork.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
tokyo.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' });
shanghai.toLocaleTimeString('en-US', { timeZone: 'Asia/Shanghai' });
sidney.toLocaleTimeString('en-US', { timeZone: 'Australia/Sydney' });

const newYorkClock = document.getElementById('clockNew');
const tokyoClock = document.getElementById('clockTokyo');
const shanghaiClock = document.getElementById('clockShanghai');
const sidneyClock = document.getElementById('clockSydney');
newYorkClock.textContent = NewYork.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
tokyoClock.textContent = tokyo.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' });
shanghaiClock.textContent = shanghai.toLocaleTimeString('en-US', { timeZone: 'Asia/Shanghai' });
sidneyClock.textContent = sidney.toLocaleTimeString('en-US', { timeZone: 'Australia/Sydney' });

setInterval(() => {
    const NewYork = new Date();
    const tokyo = new Date();
    const shanghai = new Date();
    const sidney = new Date();

    newYorkClock.textContent = NewYork.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
    tokyoClock.textContent = tokyo.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' });
    shanghaiClock.textContent = shanghai.toLocaleTimeString('en-US', { timeZone: 'Asia/Shanghai' });
    sidneyClock.textContent = sidney.toLocaleTimeString('en-US', { timeZone: 'Australia/Sydney' });
}, 1000);


// timer
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime;
let resetTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let sec = 0;

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now(); // Initialize startTime when the timer starts
        intervalId = setInterval(updateTime, 75);
    }
});

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75)
    }
});
pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    resetTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    paused = true;
    intervalId;
    hrs = 0;
    mins = 0;
    sec = 0;
    timeDisplay.textContent = "00:00:00";
});

// how much time has passed
function updateTime() {
    elapsedTime = Date.now() - startTime;

    sec = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    sec = pad(sec);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}: ${mins}: ${sec}`;

    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}

