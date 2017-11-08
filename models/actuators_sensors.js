var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var actuators_sensorsSchema = new Schema({
    name: String,
    description: String
})

var actuators_sensors = mongoose.model("actuators_sensors", actuators_sensorsSchema);

module.exports = actuators_sensors;