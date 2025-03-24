import express from "express";
import pool from "../db/dbConfig.js";
import { signInAction } from "../controller/admin.controller.js";
const router = express.Router();

router.post("/sign-in",signInAction);
export default router;