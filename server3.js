var express = require('express');;

var morgan = require('morgan');

var hostname = 'localhost';
var port = process.env.port ||  3000;

var app = express();

var router = express.Router();


// app.get('/sample',function(req,res){

//     res.send('this is a sample');

// });


app.route('/login')

    // show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login)
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });

    
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next(); 
});

router.get('/', function(req, res) {
    var a = [{df:'3',fg:'nsm'}];
    res.send('im the home page!'+ JSON.stringify(a));  
     
});

router.get('/hello/:name', function(req, res) {
    res.send('hello ' + req.params.name + '!');
});

router.get('/about', function(req, res) {
    res.send('im the about page!'); 
});
app.use('/', router);

app.listen(port);
console.log('samle is workifn');