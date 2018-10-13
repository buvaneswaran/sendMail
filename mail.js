
/* Importing modules */
var nodemailer = require('nodemailer');
var fs = require('file-system');
var edmContent = fs.readFileSync("mailedm.html","utf-8");

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "int.rsivakumar@gmail.com",
    pass: 'siva1234'
  }
});

var mailOptions = {
  from: "int.rsivakumar@gmail.com",
  to: ["int.rsivakumar@gmail.com", "pbuvaneswaran@interaktmail.com","buvanesh.special@gmail.com"],
  subject: 'Vision Market',
  html: edmContent
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


/* Converting html file into string */




