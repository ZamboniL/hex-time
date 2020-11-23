

let time = new Date();
// pad the given number to have at least two digis (1 to 01)
let padToTwo = number => number <= 99 ? `0${number}`.slice(-2) : number;

let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();


let clock = document.getElementById('clock');
let container = document.getElementById('container');

updateClock(hours, minutes, seconds);

// Update the passage of time then 
// calls the updateClock function
let timer = setInterval(function () {
    if (seconds < 59) {
        seconds += 1;
    }
    else if (minutes < 59){
        seconds = 0;
        minutes += 1;
    }
    else if (hours < 23) {
        seconds = 0;
        minutes = 0;
        hours += 1;
    }
    else {
        seconds = 0;
        minutes = 0;
        hours = 0;
    }

    updateClock(hours, minutes, seconds)

}, 1000);

// Update background color and live clock
// with the current time
function updateClock(hours, minutes, seconds) {

    hours = padToTwo(hours);
    minutes = padToTwo(minutes);
    seconds = padToTwo(seconds);

    clock.innerHTML = '#' + hours + ':' + minutes + ':' + seconds;
    container.style.background = '#' + hours + minutes + seconds;
}