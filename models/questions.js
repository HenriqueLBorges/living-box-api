var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var questionsSchema = new Schema({
    _id: String,
    actuators_sensorsID: String,
    question: String,
    photos:[],
    options: []
});

var Questions = mongoose.model("Questions", questionsSchema);

module.exports = Questions;