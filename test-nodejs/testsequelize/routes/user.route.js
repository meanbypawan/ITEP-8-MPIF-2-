import express from "express";
import { signUpAction, signInAction } from "../controller/user.controller.js";
import { body } from "express-validator";

const router = express.Router();

// http://localhost:3000/user/sign-up
router.post("/sign-up", body("username", "username is required").notEmpty(),
    body("username", "Only alphabates allowed").isAlpha(),
    body("email", "Not valid email id").isEmail(),
    body("email", "Email id is required").notEmpty(),
    body("password", "Password is required").notEmpty(),
    body("password", "Invalid password").isLength({ min: 5, max: 10 }), signUpAction);
router.post("/sign-in",signInAction);
export default router;