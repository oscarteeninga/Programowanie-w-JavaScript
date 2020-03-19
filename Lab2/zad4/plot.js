

function draw(r, begin, end, color) {
    var c = document.getElementById("canvas-plot");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(1.25*r, 1.25*r, r, 2*begin * Math.PI, 2*end * Math.PI);
    ctx.lineTo(1.25*r, 1.25*r);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();

}

function print_legenda(i, color, count) {
    document.getElementById("legenda").innerHTML += "<h4><font color=\"" + color +"\">" + i + "</font>/ " + count +"</h4>";
}

function find_max(source) {
    let max = 0;
    for (let i = 0; i < source.length; i++) {
        if (max < source[i]) {
            max = source[i];
        }
    }
    return max;
}

function get_rand_color() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function gen_plot(r, source_array) {
    document.getElementById("legenda").innerHTML = "";
    let size = find_max(source_array);
    let array = new Array(size+1);
    for (let i = 0; i <= size; i++) {
        array[i] = 0;
    }
    let sum = 0;
    for (let i = 0; i < source_array.length; i++) {
        array[source_array[i]]++;
        sum++;
    }
    let curr_posit = 0;
    for (let i = 0; i <= size; i++) {
        let color = get_rand_color();
        draw(r, curr_posit, curr_posit + array[i]/sum, color);
        if(array[i] != 0) print_legenda(i, color, array[i]);
        curr_posit += array[i]/sum;
        
    }
}



