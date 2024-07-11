import {Request, Response} from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserByEmail } from "../services/userService";

const JWT_TOKEN = "masdq123wepoteincas24bvuiehg912/.<1?[a2d]3445asdawcz\}{bcxs4587";

export const login = async (req: Request, res: Response) => {
    const {email,password} = req.body;
    
    const user = await getUserByEmail(email);

    if(!user){
        return res.json({message: "Email is not Registered"});
    }   
    const userPassword: string = user.password.toString();
    const validPassword = await bcrypt.compare(password, userPassword);
    
    if(validPassword){
        const token = jwt.sign({}, JWT_TOKEN);

        if(res.status(200)){
            return res.json({status:"success", data:token});
        }else{
            return res.json({error: "error"});
        }
    }

    res.json({status:"error", error: "Invalid Password"});
}