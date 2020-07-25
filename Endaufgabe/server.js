"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endaufgabe = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var Endaufgabe;
(function (Endaufgabe) {
    let answers;
    let databaseUrl = "mongodb+srv://new-user:123654@alina.ikm1m.mongodb.net/Abgabe?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    function startServer(_port) {
        console.log("Starting server");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        answers = mongoClient.db("Abgabe").collection("Eis");
    }
    startServer(port);
    connectToDatabase(databaseUrl);
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log("I hear voices!");
        if (_request.url) {
            let q = url.parse(_request.url, true);
            if (q.pathname == "/send") {
                storeAnswers(q.query);
            }
            else if (q.pathname == "/get") {
                _response.write(await answers.find().toArray());
            }
        }
        _response.end();
    }
    function storeAnswers(_answer) {
        answers.insertOne(_answer);
    }
})(Endaufgabe = exports.Endaufgabe || (exports.Endaufgabe = {}));
//# sourceMappingURL=server.js.map