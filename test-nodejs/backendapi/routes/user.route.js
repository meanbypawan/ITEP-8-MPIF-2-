import express from "express";
import { signUpAction, signInAction } from "../controller/user.controller.js";
import { body } from "express-validator";
const router = express.Router();

// http://localhost:3000/user/sign-up
router.post("/sign-up",
    body("username","username is required").notEmpty(),
    body("email","email id is required").notEmpty(),
    body("email","invalid email id").isEmail(),
    body("contact","only digits are allowed").isNumeric(),signUpAction);
router.post("/sign-in",signInAction);
export default router;