import mongoose from "mongoose";
import { overtimeData } from "../interface/overtimeInterface";

const overtimeSchema = new mongoose.Schema<overtimeData>(
    {
        user_id: {
            type: Number,
            required: true,
        },
        type: {
            type: Number,
            required: true,
        },
        start_date: {
            type: Date,
            required: true,
        },
        end_date: {
            type: Date,
            required: true,
        },
        start_time: {
            type: String,
            required: true,
        },
        end_time: {
            type: String,
            required: true,
        },
        actual_check_in: {
            type: String,
            required: true,
        },
        actual_check_out: {
            type: String,
            required: true,
        },
        break_hours: {
            type: Number,
            required: true,
        },
        no_of_hours: {
            type: Number,
            required: true,
        },
        purpose: {
            type: String,
            required: true,
        },
        primary_status: {
            type: Number,
            required: true,
        },
        backup_status: {
            type: Number,
            required: true,
        },
        primary_approver: {
            type: Number,
            required: true,
        },
        backup_approver: {
            type: Number,
            required: true,
        },
        approver_note: {
            type: String,
            required: true,
        },
        _token: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const Overtime = mongoose.model('Overtime', overtimeSchema);