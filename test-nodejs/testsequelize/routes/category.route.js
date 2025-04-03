import express from "express";
import { fetchCategories, saveInBulkAction } from "../controller/category.controller.js";
const router = express.Router();
router.post("/save-in-bulk",saveInBulkAction);
router.get("/list",fetchCategories);
export default router;