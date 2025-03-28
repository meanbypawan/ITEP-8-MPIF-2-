import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import pool from "./db/dbConfig.js";
import IndexRouter from "./routes/index.route.js";
import AdminRouter from "./routes/admin.route.js";
import ProductRouter from "./routes/product.route.js";
const app = express();
app.use(session({secret:"dflafjreireovcxvxcbvroeiwruower"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","ejs");

app.use("/admin",AdminRouter);
app.use("/product",ProductRouter);
app.use("/",IndexRouter);
app.listen(3000,()=>{
    console.log("Server Started....");
});