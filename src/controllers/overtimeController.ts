import { Request, Response } from "express";
import { deleteOvertimeById, getAllOvertime, getOvertimeById, saveOvertime, updateOvertimeById } from "../services/overtimeService";
import { overtimeData } from "../interface/overtimeInterface";

export const getAllOvertimeController = async (req: Request, res: Response) => {
    try {
        const overtimes = await getAllOvertime();
        
        return res.status(200).json({
            count: overtimes?.length,
            data: overtimes,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const getOvertimeByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const overtime = await getOvertimeById(id);

        return res.status(200).json(overtime);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const updateOvertimeByIdController = async (req: Request, res: Response) => {
    try {
        if (!req.body.user_id || !req.body.type || !req.body.start_date || !req.body.end_date || !req.body.start_time || !req.body.end_time || !req.body.actual_check_in || !req.body.actual_check_out || !req.body.no_of_hours || !req.body.purpose || !req.body.primary_status || !req.body.backup_status || !req.body.primary_approver || !req.body.backup_approver || !req.body.approver_note || !req.body._token) {
            return res.status(400).send({
                message: "Please fill up all required"
            });
        }
        const { id } = req.params;
        const result = await updateOvertimeById(id, req.body);

        if (!result) {
            return res.status(400).send({ message: "Overtime not found" });
        }
        return res.status(200).send({ message: "Overtime update success" });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const deleteOvertimeByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await deleteOvertimeById(id);

        if (!result) {
            return res.status(400).send({ message: "Overtime not found" });
        }
        return res.status(200).send({ message: "Overtime delete success"});
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const postOvertimeController = async (req: Request, res: Response) => {
    try {
        if (!req.body.user_id || !req.body.type || !req.body.start_date || !req.body.end_date || !req.body.start_time || !req.body.end_time || !req.body.actual_check_in || !req.body.actual_check_out || !req.body.no_of_hours || !req.body.purpose || !req.body.primary_status || !req.body.backup_status || !req.body.primary_approver || !req.body.backup_approver || !req.body.approver_note || !req.body._token) {
            return res.status(400).send({
                message: "Please fill up all required"
            });
        }
        const newOvertime: overtimeData = {
            user_id: req.body.user_id,
            type: req.body.type,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            actual_check_in: req.body.actual_check_in,
            actual_check_out: req.body.actual_check_out,
            break_hours: req.body.break_hours,
            no_of_hours: req.body.no_of_hours,
            purpose: req.body.purpose,
            primary_status: req.body.primary_status,
            backup_status: req.body.backup_status,
            primary_approver: req.body.primary_approver,
            backup_approver: req.body.backup_approver,
            approver_note: req.body.approver_note,
            _token: req.body._token,
        }
        const overtime = await saveOvertime(newOvertime);

        return res.status(201).send(overtime);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}