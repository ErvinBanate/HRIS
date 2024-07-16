import express from "express";
import { deleteOvertimeByIdController, getAllOvertimeController, getOvertimeByIdController, postOvertimeController, updateOvertimeByIdController } from "../controller/overtimeController";

const router = express.Router();

router.get('/', getAllOvertimeController);
router.get('/:id', getOvertimeByIdController);
router.put('/:id', updateOvertimeByIdController);
router.delete('/:id', deleteOvertimeByIdController);
router.post('/', postOvertimeController);

export default router;