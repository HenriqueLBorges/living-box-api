//Models
var Actuators_sensors = require("../models/actuators_sensors");
var Questions = require("../models/questions");
var States = require("../models/states");

module.exports = function (app) {
    // Seed database
    app.get("/api/seedDatabase/actuators_sensors", function (req, res) {
        //actuators_sensors
        var startActuators_sensors = [
            {
                _id: "1",
                name: "DHT 22",
                description: "O sensor DHT22 fornece tanto temperatura quanto umidade do ar instantaneamente. Ele utiliza um sensor capacitivo de umidade e um termistor para medir o ar circundante, ambos conectados a um controlador de 8 bits que produz um sinal digital serial no pino de dados (Data). Isso o torna muito fácil de usar com Arduino, Raspberry e outros microcontroladores pois possui apenas 1 pino com saída digital.",
                funFact: "O sensor DHT22 permite medir temperaturas de - 40 a 80º Celsius, e umidade na faixa de 0 a 100%. Sua faixa de precisão para temperatura é de 0,1 graus, e para umidade é de 0,1%.",
                photoURL: "https://www.filipeflop.com/wp-content/uploads/2017/07/SKU031549-.2.jpg"
            },
            {
                _id: "2",
                name: "LED",
                description: "O diodo emissor de luz, também conhecido pela sigla em inglês LED (Light Emitting Diode), é usado para a emissão de luz em locais e instrumentos onde se torna mais conveniente a sua utilização no lugar de uma lâmpada. Especialmente utilizado em produtos de microeletrônica como sinalizador de avisos, também pode ser encontrado em tamanho maior, como em alguns modelos de semáforos.",
                funFact: "Em 7 de outubro de 2014, os inventores dos diodos emissores de luz azul foram laureados com o Prêmio Nobel de Física.",
                photoURL: "https://cdn.shopify.com/s/files/1/0176/3274/files/Red_LED.png?16746610782883912414",
            },
            {
                _id: "3",
                name: "LDR",
                description: "O LDR (Light Dependent Resistor) é um componente cuja resistência varia de acordo com a intensidade da luz. Quanto mais luz incidir sobre o componente, menor a resistência.",
                funFact: "Este sensor de luminosidade pode ser utilizado em projetos com arduino e outros microcontroladores para alarmes, automação residencial ou sensores de presença.",
                photoURL: "https://www.filipeflop.com/wp-content/uploads/2017/07/450xN-7.jpg",
            }
        ]

        Actuators_sensors.create(startActuators_sensors, function (err, results) {
            res.send(results);
        });
    });
    app.get("/api/seedDatabase/questions", function (req, res) {
        //questions
        var startQuestions = [
            {
                _id: "1",
                actuators_sensorsID: "1",
                question: "Qual o nome do sensor?",
                options: [
                    {
                        answer: "DHT 11",
                        correct: false,
                        states: "1"
                    },
                    {
                        answer: "DHT 22",
                        correct: true,
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
        var startStates = [
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