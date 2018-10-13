
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



restService.get("/home", function (req, res) {
   return res.json({
    speech: "Welcome",
    displayText:  "Welcome",
    source: "webhook-echo-sample"
  });
});



/* Converting html file into string */




