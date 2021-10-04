//const express = require('express');
import * as express from "express";
import { Cat, CatType } from "./app.model";

//const app = express();
const app: express.Express = express();
//app은 express의 인스턴스, app이 곧 서버역할

//const port = 8000;
const port: number = 8000;

const data: number[] = [1, 2, 3, 4, 5];

/* app.get("/", (req, res) => {
  res.send("hello world");
}); */
app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send("hello world!");
});
//app.get이 하나의 Router

app.get("/data", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ cats: Cat });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
