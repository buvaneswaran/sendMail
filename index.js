
/* Importing modules */
var nodemailer = require('nodemailer');
var express = require('express');
var bodyParser = require('body-parser')
var fs = require('file-system');

var app = express();
app.use(bodyParser.json())



app.get('/', function (req, res) {

    let fromAdd = "int.rsivakumar@gmail.com";
    let toAdd = "buvanesh.special@gmail.com"
    var htmlAdd = fs.readFileSync("mailedm.html","utf-8");

    console.log(fromAdd);
    console.log(toAdd);
    console.log(htmlAdd);

    sendMail(fromAdd, toAdd, htmlAdd);

    response = {
        "success":"200",
     };
     console.log(response);
     res.end(JSON.stringify(response));
    });

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

function sendMail(fromValue, toValue, htmlValue) {

    var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: fromValue,
    pass: 'siva1234'
  }
});

var mailOptions = {
  from: fromValue,
  to: toValue,
  subject: 'Sending Email using Node.js',
  html: htmlValue
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}


