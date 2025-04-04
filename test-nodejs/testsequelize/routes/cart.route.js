import express from "express";
import { addToCart, removeFromCart, fetchCart } from "../controller/cart.controller.js";
const router  = express.Router();

router.post("/add-to-cart",addToCart);
router.delete("/remove-from-cart/:userId/:productId",removeFromCart);
router.get("/:userId",fetchCart);
export default router;