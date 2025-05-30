import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UserRouter from "./routes/user.route.js";
import ProductRouter from "./routes/product.route.js";
import CartRouter from "./routes/cart.route.js";
import OrderRouter from "./routes/order.route.js";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
mongoose.connect("mongodb://localhost:27017/backenddb")
    .then(() => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use("/user", UserRouter);
        app.use("/product",ProductRouter);
        app.use("/cart",CartRouter);
        app.use("/order",OrderRouter);
        app.listen(process.env.PORT, () => {
            console.log("Server Started...At " + process.env.PORT);
        });
}).catch(err=>{
    console.log("Database connection failed..");
})