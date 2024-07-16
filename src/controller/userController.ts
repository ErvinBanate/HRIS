import { Request, Response } from "express";
import { deleteUserById, getAllUsers, getLastId, getUserById, getUserEmployeesName, saveUser, updateUserById } from "../services/userService";
import { userData } from "../interface/userInterface";

export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();

        return res.status(200).json({
            count: users?.length,
            data: users,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const numberId = Number(id);
        const user = await getUserById(numberId);

        return res.status(200).json(user);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const updateUserByIdController = async (req: Request, res: Response) => {
    try {
        if (!req.body.parent_id || !req.body.shortid || !req.body.first_name || !req.body.middle_name || !req.body.last_name || !req.body.gender || !req.body.birthdate || !req.body.avatar || !req.body.present_address || !req.body.permanent_address || !req.body.nationality || !req.body.marital_status || !req.body.contact_number || !req.body.email || !req.body.username || !req.body.password || !req.body.status || !req.body.user_role || !req.body.notes || !req.body.reset_token) {
            return res.status(400).send({
                message: "Please fill up all required"
            });
        }
        const { id } = req.params;
        const numberId: number = Number(id);
        const result = await updateUserById(numberId, req.body);

        if (!result) {
            return res.status(400).send({ message: "User not Found"});
        }
        return res.status(200).send({ message: "User update success" });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const deleteUserByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const numberId = Number(id);
        const result = await deleteUserById(numberId);

        if (!result) {
            return res.status(400).send({ message: "User not Found"});
        }
        return res.status(200).send({ message: "User delete success"});
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const postUserController = async (req: Request, res: Response) => {
    try {
        if (!req.body.parent_id || !req.body.shortid || !req.body.first_name || !req.body.middle_name || !req.body.last_name || !req.body.gender || !req.body.birthdate || !req.body.avatar || !req.body.present_address || !req.body.permanent_address || !req.body.nationality || !req.body.marital_status || !req.body.contact_number || !req.body.email || !req.body.username || !req.body.password || !req.body.status || !req.body.user_role || !req.body.notes || !req.body.reset_token) {
            return res.status(400).send({
                message: "Please fill up all required"
            });
        }
        const users = await getLastId();
        const lastUserId: number = users ? users?.id : 0;
        const newUser: userData = {
            id: lastUserId+1,
            parent_id: req.body.parent_id,
            shortid: req.body.shortid,
            first_name: req.body.first_name,
            middle_name: req.body.middle_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            birthdate: req.body.birthdate,
            avatar: req.body.avatar,
            present_address: req.body.present_address,
            permanent_address: req.body.permanent_address,
            nationality: req.body.nationality,
            marital_status: req.body.marital_status,
            contact_number: req.body.contact_number,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            status: req.body.status,
            user_role: req.body.user_role,
            notes: req.body.notes,
            reset_token: req.body.reset_token,
            created_by: req.body.created_by,
            updated_by: req.body.updated_by,
        }
        const user = await saveUser(newUser);

        return res.status(201).send(user);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const employeeNamesController = async (req: Request, res: Response) => {
    try {
        const employees = await getUserEmployeesName();

        return res.status(200).json(employees);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}