//const express = require('express');
import * as express from "express";
import catsRouter from "./cats/cats.routes";

class Server {
  public app: express.Application;
  private port: number = 8000;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoutes() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // * logging middleware
    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.log(req.rawHeaders[1]);
        console.log(`this is logging middleware`);
        next();
      }
    );

    // * json middleware
    this.app.use(express.json());
    this.setRoutes();

    // * 404 middleware
    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.log(`this is error middleware`);
        res.send({ error: `404 not found error` });
      }
    );
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

function init() {
  const server: Server = new Server();
  server.listen();
}

init();
