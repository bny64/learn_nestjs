import { Cat, CatType } from "./cats.model";
import * as express from "express";

const router = express.Router();

// * READ 고양이 전체 데이터 조회
router.get("/cats", (req: express.Request, res: express.Response) => {
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
router.get("/cats/:id", (req: express.Request, res: express.Response) => {
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
router.post("/cats", (req: express.Request, res: express.Response) => {
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

router.patch("/cats/:id", (req: express.Request, res: express.Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

router.delete("/cats/:id", (req: express.Request, res: express.Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    console.log(Cat);
    console.log(`body.id : ${body.id}`);
    const newCat = Cat.filter((cat) => cat.id !== body.id);

    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

export default router;
