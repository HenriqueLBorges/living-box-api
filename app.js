var express = require("express");
var app = express();
var config = require("./config/index");
var mongoose = require("mongoose");

//API
var apiController = require("./controllers/apiController");

//Set the available port or 3000
var port = process.env.Port || 3000;

//Connects mongoose to the database
mongoose.connect(config.getMongoConnectionString);

apiController(app);

app.listen(port);

