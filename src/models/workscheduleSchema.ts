import mongoose from "mongoose";
import { workScheduleData } from "../interface/workScheduleInterface";

const workScheduleSchema = new mongoose.Schema<workScheduleData>(
    {
        user_id: {
            type: Number,
            required: true,
        },
        type: {
            type: Number,
            required: true,
        },
        effective_date: {
            type: Date,
            required: true,
        },
        check_in: {
            type: String,
            required: true,
        },
        check_out: {
            type: String,
            required: true,
        },
        auto_in_out: {
            type: Boolean,
            required: true,
        },
        between_start: {
            type: String,
            required: true,
        },
        between_end: {
            type: String,
            required: true,
        },
        shift_length: {
            type: Number,
            required: true,
        },
        paid_hours: {
            type: Number,
            required: true,
        },
        monday: {
            type: Boolean,
            required: true,
        },
        tuesday: {
            type: Boolean,
            required: true,
        },
        wednesday: {
            type: Boolean,
            required: true,
        },
        thursday: {
            type: Boolean,
            required: true,
        },
        friday: {
            type: Boolean,
            required: true,
        },
        saturday: {
            type: Boolean,
            required: true,
        },
        sunday: {
            type: Boolean,
            required: true,
        },
        onsite: {
            type: Boolean,
            required: true,
        },
        created_by: {
            type: Number,
            required: true,
        },
        updated_by: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const WorkSchedule = mongoose.model('WorkSchedule', workScheduleSchema);