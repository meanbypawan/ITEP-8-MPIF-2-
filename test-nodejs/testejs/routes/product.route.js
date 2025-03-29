import express from "express";
import { addProductPage,deleteProduct ,addProduct,viewProductPage, editProductPage, editProduct } from "../controller/product.controller.js";
import { verify } from "../middleware/auth.js";

const router = express.Router();

router.get("/add-product",verify,addProductPage);
router.post("/add-product",verify,addProduct);
router.get("/view-product",verify,viewProductPage);
router.get("/edit/:id",verify,editProductPage);
router.post("/edit",verify,editProduct);
router.get("/delete/:id",verify,deleteProduct);
export default router;