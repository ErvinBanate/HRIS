import express from "express";
import { createEmployee, deleteEmployee, getEmployee, index, updateEmployee } from "../controllers/employeeController";

const router = express.Router();

router.get('/', index);

router.get('/:id', getEmployee);

router.post('/', createEmployee);

router.put('/:id', updateEmployee);

router.delete('/:id', deleteEmployee);

export default router;