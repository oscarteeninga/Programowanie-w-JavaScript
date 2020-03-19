const fs = require('fs');
let readline = require('readline-sync');

//var path = readline.question("Podaj ściezke: ");

var stat;

function check(path) {
    if (!fs.existsSync(path)) {
        console.log("It's nothing.");
        return 0;
    }
    if (fs.lstatSync(path).isDirectory()) {
        console.log("It is a directory.");
        return 1;
    } 
    if (fs.lstatSync(path).isFile()) {
        console.log("It is a file");
        console.log(fs.readFileSync(path, 'utf8'));
        return fs.readFileSync(path, 'utf8');
    }
}
module.exports.stat = stat;
module.exports.check = check;