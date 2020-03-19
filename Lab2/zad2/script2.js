"use strict";
var expect = chai.expect;

var countsum = 0;

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

describe('The sum() function', function () {
    it('Returns 4 for 2+2', function () {
        expect(sum(2, 2)).to.equal(4);
    });
    it('Returns 0 for -2+2', function () {
        expect(sum(-2, 2)).to.equal(0);
    });
});

let sDigits = "123";
let sLetters = "abc";
let sLetDig = "abc123";
let sDigLet = "123abc";
let sNull = "";


describe('The digit() function', function () {
    it('Returns 6 for 123', function () {
        expect(digit(sDigits)).to.equal(6);
    });
    it('Returns 0 for abc', function () {
        expect(digit(sLetters)).to.equal(0);
    });
    it('Returns 6 for abc123', function () {
        expect(digit(sLetDig)).to.equal(6);
    });
    it('Returns 6 for 123abc', function () {
        expect(digit(sDigLet)).to.equal(6);
    });
    it('Returns 0 for nothing', function () {
        expect(digit(sNull)).to.equal(0);
    });
});

describe('The letter() function', function () {
    it('Returns 0 for 123', function () {
        expect(letter(sDigits)).to.equal(0);
    });
    it('Returns 3 for abc', function () {
        expect(letter(sLetters)).to.equal(3);
    });
    it('Returns 0 for abc123', function () {
        expect(letter(sLetDig)).to.equal(3);
    });
    it('Returns 6 for 123abc', function () {
        expect(letter(sDigLet)).to.equal(3);
    });
    it('Returns 0 for nothing', function () {
        expect(letter(sNull)).to.equal(0);
    });
});

describe('The countSum() function', function () {
    it('Returns 123 for 123', function () {
        expect(countsum + 123).to.equal(countSum(sDigits));
    });
    it('Returns 123 for abc', function () {
        expect(countsum).to.equal(countSum(sLetters));
    });
    it('Returns 123 for abc123', function () {
        expect(countsum).to.equal(countSum(sLetDig));
    });
    it('Returns 246 for 123abc', function () {
        expect(countsum + 123).to.equal(countSum(sDigLet));
    });
    it('Returns 246 for nothing', function () {
        expect(countsum).to.equal(countSum(sNull));
    });
});