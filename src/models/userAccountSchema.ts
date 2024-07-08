import mongoose from "mongoose";
import { User } from "./userSchema";

const userAccountSchema = new mongoose.Schema(
    {
        user_id: {
            type: Number,
            ref: "User",
            required: true,
        },
        sss_number: {
            type: String,
            required: true,
        },
        pagibig_number: {
            type: String,
            required: true,
        },
        tin_number: {
            type: String,
            required: true,
        },
        philhealth_number: {
            type: String,
            required: true,
        },
        bank_account: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const UserAccount = mongoose.model('UserAccount', userAccountSchema);