
/* Importing modules */
var nodemailer = require('nodemailer');
var fs = require('file-system');
var express = require('express');

var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json())

app.get('/', function (req, res) {
  console.log("welcome");

  console.log(req.url);
  res.send('Hello World');
});



/* Converting html file into string */




