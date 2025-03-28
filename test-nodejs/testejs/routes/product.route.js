import express from "express";
import { addProductPage, addProduct,viewProductPage } from "../controller/product.controller.js";
import { verify } from "../middleware/auth.js";

const router = express.Router();

router.get("/add-product",verify,addProductPage);
router.post("/add-product",verify,addProduct);
router.get("/view-product",verify,viewProductPage);
export default router;