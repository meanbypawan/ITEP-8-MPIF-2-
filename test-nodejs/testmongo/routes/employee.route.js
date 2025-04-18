import express from "express";
import { employeeList, saveEmployee, getEmployee, updateEmployee, deleteEmployee } from "../controller/employee.controller.js";
const router = express.Router();

router.post("/save",saveEmployee);
router.get("/list",employeeList);
router.get("/:id",getEmployee);
router.put("/:id",updateEmployee);
router.delete("/:id",deleteEmployee);
export default router;