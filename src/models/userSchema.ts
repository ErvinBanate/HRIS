import mongoose from "mongoose";
import { userModel } from "../interface/userInterface";

const userSchema = new mongoose.Schema<userModel>(
    {
        id: {
            type: Number,
            required: true,
        },
        parent_id: {
            type: Number,
            required: true,
        },
        shortid: {
            type: String,
            required: true,
        },
        first_name: {
            type: String,
            required: true,
        },
        middle_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        birthdate: {
            type: Date,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        present_address: {
            type: String,
            required: true,
        },
        permanent_address: {
            type: String,
            required: true,
        },
        nationality: {
            type: Number,
            required: true,
        },
        marital_status: {
            type: String,
            required: true,
        },
        contact_number: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        status: {
            type: Number,
            required: true,
        },
        user_role: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
            required: true,
        },
        reset_token: {
            type: String,
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

export const User = mongoose.model('User', userSchema);