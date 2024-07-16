import mongoose from "mongoose";
import { shiftsData } from "../interface/shiftsInterface";

const shiftsSchema = new mongoose.Schema<shiftsData>(
    {
        user_id: {
            type: Number,
            ref: "User",
            required: true,
        },
        type: {
            type: Number,
            required: true,
        },
        new_shift_type: {
            type: Number,
            required: true,
        },
        date: {
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
        actual_check_in: {
            type: String,
            required: true,
        },
        actual_check_out: {
            type: String,
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
        primary_status: {
            type: Number,
            required: true,
        },
        backup_status: {
            type: Number,
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
        primary_approver: {
            type: Number,
            required: true,
        },
        backup_approver: {
            type: Number,
            required: true
        },
        approver_note: {
            type: String,
            required: true,
        },
        onsite: {
            type: Boolean,
            required: true,
        },
        _token: {
            type: String,
            required: true,
        },
        approved_by: {
            type: Number,
            required: true,
        },
        approved_at: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const Shifts = mongoose.model('Shifts', shiftsSchema);