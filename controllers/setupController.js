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
            /*{
                _id: "2",
                name: "LED",
                description: "O diodo emissor de luz, também conhecido pela sigla em inglês LED (Light Emitting Diode), é usado para a emissão de luz em locais e instrumentos onde se torna mais conveniente a sua utilização no lugar de uma lâmpada. Especialmente utilizado em produtos de microeletrônica como sinalizador de avisos, também pode ser encontrado em tamanho maior, como em alguns modelos de semáforos.",
                funFact: "Em 7 de outubro de 2014, os inventores dos diodos emissores de luz azul foram laureados com o Prêmio Nobel de Física.",
                photoURL: "https://cdn.shopify.com/s/files/1/0176/3274/files/Red_LED.png?16746610782883912414",
            },*/
            {
                _id: "2",
                name: "Relé",
                description: "O Relé é um interruptor eletromecânico. A movimentação física deste interruptor ocorre quando a corrente elétrica percorre as espiras da bobina do relé, criando assim um campo magnético que por sua vez atrai a alavanca responsável pela mudança do estado dos contatos.",
                funFact: "Os relés são aplicados na movimentação e proteção contra abertura de portas nos elevadores de nossos prédios, estão presentes nos processos de tratamento de água, nos processos de fabricação de alimentos. São largamente utilizados na linha de montagem de nossos carros, nas linhas de produção das peças que os compõe, sendo encontrados ainda nos sistemas de acesso do Metrô (nas catracas), nas composições de trens da CPTM e metrôs além dos ônibus movidos a eletricidade.",
                photoURL: "https://http2.mlstatic.com/D_Q_NP_505515-MLB25244683095_122016-Q.jpg",
            },
            {
                _id: "3",
                name: "LDR",
                description: "O LDR (Light Dependent Resistor) é um componente cuja resistência varia de acordo com a intensidade da luz. Quanto mais luz incidir sobre o componente, menor a resistência.",
                funFact: "Este sensor de luminosidade pode ser utilizado em projetos com arduino e outros microcontroladores para alarmes, automação residencial ou sensores de presença.",
                photoURL: "https://www.filipeflop.com/wp-content/uploads/2017/07/450xN-7.jpg",
            },
            {
                _id: "4",
                name: "Buzzer",
                description: "O Buzzer é um dispositivo de sinalização de áudio, ele pode ser mecânico, eletromagnético ou piezoelétrico.",
                funFact: "Os usos comuns de buzzer são para alarmes, timers ou para confirmação de um input de usuário.",
                photoURL: "https://ktechnics.com/wp-content/uploads/2016/03/piezo-buzzer.jpg",
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
                question: "Para que serve o .format() dentro no print na linha 11?",
                photos: ["https://scontent.fcgh4-1.fna.fbcdn.net/v/t1.0-9/23843318_1686679384716723_6230003194911179364_n.jpg?oh=fd1fa3b8ba687d543202672f194e7f44&oe=5A920C0C"],
                options: [
                    {
                        answer: "Para inserir um \n no final da String.",
                        correct: false,
                        states: "1"
                    },
                    {
                        answer: "Para formatar os valores recebidos.",
                        correct: true,
                        states: "2"
                    },
                    {
                        answer: "Para converter os valores de float para String.",
                        correct: false,
                        states: "1"
                    }
                ]
            },
            {
                _id: "2",
                actuators_sensorsID: "1",
                question: "De acordo com a imagem, qual é o GPIO que fará a leitura do sensor DHT 22?",
                photos: ["http://3.bp.blogspot.com/-tqMnaYzskeg/VNj4zgQUEiI/AAAAAAAADgE/u9yL_1Z8kVU/s1600/Circuito-Raspberry-Pi-DHT22_bb.png"],
                options: [
                    {
                        answer: "GPIO 23",
                        correct: true,
                        states: "3"
                    },
                    {
                        answer: "GPIO 21",
                        correct: false,
                        states: "4"
                    },
                    {
                        answer: "Pino 23",
                        correct: false,
                        states: "4"
                    }
                ]
            },
            /*{
                _id: "3",
                actuators_sensorsID: "2",
                question: "Por que é importante sempre usar um resistor acoplado ao LED?",
                photos: ["https://cdn.shopify.com/s/files/1/0176/3274/files/LEDs-BB400-1LED_bb_grande.png?6398700510979146820"],
                options: [
                    {
                        answer: "É importante usar um resistor para não queimar o LED.",
                        correct: false,
                        states: "5"
                    },
                    {
                        answer: "A Raspberry fornece uma corrente pequena (60mA), e o LED vai tentar puxar mais corrente da placa. Isso danificará a mesma.",
                        correct: true,
                        states: "6"
                    }
                ]
            },
            {
                _id: "4",
                actuators_sensorsID: "2",
                question: "Qual o nome da perna mais longa do LED?",
                photos: ["https://cdn.shopify.com/s/files/1/0176/3274/files/Red_LED.png?16746610782883912414"],
                options: [
                    {
                        answer: "Anodo.",
                        correct: true,
                        states: "7"
                    },
                    {
                        answer: "Catodo.",
                        correct: false,
                        states: "8"
                    }
                ]
            },*/
            {
                _id: "3",
                actuators_sensorsID: "2",
                question: "O que acontece na linha 12 'if status:'?",
                photos: ["https://scontent.fcgh4-1.fna.fbcdn.net/v/t1.0-9/24068123_1687283881322940_45083674275550605_n.jpg?_nc_eui2=v1%3AAeFiJNzQVnN2enWFGF8F_DdZkEQeTf3tQylSs4O0q13OnpH37cGTBSymlze3OQBJd8S50Nmt3FRDcHKADKMMGouZzK2vUS4bWscafs66x6bXew&oh=ad52c2ddd16bb30fd034b3ce75388796&oe=5A8FF0F9"],
                options: [
                    {
                        answer: "Nada.",
                        correct: false,
                        states: "5"
                    },
                    {
                        answer: "Verificamos se status == False.",
                        correct: false,
                        states: "5"
                    },
                    {
                        answer: "Verificamos se status == True.",
                        correct: true,
                        states: "6"
                    },
                ]
            },
            {
                _id: "4",
                actuators_sensorsID: "2",
                question: "Na linha 21, o que significa 'if __name__ == '__main__':'",
                photos: ["https://scontent.fcgh4-1.fna.fbcdn.net/v/t1.0-9/24068123_1687283881322940_45083674275550605_n.jpg?_nc_eui2=v1%3AAeFiJNzQVnN2enWFGF8F_DdZkEQeTf3tQylSs4O0q13OnpH37cGTBSymlze3OQBJd8S50Nmt3FRDcHKADKMMGouZzK2vUS4bWscafs66x6bXew&oh=ad52c2ddd16bb30fd034b3ce75388796&oe=5A8FF0F9"],
                options: [
                    {
                        answer: "Significa que aquele trecho de código vai ser executado apenas se o módulo for o principal.",
                        correct: true,
                        states: "7"
                    },
                    {
                        answer: "Esse if verifica o diretório do arquivo.",
                        correct: false,
                        states: "8"
                    }
                ]
            },
            {
                _id: "5",
                actuators_sensorsID: "3",
                question: "O que varia no LDR de acordo com a incidência de luz?",
                photos: [],
                options: [
                    {
                        answer: "A corrente.",
                        correct: false,
                        states: "9"
                    },
                    {
                        answer: "A voltagem.",
                        correct: false,
                        states: "9"
                    },
                    {
                        answer: "A resistência.",
                        correct: true,
                        states: "10"
                    },
                ]
            },
            {
                _id: "6",
                actuators_sensorsID: "3",
                question: "Por que precisamos de um capacitor no circuito?",
                photos: ["https://cdn.instructables.com/FH5/AQBN/J62G60G1/FH5AQBNJ62G60G1.MEDIUM.jpg"],
                options: [
                    {
                        answer: "Os pinos GPIO não são capazes de medir resistência, por isso precisamos de usar um capacitor ou um conversor analógico para digital.",
                        correct: true,
                        states: "11"
                    },
                    {
                        answer: "Os pinos GPIO não funcionam sem um capacitor.",
                        correct: false,
                        states: "12"
                    }
                ]
            },
            {
                _id: "7",
                actuators_sensorsID: "4",
                question: "Como devemos setar a váriavel 'Buzzer' para que o código ative o Buzzer?",
                photos: ["https://www.sunfounder.com/media/wysiwyg/swatches/sensor_kit_v2_0_for_b_plus/lesson-10-buzzer-module/fdsfdsfd.png", "https://scontent.fcgh4-1.fna.fbcdn.net/v/t1.0-9/23843463_1686641684720493_2740339507139911272_n.jpg?oh=d4c0b2d52d4a8093ca9483af2d5a3842&oe=5AD47051"],
                options: [
                    {
                        answer: "Buzzer = 17.",
                        correct: true,
                        states: "13"
                    },
                    {
                        answer: "Buzzer = 5.",
                        correct: false,
                        states: "14"
                    }
                ]
            },
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
                    temp: "99999999999999º C"
                }
            },
            {
                _id: "2",
                questionsID: "1",
                option: 1,
                state: {
                    temp: "10º C"
                }
            },
            {
                _id: "3",
                questionsID: "2",
                option: 0,
                state: {
                    temp: "18º C"
                }
            },
            {
                _id: "4",
                questionsID: "2",
                option: 1,
                state: {
                    temp: "30º C"
                }
            },
            {
                _id: "5",
                questionsID: "3",
                option: 0,
                state: {
                    led: false
                }
            },
            {
                _id: "6",
                questionsID: "3",
                option: 2,
                state: {
                    led: false
                }
            },
            {
                _id: "7",
                questionsID: "4",
                option: 0,
                state: {
                    led: true
                }
            },
            {
                _id: "8",
                questionsID: "4",
                option: 1,
                state: {
                    led: false
                }
            },
            {
                _id: "9",
                questionsID: "5",
                option: 0,
                state: {
                    ldr: "ERROR"
                }
            },
            {
                _id: "10",
                questionsID: "5",
                option: 2,
                state: {
                    ldr: "ALMOST THERE"
                }
            },
            {
                _id: "11",
                questionsID: "6",
                option: 0,
                state: {
                    ldr: "SUCCESS"
                }
            },
            {
                _id: "12",
                questionsID: "6",
                option: 1,
                state: {
                    ldr: "ERROR"
                }
            },
            {
                _id: "13",
                questionsID: "7",
                option: 0,
                state: {
                    buzzer: true
                }
            },
            {
                _id: "14",
                questionsID: "7",
                option: 0,
                state: {
                    buzzer: false
                }
            }
        ]

        States.create(startStates, function (err, results) {
            res.send(results);
        });
    });
}