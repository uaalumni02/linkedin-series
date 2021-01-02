import express from "express";

import shoeController from "../controllers/shoes";
import checkAuth from "../middleware/check-auth";

const router = express.Router();

router
  .route("/")
  .post(checkAuth, shoeController.addShoeData)
  .get(checkAuth, shoeController.getAllShoes);

router.route("/:user").get(checkAuth, shoeController.getShoeByUser);

export default router;
