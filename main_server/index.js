import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './db/routes';

const hostname = '127.0.0.1';
const port = 8080;
const server = express();
// const app = http.createServer(server);

server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended:false }));
routes(server);

server.get('/', (req, res) => res.status(200).send({ message: 'Welcome to the default route.'}))

server.listen(port, hostname, () => {
    console.log(`Server is listening at http:${hostname}:${port}`);
});
