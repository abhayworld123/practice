var express = require('express'),
http = require('http');

var path = require('path');
var fs = require('fs');

var server= "localhost";
var port = 3000; 

var app = express;
app.use(function (req, res ,next){
    console.log(req.headers);

    res.writeHead(200,{'Content-Type': 'text/html'});
    x

})

