import { userData, userModel } from "../interface/userInterface";
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

export const getUserByEmail = (email : string) => {
    try {
        const user = User.findOne({email: email});
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

export const saveUser = (data: userData) => {
    try {
        const user = User.create(data);
        return user;
    } catch (error : any) {
        console.log(error.message);
    }
};

export const getLastId = () => {
    try {
        const user = User.findOne().sort({"id": -1}).limit(1);
        return user;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const getUserEmployeesName = () => {
    try {
        const employees = User.find().select({first_name: 1, _id: 0});
        return employees;
    } catch (error: any) {
        console.log(error.message + '3');
    }
}