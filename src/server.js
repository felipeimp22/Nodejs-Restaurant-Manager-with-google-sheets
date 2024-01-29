// import 'dotenv/config';
import express from 'express';
import routes from './routes    ';
import cors from 'cors'

class Server {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
      }

      middlewares() {
        this.server.use(express.json(), cors());
        
      }

      routes() {
        this.server.use(routes);
        
      }
}
export default new Server().server;