import express from 'express';
import { createServer } from 'http';
import io from 'socket.io';
import path from 'path';
import ejs from 'ejs';
import ChatEvent from './app/ChatEvent';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.app = createServer(this.server);
    this.io = io(this.app);
    this.middlewares();
    this.routes();
    this.chatSocket = new ChatEvent(this.io).chatSocket;
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.static(path.join(__dirname, 'public')));
    this.server.set('views', path.join(__dirname, 'public'));
    this.server.engine('html', ejs.renderFile);
    this.server.set('view engine', 'html');
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().app;
