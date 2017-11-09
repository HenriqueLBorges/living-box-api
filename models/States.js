var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var statesSchema = new Schema({
    questionsID: String,
    state: Object
})

var states = mongoose.model("states", statesSchema);

module.exports = states;