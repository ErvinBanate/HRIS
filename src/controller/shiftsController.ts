import { Request, Response } from "express";
import { deleteShiftById, getAllShifts, getMonthlyShiftHours, getShiftById, getShiftByUserId, saveShift, updateShiftById } from "../services/shiftsService";
import { shiftsData } from "../interface/shiftsInterface";
import { getMonthlyOvertimeHours, getMonthlyRestdayHours } from "../services/overtimeService";

export const getAllShiftsController = async (req: Request, res: Response) => {
    try {
        const shifts = await getAllShifts();
        
        return res.status(200).json({
            count: shifts?.length,
            data: shifts,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const getShiftByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const shift = await getShiftById(id);

        return res.status(200).json(shift);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const updateShiftByIdController = async (req: Request, res: Response) => {
    try {
        if (!req.body.user_id || !req.body.type || !req.body.new_shift_type || !req.body.date || !req.body.check_in || !req.body.check_out || !req.body.actual_check_in || !req.body.actual_check_out || !req.body.between_end || !req.body.between_start || !req.body.primary_status || !req.body.backup_status || !req.body.shift_length || !req.body.paid_hours || !req.body.primary_approver || !req.body.backup_approver || !req.body.approver_note || !req.body._token || !req.body.approved_by || !req.body.approved_at) {
            return res.status(400).send({
                message: "Please fill up all required"
            });
        }
        const { id } = req.params;
        const result = await updateShiftById(id, req.body);

        if (!result) {
            return res.status(400).send({ message: "Shift not found" });
        }
        return res.status(200).send({ message: "Shift update success" });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const deleteShiftByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await deleteShiftById(id);

        if (!result) {
            return res.status(400).send({ message: "Shift not found" });
        }
        return res.status(200).send({ message: "Shift delete success" });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const postShiftController = async (req: Request, res: Response) => {
    try {
        if (!req.body.user_id || !req.body.type || !req.body.new_shift_type || !req.body.date || !req.body.check_in || !req.body.check_out || !req.body.actual_check_in || !req.body.actual_check_out || !req.body.between_end || !req.body.between_start || !req.body.primary_status || !req.body.backup_status || !req.body.shift_length || !req.body.paid_hours || !req.body.primary_approver || !req.body.backup_approver || !req.body.approver_note || !req.body._token || !req.body.approved_by || !req.body.approved_at) {
            return res.status(400).send({
                message: "Please fill up all required"
            });
        }
        const newShift: shiftsData = {
            user_id: req.body.user_id,
            type: req.body.type,
            new_shift_type: req.body.new_shift_type,
            date: req.body.date,
            check_in: req.body.check_in,
            check_out: req.body.check_out,
            actual_check_in: req.body.actual_check_in,
            actual_check_out: req.body.actual_check_out,
            between_end: req.body.between_end,
            between_start: req.body.between_start,
            primary_status: req.body.primary_status,
            backup_status: req.body.backup_status,
            shift_length: req.body.shift_length,
            paid_hours: req.body.paid_hours,
            primary_approver: req.body.primary_approver,
            backup_approver: req.body.backup_approver,
            approver_note: req.body.approver_note,
            onsite: req.body.onsite,
            _token: req.body._token,
            approved_by: req.body.approved_by,
            approved_at: req.body.approved_at,
        };
        const shift = await saveShift(newShift);

        return res.status(201).send(shift);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const userMonthlyHoursController = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params;
        const numberUserId = Number(user_id);
        const shiftTotal = await getMonthlyShiftHours(numberUserId);
        const overtimeTotal = await getMonthlyOvertimeHours(numberUserId);
        const restdayTotal = await getMonthlyRestdayHours(numberUserId);

        return res.status(200).json({
            shift: shiftTotal,
            overtime: overtimeTotal,
            restday: restdayTotal,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const userShiftsController = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params;
        const numberUserId = Number(user_id)
        const shifts = await getShiftByUserId(numberUserId);

        if (!shifts) {
            return res.status(400).send({ message: "Shift not found"});
        }
        return res.status(200).json(shifts);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}