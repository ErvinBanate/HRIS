import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        user_id: {
            type: Number,
            ref: "User",
            required: true,
        },
        employee_id: {
            type: String,
            required: true,
        },
        employee_number: {
            type: String,
            required: true,
        },
        company_branch_id: {
            type: Number,
            required: true,
        },
        department_id: {
            type: Number,
            required: true,
        },
        job_title_id: {
            type: Number,
            required: true,
        },
        team_id: {
            type: Number,
            required: true,
        },
        data_entry: {
            type: Date,
            required: true,
        },
        resignation_date: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const Employee = mongoose.model('Employee', employeeSchema);