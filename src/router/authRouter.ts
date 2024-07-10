import express from "express";
import bcrypt from "bcrypt";
import { getUserByEmail } from "../services/userService";


const router = express.Router();

router.post('/login', async (req,res) => {
    const {email,password} = req.body;
    const user = await getUserByEmail(email);

    if(!user){
        return res.json({message: "Email is not Registered"});
    }   
    const validPassword = await bcrypt.compare(password, user.password.toString());
    console.log('valid: ',validPassword);
    
    return res.status(201).send(validPassword);
})

export default router;