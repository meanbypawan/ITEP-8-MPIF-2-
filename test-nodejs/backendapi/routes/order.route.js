import express from "express";
import { placeOrder, getOrderHistory } from "../controller/order.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();
router.post("/save",auth,placeOrder);
router.get("/:userId",auth,getOrderHistory);
export default router;