import express from "express";
import pool from "../db/dbConfig.js";
import { signInAction, dashboardPage, signOutAction } from "../controller/admin.controller.js";
import { verify } from "../middleware/auth.js";
const router = express.Router();

router.post("/sign-in",signInAction);
router.get("/dashboard",verify,dashboardPage);
router.post("/signout",verify,signOutAction);
export default router;