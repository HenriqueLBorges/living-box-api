var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var questionsSchema = new Schema({
    actuators_sensorsID: String,
    question: String,
    options: []
})

var questions = mongoose.model("questions", questionsSchema);

module.exports = questions;