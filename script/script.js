
let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let htmlClock = document.getElementById('clock');
let background = document.getElementById('time');
let baseHexClock = '#' + hours + minutes + seconds;

background.style.backgroundColor = baseHexClock;
htmlClock.innerHTML = '#' + hours + ':' + minutes + ':' + seconds;

let padToTwo = number => number <= 99 ? `0${number}`.slice(-2) : number;


let timerId = setInterval(function () {
    if (seconds <= 60) {
        seconds += 1;
        console.log(seconds);
    }
    else if (minutes <= 60){
        seconds = 00;
        minutes += 1;
    }
    else if (hours <= 24) {
        seconds = 00;
        minutes = 00;
        hours += 1;
    }
    else {
        seconds = 00;
        minutes = 00;
        hours = 00;
    }

    let clockHours = padToTwo(hours);
    let clockMinutes = padToTwo(minutes);
    let clockSeconds = padToTwo(seconds);
    hexClock = '#' + clockHours + clockMinutes + clockSeconds;


    htmlClock.innerHTML = '#' + clockHours + ':' + clockMinutes + ':' + padToTwo(seconds);
    background.style.background = hexClock;

}, 1000);



