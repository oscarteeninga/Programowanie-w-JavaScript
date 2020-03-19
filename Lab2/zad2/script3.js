"use strict";

var countsum = 0;

function genConsole(loaded) {
    let digitStr = String(digit(loaded)).fontcolor("red");
    let letterStr = String(letter(loaded)).fontcolor("green");
    let countSumStr = String(countSum(loaded)).fontcolor("blue");
    let string = loaded + "<br>" + "\t" + digitStr + "\t" + letterStr + "\t" + countSumStr + "\n" + "<br>";
    return string;
}

function sum(x, y) {
    return x + y;
}

function digit(data) {
    let digitsum = 0;
    for (let i = 0; i < data.length; i++) {
        if (!isNaN(parseInt(data[i]))) { digitsum += parseInt(data[i]); }
    }
    return digitsum;
}

function letter(data) {
    let lettersum = 0;
    for (let i = 0; i < data.length; i++) {
        if (isNaN(parseInt(data[i]))) { lettersum++; }
    }
    return lettersum;
}

function countSum(data) {
    if (!isNaN(parseInt(data))) { countsum += parseInt(data); }
    return countsum;
}
