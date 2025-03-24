import express from "express";
import bodyParser from "body-parser";
import pool from "./db/dbConfig.js";
import IndexRouter from "./routes/index.route.js";
import AdminRouter from "./routes/admin.route.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","ejs");

app.use("/admin",AdminRouter);
app.use("/",IndexRouter);
app.listen(3000,()=>{
    console.log("Server Started....");
});