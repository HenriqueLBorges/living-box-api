//Models
var Actuators_sensors = require("../models/actuators_sensors");
var Questions = require("../models/questions");
var States = require("../models/states");

module.exports = function (app) {
    // Seed database
    app.get("/api/seedDatabase/actuators_sensors", function (req, res) {
        //actuators_sensors
        let startActuators_sensors = [
            {
                _id: "1",
                name: "DHT 11",
                description: "O DHT11 é um sensor de temperatura e umidade que permite fazer leituras de temperaturas entre 0 a 50 Celsius e umidade entre 20 a 90%, muito usado para projetos com Arduino."
            }
        ]

        Actuators_sensors.create(startActuators_sensors, function (err, results) {
            res.send(results);
        });
    });
    app.get("/api/seedDatabase/questions", function (req, res) {
        //questions
        let startQuestions = [
            {
                _id: "1",
                actuators_sensorsID: "1",
                question: "Qual o nome do sensor?",
                options: [
                    {
                        answer: "DHT 11",
                        correct: true,
                        states: "1"
                    },
                    {
                        answer: "DHT 22",
                        correct: false,
                        states: "2"
                    }
                ]
            }
        ];

        Questions.create(startQuestions, function (err, results) {
            res.send(results);
        });
    });

    app.get("/api/seedDatabase/states", function (req, res) {
        //states
        let startStates = [
            {
                _id: "1",
                questionsID: "1",
                option: 0,
                state: {
                    temp: "10º C"
                }
            },
            {
                _id: "2",
                questionsID: "1",
                option: 1,
                state: {
                    temp: "99999999999999º C"
                }
            }
        ]

        States.create(startStates, function (err, results) {
            res.send(results);
        });
    });
}