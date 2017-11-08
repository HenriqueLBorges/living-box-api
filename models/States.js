var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var statesSchema = new Schema({
    questionsID: String,
    state: Object
})

var questions = mongoose.model("questions", statesSchema);

module.exports = questions;