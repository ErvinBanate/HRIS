import express from "express";
import { createUser, deleteUser, getEmployees, getUser, index, updateUser } from "../controllers/userController";

const router = express.Router();

router.get('/', index);

router.get('/:id', getUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.post('/', createUser);

router.get('/employeeNames', getEmployees);

export default router;