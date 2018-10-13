
"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const restService = express();


restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());



restService.post("/home", function (req, res) {
   return res.json({
    speech: "Welcome",
    displayText:  "Welcome",
    source: "webhook-echo-sample"
  });
});

restService.listen(process.env.PORT || 8000, function () {
  console.log("Server up and listening");
});



/* Converting html file into string */




