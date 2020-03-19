let sec;
let msec;

let points = 0;

let speed_ball;
let size_ball;

let rect_count;
let size_rect;
let rect_time;
let rect_max;
let reduce_time;
let x_posits;
let y_posits;
let rect_value;

let x_posit;
let y_posit;
let x_dir;
let y_dir;

let stop_clock;
let print_rect;
let print_ball;
let decrease_rect;

let level = 0;

let canvas;
let ctx;

let nick_name = prompt("Podaj swoją nazwę");
let top_nicks = ["Igor", "Messi", "Kaczpi"];
let top_scores = [61, 60, 55];


function canvasSize() {
    let max_width = document.getElementById("field").clientWidth;    
    document.getElementById("field").innerHTML = '<canvas id="canvas-field" width="' + String(max_width*32/33) + '" height="' + String(max_width/1.5) +  '" style="background-color: #e6ffff"></canvas>';
    canvas = document.getElementById('canvas-field');
    ctx = canvas.getContext('2d');
}

setInterval(canvasSize(), 10);

function swap(x, y) {
    tmp = x;
    x = y;
    y = tmp;
}

function stop_game() {
    clearInterval(print_rect);
    clearInterval(stop_clock);
    clearInterval(decrease_rect);
    cancelAnimationFrame(print_ball);
}

function start_game() {
    print_rect = setInterval(genRect, rect_time);
    stop_clock = setInterval(timer, 10);
    decrease_rect = setInterval(decreaseRect, reduce_time);
    print_ball = requestAnimationFrame(printBall);
}

function hallOfGlory() {
    document.getElementById("one").innerHTML = "1.   " + top_nicks[0];
    document.getElementById("two").innerHTML = "2.   " + top_nicks[1];
    document.getElementById("three").innerHTML = "3.   " + top_nicks[2];
    document.getElementById("one-r").innerHTML = top_scores[0];
    document.getElementById("two-r").innerHTML = top_scores[1];
    document.getElementById("three-r").innerHTML = top_scores[2];
    if (points > top_scores[2]) {
        top_nicks[2] = nick_name;
        top_scores[2] = points;
    }
    if (top_scores[2] > top_scores[1]) {
        tmp = top_scores[2];
        top_scores[2] = top_scores[1];
        top_scores[1] = tmp;
        tmp = top_nicks[2];
        top_nicks[2] = top_nicks[1];
        top_nicks[1] = tmp;
    }
    if (top_scores[1] > top_scores[0]) {
        tmp = top_scores[1];
        top_scores[1] = top_scores[0];
        top_scores[0] = tmp;
        tmp = top_nicks[1];
        top_nicks[1] = top_nicks[0];
        top_nicks[0] = tmp;
    }
}

function start_level_1() {
    stop_game();
    sec = 59;
    msec = 99;

    speed_ball = 4;
    size_ball = 16;
    rect_count = 0;
    size_rect = 8;
    rect_time = 1;
    rect_max = 10;
    reduce_time = 1000;
    x_posits = new Array(Math.floor(rect_max));
    y_posits = new Array(Math.floor(rect_max));
    rect_value = new Array(Math.floor(rect_max));

    x_posit = -1;
    y_posit;
    start_game();
}

function start_level_2() {
    stop_game();
    sec = 59;
    msec = 99;

    speed_ball = 6;
    size_ball = 24;
    rect_count = 0;
    size_rect = 12;
    rect_time = 1;
    rect_max = 50;
    reduce_time = 2000;
    x_posits = new Array(Math.floor(rect_max));
    y_posits = new Array(Math.floor(rect_max));
    rect_value = new Array(Math.floor(rect_max));

    x_posit = -1;
    y_posit;
    start_game();
}

function start_level_3() {
    stop_game();
    sec = 59;
    msec = 99;
    start = 0;

    speed_ball = 8;
    size_ball = 32;
    rect_count = 0;
    size_rect = 16;
    rect_time = 1;
    rect_max = 100;
    reduce_time = 3000;
    x_posits = new Array(Math.floor(rect_max));
    y_posits = new Array(Math.floor(rect_max));
    rect_value = new Array(Math.floor(rect_max));

    x_posit = -1;
    y_posit;
    start_game();
}

function timer() {
    if (msec == 0 && sec == 0) {
        stop_game();
        if (level = 3)  hallOfGlory(); 
        game_end = 1;
        return;
    }
    msec--;
    if (msec == -1) {
        msec = 99;
        sec--;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (msec < 10) {
        msec = "0" + msec;
    }
    time = sec + ":" + msec;
    sec = parseInt(sec);
    msec = parseInt(msec);
    document.getElementById("time-table").innerHTML = time;
    document.getElementById("result-table").innerHTML = points;

}

function decreaseRect() {
    for (let i = 0; i < rect_count; i++) {
        rect_value[i]--;
    }
}

function checkRects(x, y) {
    let max_height = canvas.height;
    for (let i = 0; i < rect_count; i++) {
        let x_real = x_posits[i] + max_height/2/size_rect;
        let y_real = y_posits[i] + max_height/2/size_rect;
        if (Math.abs(x - x_real) < (max_height/(2*size_rect) + max_height/size_ball) && Math.abs(y - y_real) < (max_height/(2*size_rect) + max_height/size_ball)) {
            x_posits[i] = -100;
            y_posits[i] = -100;
            points += rect_value[i];
        }
    }
}

function checkPosit(x, y) {
    let max_height = canvas.height;
    for (let i = 0; i < rect_count; i++) {
        let x_real = x_posits[i] + max_height/2/size_rect;
        let y_real = y_posits[i] + max_height/2/size_rect;
        if (Math.abs(x + max_height/(2*size_rect) - x_real) < max_height/size_rect && Math.abs(y + max_height/(2*size_rect) - y_real) < max_height/size_rect) {
            return false;
        }
    }
    return true;
}

function checkEnd() {
    if (rect_count < rect_max-1 || game_end == 1) return false;
    for (let i = 0; i < rect_count; i++) {
        if (x_posits[i] != -100) return false;
    }
    return true;
}

function genRect() {
    let max_width = canvas.width;
    let max_height = canvas.height;
    
    if (rect_count > rect_max) return;

    let x;
    let y;

    do {
        x = Math.random() * (max_width - 2 * max_height / size_rect) + max_height / size_rect;
        y = Math.random() * (max_height - 2 * max_height / size_rect) + max_height / size_rect;
    } while (!checkPosit(x, y));

    rect_value[rect_count] = Math.floor((Math.random()*20));
    x_posits[rect_count] = x;
    y_posits[rect_count] = y;
    rect_count++;
}

function printRects() {
    let max_height = canvas.height;
    for (let i = 0; i < rect_count; i++) {
        if (x_posits[i] != -100) {
            if (rect_value[i] > 0) {
                ctx.fillStyle = "green";
            } else {
                ctx.fillStyle = "red";
            }
            ctx.fillRect(x_posits[i], y_posits[i], max_height / size_rect, max_height / size_rect);
            ctx.font = String(Math.floor(max_height/1.5/size_rect)) + "px Arial";
            ctx.strokeText(String(rect_value[i]), x_posits[i], y_posits[i] + max_height / (1.4*size_rect));
        }
    }
}

function printBall() {
    let max_width = canvas.width;
    let max_height = canvas.height;

    ctx.clearRect(0, 0, max_width, max_height);
    checkRects(x_posit, y_posit);
    printRects();

    if (x_posit == -1) {
        x_dir = 0;
        y_dir = 0;
        x_posit = max_width / 2;
        y_posit = max_height / 2;
    }

    if (x_posit < max_height/(5*size_ball)) {
        x_posit = max_width - max_height/(5*size_ball);
    }
    if (x_posit > max_width - max_height/(5*size_ball)) {
        x_posit = max_height/(5*size_ball);
    }
    if (y_posit < max_height/(5*size_ball)) {
        y_posit = max_height - max_height/(5*size_ball);
    }
    if (y_posit > max_height - max_height/(5*size_ball)) {
        y_posit = max_height/(5*size_ball);
    }

    let dx = x_dir;
    let dy = y_dir;

    x_posit += dx;
    y_posit += dy;

    ctx.beginPath();
    ctx.arc(x_posit, y_posit, max_height / size_ball, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    print_ball = window.requestAnimationFrame(printBall);
}

let paused = 0;
let end = 0;

hallOfGlory();

window.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 37: // Left
            x_dir = -speed_ball;
            y_dir = 0;
            break;
        case 39: // Right
            x_dir = speed_ball;
            y_dir = 0;
            break;
        case 38: // Up
            x_dir = 0;
            y_dir = -speed_ball;
            break;
        case 40: // Down
            x_dir = 0;
            y_dir = speed_ball;
            break;
        case 80: //P
            stop_game();
            if(paused) start_game();
            paused = 1 - paused;
            break;
        case 49:
            if (level != 0) return;
            start_level_1();
            level = 1;
            break;
        case 50:
            if (level != 1) return;
            start_level_2();
            level = 2;
            break;
        case 51:
            if (level != 2) return;
            start_level_3();
            level = 3;
            break;
        case 27: //Esc
            if(!end) {
                stop_game();
                hallOfGlory();
                stop_game();
                hallOfGlory();
                end = 1;
                break;
            }
    }
}, false);

