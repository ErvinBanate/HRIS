import express from "express";
import { deleteShiftByIdController, getAllShiftsController, getShiftByIdController, postShiftController, updateShiftByIdController, userMonthlyHoursController, userShiftsController } from "../controllers/shiftsController";

const router = express.Router();

router.get('/userMonthlyHours/:user_id', userMonthlyHoursController);
router.get('/userShifts/:user_id', userShiftsController);
router.get('/', getAllShiftsController);
router.get('/:id', getShiftByIdController);
router.put('/:id', updateShiftByIdController);
router.delete('/:id', deleteShiftByIdController);
router.post('/', postShiftController);

export default router;