
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
  return res.send("200");
});



/* Converting html file into string */




