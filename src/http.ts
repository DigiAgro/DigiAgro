import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';


const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  return res.render('html/main.html');
});
const http = createServer(app); //Criando protocolo http
const io = new Server(http); //Criando protocolo ws
app.use(express.json());
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      let error = {
        error: err.message,
      };
      
      if (err instanceof Error) {      
        return response.status(400).json(error);
      }
  
      return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  );
export { http, io };