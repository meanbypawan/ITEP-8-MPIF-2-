import express from "express";
import { getProduct, list, saveInBulk } from "../controller/product.controller.js";
const router = express.Router();

router.post("/save",saveInBulk);
router.get("/list",list);
router.get("/:id",getProduct);
export default router;