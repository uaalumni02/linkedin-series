import express from "express";

import colorController from "../controllers/color";
import checkAuth from "../middleware/check-auth";
const router = express.Router();

router
  .route("/")
  .post(checkAuth, colorController.addColorData)
  .get(checkAuth, colorController.getAllColors);

export default router;
