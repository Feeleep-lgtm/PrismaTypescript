import express from 'express';
import bodyParser from 'body-parser';
import { route } from './routes';


class App {
    public server;

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes()
    }

    middlewares(){
        this.server.use(express.json())
    }
    routes(){
        this.server.use('/api/v1/users', route)
    }
}

export default new App().server