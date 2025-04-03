import express from "express";
import { fetchProducts, saveInBulkAction, fetchProduct, deleteProduct, updateProduct } from "../controller/product.controller.js";
const router = express.Router();

router.post("/save-in-bulk",saveInBulkAction);
router.get("/list",fetchProducts);
router.get("/:id",fetchProduct);
router.delete("/:id",deleteProduct);
router.put("/:id",updateProduct);
export default router;