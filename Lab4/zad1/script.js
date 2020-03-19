'use strict';
var module = require('./module');
let op = new module.Operation(process.argv[2], process.argv[3]);
console.log(op.sum());

