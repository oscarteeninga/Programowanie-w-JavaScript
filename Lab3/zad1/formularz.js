var flag;
var liczba;
var IntervalID;
var clicked = false;

function changeSpans() {
    let spans = document.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = String(liczba);
    }
}

function changeInput() {
    let input = document.getElementsByTagName("input")[0];
    input.getAttributeNode("value").value = 0;
    let el = document.forms.fm;
    let tmp = el.elements.licznik;
    tmp.value = 0;
    flag = false;
}

function dekrementation() {
    if (flag && liczba > 0) {
        changeSpans();
        liczba--;

    }
    else if(flag && liczba == 0) {
        changeSpans();
        changeInput();
    }
}

function licz() {
    flag = true;
    let el = document.forms.fm;
    let tmp = el.elements.licznik;
    if (tmp.value == "" || tmp == null) {
        liczba = 10;
    }
    else {
        liczba = parseInt(tmp.value);
    }
    if (!clicked) {
        IntervarID = window.setInterval(dekrementation, 1000);
        clicked = true;
    }
}
