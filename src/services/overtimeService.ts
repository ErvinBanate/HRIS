import { overtimeData } from "../interface/overtimeInterface";
import { Overtime } from "../models/overtimeSchema";

export const getAllOvertime = () => {
    try {
        const overtimes = Overtime.find();
        return overtimes;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const getOvertimeById = (id: String) => {
    try {
        const overtime = Overtime.findById(id);
        return overtime;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const updateOvertimeById = (id: String, data: overtimeData) => {
    try {
        const result = Overtime.findByIdAndUpdate(id, data);
        return result;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const deleteOvertimeById = (id: String) => {
    try {
        const reuslt = Overtime.findByIdAndDelete(id);
        return reuslt;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const saveOvertime = (data: overtimeData) => {
    try {
        const overtime = Overtime.create(data);
        return overtime;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const getMonthlyOvertimeHours = async (id: number) => {
    try {
        const overtimes = await Overtime.find({user_id: id, primary_status: 1, type: 1});
        const monthlyHours: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let overtime of overtimes) {
            const month: number = overtime.start_date.getMonth();
            monthlyHours[month] += overtime.no_of_hours;
        }
        return monthlyHours;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const getMonthlyRestdayHours = async (id: number) => {
    try {
        const restdaysOvertime = await Overtime.find({user_id: id, primary_status: 1, type: 2});
        const monthlyHours: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let restdayOvertime of restdaysOvertime) {
            const month: number = restdayOvertime.start_date.getMonth();
            monthlyHours[month] += restdayOvertime.no_of_hours;
        }
        return monthlyHours;
    } catch (error: any) {
        console.log(error.message); 
    }
}