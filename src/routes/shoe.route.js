import express from "express";

import shoeController from "../controllers/shoes";

const router = express.Router();

router
  .route("/")
  .post(shoeController.addShoeData)
  .get(shoeController.getAllShoes);

  router
  .route("/:user")
  .get( shoeController.getShoeByUser)

export default router;
