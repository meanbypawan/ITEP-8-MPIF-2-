import express from "express";
import { placeOrder, getOrderHistory } from "../controller/order.controller.js";

const router = express.Router();
router.post("/save",placeOrder);
router.get("/:userId",getOrderHistory);
export default router;