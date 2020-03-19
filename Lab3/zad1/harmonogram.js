let sum = 0;

function cycle() {
    a = 100;
    b = 700;
    c = 1000;
    sum = 0;
    for (let i = 0; i < b; i++) {
        for (let j = 0; j < a; j++) {
            for (let k = 0; k < c; k++) {
                sum += 1;
            }
        }
    }
    return sum;
}

var IntervalID;
var TimeoutID;
var RequestID;

var start_flag = false;

let startT;
let startI;

function funInterval() {
    let endI = performance.now();
    document.getElementById("stopwatch_interval").innerHTML = endI-startI;
    startI = performance.now();
    let c = new Worker("cycle.js");
}


function funTimeout() {
    let d = cycle();
    let endT = performance.now();
    document.getElementById("stopwatch_timeout").innerHTML = endT-startT;
}

let time;

function funRequest(timestamp) {
    if (time == 0) time = timestamp;
    else {
        document.getElementById("stopwatch_request").innerText = sum + "     " + 1000/(timestamp - time);
        time = 0;
    }
    RequestID = window.requestAnimationFrame(funRequest);
}

function start() {
    if(!start_flag) {
        startI = performance.now();
        IntervalID = setInterval(funInterval, 1000);
        startT = performance.now();
        TimeoutID = setTimeout(funTimeout, 1000);
        startR = performance.now();
        window.requestAnimationFrame(funRequest);
        start_flag = true;
    }
    else stop();
}

function stop() {
    if(start_flag) {
        clearInterval(IntervalID);
        clearTimeout(TimeoutID);
        cancelAnimationFrame(RequestID);
        start_flag = false;
    }
}
