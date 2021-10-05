import {
  readAllcat,
  readCat,
  updateCat,
  deleteCat,
  createCat,
} from "./cats.service";
import * as express from "express";

const router = express.Router();

// * READ 고양이 전체 데이터 조회
router.get("/cats", readAllcat);

// * READ 특정 고양이 데이터 조회
router.get("/cats/:id", readCat);

// * READ 특정 고양이 데이터 조회
router.post("/cats", createCat);

router.patch("/cats/:id", updateCat);

router.delete("/cats/:id", deleteCat);

export default router;
