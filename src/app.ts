//const express = require('express');
import * as express from "express";
import { Cat, CatType } from "./app.model";

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

// * logging middleware
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.rawHeaders[1]);
    console.log(`this is logging middleware`);
    next();
  }
);

// * READ 고양이 전체 데이터 조회
app.get("/cats", (req: express.Request, res: express.Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// * READ 특정 고양이 데이터 조회
app.get("/cats/:id", (req: express.Request, res: express.Response) => {
  try {
    const params = req.params;
    const cats = Cat.find((cat) => cat.id === params.id);
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// * READ 특정 고양이 데이터 조회
app.post("/cats", (req: express.Request, res: express.Response) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: {
        message: "OK",
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

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
