import { Request, Response } from "express";
import { deleteWorkScheduleById, getAllWorkSchedule, getWorkScheduleById, getWorkScheduleByUserId, saveWorkSchedule, updateWorkScheduleById } from "../services/workScheduleService";
import { workScheduleData } from "../interface/workScheduleInterface";

export const getAllWorkSchedulesController = async (req: Request, res: Response) => {
    try {
        const workSchedules = await getAllWorkSchedule();

        return res.status(200).json({
            count: workSchedules?.length,
            data: workSchedules,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const getWorkScheduleByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const workSchedule = await getWorkScheduleById(id);

        return res.status(200).json(workSchedule);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const updateWorkScheduleByIdController = async (req: Request, res: Response) => {
    try {
        if (!req.body.user_id || !req.body.type || !req.body.effective_date || !req.body.check_in || !req.body.check_out || !req.body.between_start || !req.body.between_end || !req.body.shift_length || !req.body.paid_hours || !req.body.created_by || !req.body.updated_by) {
            return res.status(400).send({
                message: "Please fill up all required"
            });
        }
        const { id } = req.params;
        const result = await updateWorkScheduleById(id, req.body);

        if (!result) {
            return res.status(400).send({ message: "Work Schedule not found"});
        }
        return res.status(200).send({ message: "WorkSchedule update success"});
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
}

export const deleteWorkScheduleByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await deleteWorkScheduleById(id);

        if (!result) {
            return res.status(400).send({ message: "Work Schedule not found" });
        }
        return res.status(200).send({ message: "Work Schedule delete sucess"});
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const postWorkScheduleController = async (req: Request, res: Response) => {
    try {
        if (!req.body.user_id || !req.body.type || !req.body.effective_date || !req.body.check_in || !req.body.check_out || !req.body.between_start || !req.body.between_end || !req.body.shift_length || !req.body.paid_hours || !req.body.created_by || !req.body.updated_by) {
            return res.status(400).send({
                message: "Please fill up all required"
            });
        }
        const newWorkSchedule: workScheduleData = {
            user_id: req.body.user_id,
            type: req.body.type,
            effective_date: req.body.effective_date,
            check_in: req.body.check_in,
            check_out: req.body.check_out,
            auto_in_out: req.body.auto_in_out,
            between_start: req.body.between_start,
            between_end: req.body.between_end,
            shift_length: req.body.shift_length,
            paid_hours: req.body.paid_hours,
            monday: req.body.monday,
            tuesday: req.body.tuesday,
            wednesday: req.body.wednesday,
            thursday: req.body.thursday,
            friday: req.body.friday,
            saturday: req.body.saturday,
            sunday: req.body.sunday,
            onsite: req.body.onsite,
            created_by: req.body.created_by,
            updated_by: req.body.updated_by,
        };
        const workSchedule = await saveWorkSchedule(newWorkSchedule);
    
        return res.status(201).send(workSchedule);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const getWorkScheduleByUserIdController = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params;
        const numberUserId = Number(user_id);
        const workSchedule = await getWorkScheduleByUserId(numberUserId);

        if (!workSchedule) {
            return res.status(400).send({ message: "Work Schedule not found"});
        }
        return res.status(200).json(workSchedule);
    } catch (error: any) {
        console.log(error.message);
    }
}