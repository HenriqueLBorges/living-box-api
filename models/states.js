var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var statesSchema = new Schema({
    _id: String,
    questionsID: String,
    option: Number,
    state: Object
});

var States = mongoose.model("States", statesSchema);

module.exports = States;