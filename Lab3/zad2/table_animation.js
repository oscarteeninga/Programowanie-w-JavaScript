function gen() {
    var table = document.getElementsByTagName("td");

    for (i = 0; i < table.length; i++) {
        table[i].addEventListener("mouseenter", function (i) {
            return function () { rotate(i) };
        }(i), false);
        table[i].addEventListener("mouseleave", function (i) {
            return function () { normal(i) };
        }(i), false);
    }
}


function rotate(i) {
    var table = document.getElementsByTagName("td");

    setTimeout(function () {
        if (i < table.length-1) {
        table[i + 1].style.WebkitTransitionDuration = '3s';
        table[i + 1].style.webkitTransform = 'rotate(180deg)';
        table[i + 1].style.animationDelay = '1s';
        }
        if (i > 0) {
            table[i - 1].style.WebkitTransitionDuration = '3s';
            table[i - 1].style.webkitTransform = 'rotate(-180deg)';
            table[i - 1].style.animationDelay = '1s';
        }
    }, 1000);
    setTimeout(normal(i), 0);
}

function normal(i) {
    var table = document.getElementsByTagName("td");
    if (i < table.length-1) {
        table[i + 1].style.WebkitTransitionDuration = '0';
        table[i + 1].style.webkitTransform = 'rotate(0deg)';
        table[i + 1].style.animationDelay = '1s';
    }
    if (i > 0) {
        table[i - 1].style.WebkitTransitionDuration = '0';
        table[i - 1].style.webkitTransform = 'rotate(0deg)';
        table[i - 1].style.animationDelay = '1s';
    }
}