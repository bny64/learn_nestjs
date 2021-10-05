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

export default router;
