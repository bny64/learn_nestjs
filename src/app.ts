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

//전체적인 미들웨어로 사용할 때는 use를 사용
/* app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  next();
}); */

app.get("/", (req, res, next) => {
  console.log(req.rawHeaders[1]);
  next();
});

app.get(
  "/cats/som",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`this is som middleware`);
    next();
  }
);

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ cats: Cat });
});
//app.get이 하나의 Router

app.get("/cats/blue", (req, res, next: express.NextFunction) => {
  res.send({ blue: Cat[0] });
});

app.get("/cats/som", (req: express.Request, res: express.Response) => {
  res.send({ som: Cat[1] });
});

app.use((req, res, next) => {
  res.send({ error: "404 error!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
