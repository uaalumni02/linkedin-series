import express from "express";

import shoeController from "../controllers/shoes";

const router = express.Router();

router
  .route("/")
  .post(shoeController.addShoeData)
  .get(shoeController.getAllShoes);

export default router;
