var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var statesSchema = new Schema({
    questionsID: String,
    state: Object
})

var states = mongoose.model("tates", statesSchema);

module.exports = states;