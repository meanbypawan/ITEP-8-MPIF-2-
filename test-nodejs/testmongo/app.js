import express from "express";
import bodyParser from "body-parser";
import EmployeeRouter from "./routes/employee.route.js";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/employee",EmployeeRouter);
app.listen(3000,()=>{
    console.log("Server Started....");
});

