import express from "express";
import { deleteWorkScheduleByIdController, getAllWorkSchedulesController, getWorkScheduleByIdController, getWorkScheduleByUserIdController, postWorkScheduleController, updateWorkScheduleByIdController } from "../controller/workScheduleController";

const router = express.Router();

router.get('/workScheduleByUser/:user_id', getWorkScheduleByUserIdController);
router.get('/', getAllWorkSchedulesController);
router.get('/:id', getWorkScheduleByIdController);
router.put('/:id', updateWorkScheduleByIdController);
router.delete('/:id', deleteWorkScheduleByIdController);
router.post('/', postWorkScheduleController); 

export default router;