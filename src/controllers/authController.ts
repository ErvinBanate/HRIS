import {Request, Response} from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserByEmail } from "../services/userService";

export const login = async (req: Request, res: Response) => {

    const JWT_SECRET = process.env.JWT_SECRET || '';

    const {email,password} = req.body;
    
    const user = await getUserByEmail(email);
    
    if(!user){
        return res.json({errorEmail: "Email is not Registered"});
    }   
    const userPassword: string = user.password.toString();

    const validPassword = await bcrypt.compare(password, userPassword);
    
    if(validPassword){
        const token = jwt.sign({username: email}, JWT_SECRET, {expiresIn: '1h'});
        res.cookie('token', token, {httpOnly: true, maxAge: 360000});

        if(res.status(200)){
            return res.json({status:true, message:"Login Successfully!"});
        }
    }

    res.json({status:false, errorPass: "Invalid Password"});
}

export const logout = async (req: Request, res: Response) => {
    res.clearCookie('token');
    return res.json({ status: true});
}