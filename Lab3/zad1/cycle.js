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

cyckle();