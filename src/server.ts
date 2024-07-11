import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config";
import userRouter from "./router/userRouter";
import authRouter from "./router/authRouter";
import userAccountRouter from "./router/userAccountRouter";
import employeeRouter from "./router/employeeRouter";
import cors from "cors";
import bodyParser from "body-parser";

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    return res.status(234).send("Hello World!");
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use('/user', userRouter);
app.use('/userAccount', userAccountRouter);
app.use('/employee', employeeRouter);
app.use('/auth', authRouter);

mongoose.connect(mongoDBURL).then(() => {
    console.log("Mongo Database is connected");
    app.listen(PORT, () => {
        console.log(`Server is now starting at ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});

