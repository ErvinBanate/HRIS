import { workScheduleData } from "../interface/workScheduleInterface";
import { WorkSchedule } from "../models/workscheduleSchema"

export const getAllWorkSchedule = () => {
    try {
        const workSchedules = WorkSchedule.find();
        return workSchedules;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const getWorkScheduleById = (id: String) => {
    try {
        const workSchedule = WorkSchedule.findById(id);
        return workSchedule;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const updateWorkScheduleById = (id: String, data: workScheduleData) => {
    try {
        const reuslt = WorkSchedule.findByIdAndUpdate(id, data);
        return reuslt;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const deleteWorkScheduleById = (id: String) => {
    try {
        const reuslt = WorkSchedule.findByIdAndDelete(id);
        return reuslt;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const saveWorkSchedule = (data: workScheduleData) => {
    try {
        const workSchedule =  WorkSchedule.create(data);
        return workSchedule;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const getWorkScheduleByUserId = (id: number) => {
    try {
        const workSchedule = WorkSchedule.find({user_id: id});
        return workSchedule;
    } catch (error: any) {
        console.log(error.message);
    }
}