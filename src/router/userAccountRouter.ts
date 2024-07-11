import express from "express";
import { createUserAccount, deleteUserAccount, getUserAccount, index, updateUserAccount } from "../controllers/userAccount";

const router = express.Router();

router.get('/', index);

router.get('/:id', getUserAccount);

router.put('/:id', updateUserAccount);

router.delete('/:id', deleteUserAccount);

router.post('/', createUserAccount);

export default router;