var expect = chai.expect;

var dictionary = new Map();

var writed = "";

function getLine() {
    let el1 = document.forms.fm;
    let tmp = el1.elements.pole_tekstowe;
    if (writed != "") return String(writed);
    else return String(tmp.value);
}

function addTranslation() {
    let array = getLine().split(":");
    let word = array[0];
    if (word == "") return;
    if (dictionary.get(word) == null) {
        dictionary.set(word, []);
        document.getElementById("cons").innerHTML = "<h5> Dodano nowe słowo! </h5>";
        refresh();
    }
    if (array.length == 1) {
        document.getElementById("cons").innerHTML = "<h5> Nie podano nowych znaczeń! </h5>";
        return;
    }
    let trans = array[1].split(",");
    if (!isNaN(parseInt(word))) return;
    for (let i = 0; i < trans.length; i++) {
        if (!dictionary.get(word).includes(trans[i])) dictionary.get(word).push(trans[i]);
    }
    document.getElementById("cons").innerHTML = "<h5> Dodano nowe tłumaczenia! </h5>";
    refresh();
}

function printTranslation() {
    let word = getLine().split(":")[0];
    if (!isNaN(parseInt(word))) return;
    if (dictionary.get(word) == null) {
        document.getElementById("cons").innerHTML = "<h5> Nie znaleziono wyrazu. </h5>";
        return;
    }
    let result = "";
    for (let i in dictionary.get(word)) {
        result += dictionary.get(word)[i] + ", ";
    }
    document.getElementById("cons").innerHTML = "<h5>" + word + " - " + result + "</h5>";
}

function del() {
    let word = getLine().split(":")[0];
    if (!isNaN(parseInt(word)) || dictionary.get(word) == null) {
        document.getElementById("cons").innerHTML = "<h5> Nie znaleziono słowa! </h5>";
        return;
    }
    if (dictionary.get(word).length == 0) {
        dictionary.delete(word);
        document.getElementById("cons").innerHTML = "<h5> Usunięto słowo </h5>";
    }
    else {
        dictionary.set(word, []);
        document.getElementById("cons").innerHTML = "<h5> Usunięto tłumaczenia </h5>";
    }
    refresh();
}

function gen() {
    writed = "go:isc,pojsc";
    addTranslation();

    writed = "do:robic,wykonac,czynic";
    addTranslation();
    writed = "";

    writed = "have:mieć,posiadać"
    addTranslation();

    writed = "make:robić,uczynić,tworzyć";
    addTranslation();

    writed = "can:móc";
    addTranslation();

    writed = "set:zestaw,zbiór,komplet,nastawić,kierunek,podstawa,garnitur";
    addTranslation();

    writed = "";
}

function parse_to_array(dictionary) {
    let i = 0;
    let array = new Array(dictionary.size);
    for (let value of dictionary.values()) {
        array[i] = value.length;
        i++;
    }
    return array;
}

function refresh() {
    let value = "| ";
    for (let key of dictionary.keys()) {
        if (dictionary.get(key).length == 0) value += "<font color='red'>" + key + "</font>" + " | "; 
        else value += key + " | ";
    }
    document.getElementById("status").innerHTML = dictionary.size + ": " + value;
    gen_plot(r, parse_to_array(dictionary));
}

let r = 200;

gen();
