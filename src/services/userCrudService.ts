import { userData } from "../interface/userInterface";
import { User } from "../models/userSchema";

export const getAllUsers = () => {
    try {
        const users = User.find();
        return users;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const getUserById = (id : number) => {
    try {
        const user = User.findOne({id: id});
        return user;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const updateUserById = (id : number, data: userData) => {
    try {
        const result = User.findOneAndUpdate({id: id}, data);
        return result;
    } catch (error : any) {
        console.log(error.message);
    }
};

export const deleteUserById = (id : number) => {
    try {
        const result = User.findOneAndDelete({id: id});

        return result;
    } catch (error : any) {
        console.log(error.message);
    }
};

export const saveUser = (data : userData) => {
    try {
        const user = User.create(data);

        return user;
    } catch (error : any) {
        console.log(error.message);
    }
};