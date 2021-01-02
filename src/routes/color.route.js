import express from "express";

import colorController from "../controllers/color";

const router = express.Router();

router
  .route("/")
  .post(colorController.addColorData)
  .get(colorController.getAllColors);

export default router;