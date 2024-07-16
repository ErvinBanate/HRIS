import { shiftsData } from "../interface/shiftsInterface";
import { Shifts } from "../models/shiftsSchema"

export const getAllShifts = () => {
    try {
        const shifts = Shifts.find();
        return shifts;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const getShiftById = (id: string) => {
    try {
        const shift = Shifts.findById(id);
        return shift;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const updateShiftById = (id: string, data: shiftsData) => {
    try {
        const result = Shifts.findByIdAndUpdate(id, data);
        return result;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const deleteShiftById = (id: string) => {
    try {
        const result = Shifts.findByIdAndDelete(id);
        return result;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const saveShift = (data: shiftsData) => {
    try {
        const shift = Shifts.create(data);
        return shift;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const getShiftByUserId = (id: number) => {
    try {
        const shifts = Shifts.find({user_id: id});
        return shifts;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const getMonthlyShiftHours = async (id: number) => {
    try {
        const shifts = await Shifts.find({user_id: id, primary_status: 1});
        const monthlyHours: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let shift of shifts) {
            const month: number = shift.date.getMonth();
            monthlyHours[month] += shift.shift_length;
        }
        return monthlyHours;
    } catch (error: any) {
        console.log(error.message);
    }
}