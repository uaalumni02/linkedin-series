import express from "express";

import userController from "../controllers/user";

const router = express.Router();

router.post('/login', userController.userLogin);

router.post("/login", userController.userLogin);

router.route("/").post(userController.addUser).get(userController.getAllUsers);

export default router;
