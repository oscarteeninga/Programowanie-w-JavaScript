// No use of the template system
var express = require('express'),
    logger = require('morgan');
var app = express();
var x = 1;
var y = 2;
 
// Determining the contents of the middleware stack
app.use(logger('dev'));                         // Place an HTTP request recorder on the stack - each request will be logged in the console in 'dev' format
app.use(express.static(__dirname + '/public')); // Place the built-in middleware 'express.static' - static content (files .css, .js, .jpg, etc.) will be provided from the 'public' directory
 
// Route definitions
app.get('/', function (req, res) {     // The first route
    let str = String('<h4>' + x + " + " + y + " = " + (x+y) + '</h4>');
    res.cookie('cookie', String(x+y));
    res.send('<h1>Hello World!</h1>' + str);
    console.log(str);
    console.log(res.cookies.cookie);
});

app.param('a', function (req, res, next, a) {
    x = parseInt(a);
    console.log("x = " + x);
    next();
  });

  app.param('b', function (req, res, next, b) {
    y = parseInt(b);
    console.log("y = " + y);
    next();
  });

app.get('/add/:a/:b', function (req, res) {     // The first route
    let str = String('<h4>' + x + " + " + y + " = " + (x+y) + '</h4>');
    res.cookie('cookie', String(x+y));
    res.send('<h1>Hello World!</h1>' + str);
    console.log(str);
});
 
// The application is to listen on port number 3000
app.listen(3000, function () {           
    console.log('The application is available on port 3000');
});