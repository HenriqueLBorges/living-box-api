var express = require("express");
var app = express();
var config = require("./config/index");
var mongoose = require("mongoose");

//API
var apiController = require("./controllers/apiController");
var setupController = require("./controllers/setupController");

//Set the available port or 3000
var port = process.env.Port || 3000;

//Connects mongoose to the database
mongoose.connect(config.getMongoConnectionString());

apiController(app);
setupController(app);

app.listen(port);

