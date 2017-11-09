var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var actuators_sensorsSchema = new Schema({
    _id: String,
    name: String,
    description: String
});

var Actuators_sensors = mongoose.model("Actuators_sensors", actuators_sensorsSchema);

module.exports = Actuators_sensors;