import { userAccountData } from "../interface/userAccountInterface";
import { UserAccount } from "../models/userAccountSchema";

export const getAllUserAccounts = () => {
    try {
        const userAccounts = UserAccount.find();
        return userAccounts;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const getUserAccountById = (id: String) => {
    try {
        const userAccounts = UserAccount.findById(id);
        return userAccounts;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const updateUserAccountById = (id: String, data: userAccountData) => {
    try {
        const result = UserAccount.findByIdAndUpdate(id, data);
        return result;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const deleteUserAccountById = (id: String) => {
    try {
        const result = UserAccount.findByIdAndDelete(id);
        return result;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const saveUserAccount = (data: userAccountData) => {
    try {
        const userAccount = UserAccount.create(data);
        return userAccount;
    } catch (error: any) {
        console.log(error.message);
    }
}