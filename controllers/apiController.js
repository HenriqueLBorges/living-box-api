//Models
var Actuators_sensors = require("../models/actuators_sensors");
var Questions = require("../models/questions");
var States = require("../models/states");
var PythonShell = require('python-shell');
var bodyParser = require("body-parser");
var led = false;
var buzzer = false;
var ventilador = false;
var input = 0;

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/api/dht22", function (req, res) {
        //Returns dht22 reading
        options = {
            args: ["living-box", "temp"]
        };
        PythonShell.run('scripts/lcd.py', options, function (err, results) {
            if (err) throw err;
        });
        console.log("Temp = ");
    });

    app.get("/api/led", function (req, res) {
        //activates led
        led = !led;
        input = 0;
        if (led)
            input = 1;
        options = {
            args: ["LED", input]
        };
        PythonShell.run('scripts/led.py', options, function (err, results) {
            if (err) throw err;
        });
        console.log("Led = ", led);
        res.send(led);
    });

    app.get("/api/buzzer", function (req, res) {
        //activates buzzer
        buzzer = !buzzer;
        input = 0;
        if (buzzer)
            input = 1;
        options = {
            args: ["BUZZER", input]
        };
        PythonShell.run('scripts/led.py', options, function (err, results) {
            if (err) throw err;
        });
        console.log("Buzzer = ", buzzer);
        res.send(buzzer);
    });

    app.get("/api/ventilador", function (req, res) {
        input = 0;
        ventilador = !ventilador;
        if (ventilador)
            input = 1;
        options = {
            args: ["VENTILADOR", input]
        };
        PythonShell.run('scripts/led.py', options, function (err, results) {
            if (err) throw err;
        });
        console.log("Ventilador = ", ventilador);
        res.send(ventilador);
    });

    app.get("/api/ldr", function (req, res) {
        //Returns ldr sensor output

    });

    app.get("/api/actuators_sensors", function (req, res) {
        //Returns all sensors in the actuators_sensors collection
        Actuators_sensors.find({}, function (err, actuators_sensors) {
            if (err) throw err;
            res.send(actuators_sensors);

            var options = {
                args: ['living-box', 'Bem vindo!! Esta preparado?']
            };

            PythonShell.run('scripts/inicio.py', options, function (err, results) {
                if (err) throw err;
                console.log(results);
            });

        })
    });

    app.get("/api/questions/:id", function (req, res) {
        //Returns all questions that matchs the sensor's ID
        Questions.find({ _id: req.params.id }, function (err, questions) {
            if (err) throw err;
            res.send(questions);
        });
    });

    app.get("/api/states/:id", function (req, res) {
        //Sets a state to the living box
        States.findById({ _id: req.params.id }, function (err, state) {
            if (err) throw err;
            res.send(state);

            if (typeof state.state.temp !== "undefined") {
                var options = {
                    args: ['living-box', 'Temp: ' + state.state.temp]
                };

                PythonShell.run('scripts/lcd.py', options, function (err, results) {
                    if (err) throw err;
                    console.log(results);
                });
            }
            if (typeof state.state.led !== "undefined") {
                if (state.state.led == true) {
                    state.state.led = 1;
                } else {
                    state.state.led = 0;
                }
                options = {
                    args: ["LED", state.state.led]
                };
                PythonShell.run('scripts/led.py', options, function (err, results) {
                    if (err) throw err;
                    console.log(results);
                });
            }
            if (typeof state.state.buzzer !== "undefined") {
                if (state.state.buzzer == true) {
                    state.state.buzzer = 1;
                } else {
                    state.state.buzzer = 0;
                }
                options = {
                    args: ["BUZZER", state.state.buzzer]
                };

                PythonShell.run('scripts/led.py', options, function (err, results) {
                    if (err) throw err;
                    console.log(results);
                });
            }
            if (typeof state.state.ventilador !== "undefined") {
                if (state.state.ventilador == true) {
                    state.state.ventilador = 1;
                } else {
                    state.state.ventilador = 0;
                }
                options = {
                    args: ["VENTILADOR", state.state.ventilador]
                };

                PythonShell.run('scripts/led.py', options, function (err, results) {
                    if (err) throw err;
                    console.log(results);
                });
            }

            //Needs to set the value to the actuators and print values on the sensor
        });
    });
}
