//const express = require('express');
import * as express from "express";
import catsRouter from "./cats/cats.routes";

//const app = express();
const app: express.Express = express();
//app은 express의 인스턴스, app이 곧 서버역할

//const port = 8000;
const port: number = 8000;

/* app.get("/", (req, res) => {
  res.send("hello world");
}); */

//전체적인 미들웨어로 사용할 때는 use를 사용
/* app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  next();
}); */

app.use(express.json());
app.use(catsRouter);

// * logging middleware
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.rawHeaders[1]);
    console.log(`this is logging middleware`);
    next();
  }
);

// * 404 middleware
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`this is error middleware`);
    res.send({ error: `404 not found error` });
  }
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
