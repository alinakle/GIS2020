import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";

export namespace Endaufgabe {

    interface Answer {
        [type: string]: string | string[];
    }

    let answers: Mongo.Collection;
    let databaseUrl: string = "mongodb+srv://new-user:123654@alina.ikm1m.mongodb.net/Abgabe?retryWrites=true&w=majority";

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    function startServer(_port: number): void {

        console.log("Starting server");
        let server: Http.Server = Http.createServer();

        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);

        server.listen(_port);

    }

    function handleListen(): void {

        console.log("Listening");
        }

    async function connectToDatabase(_url: string): Promise<void> {

        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        answers = mongoClient.db("Abgabe").collection("Eis");
    }

    startServer(port);
    connectToDatabase(databaseUrl);

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");

            console.log("I hear voices!");

            if (_request.url) {

                let q: url.UrlWithParsedQuery = url.parse(_request.url, true);

                if (q.pathname == "/send") {

                    storeAnswers(<Answer>q.query);
                }
                else if (q.pathname == "/get") {

                    _response.write(await answers.find().toArray());
                }
            }
            _response.end();
        }

    function storeAnswers(_answer: Answer): void {

        answers.insertOne(_answer);
        }
    }