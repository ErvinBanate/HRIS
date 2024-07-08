import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config";
import userRouter from "./router/userRouter";
import userAccountRouter from "./router/userAccountRouter";
import employeeRouter from "./router/employeeRouter";
import bodyParser from "body-parser";

const app = express();

app.get('/', (req, res) => {
    return res.status(234).send("Hello World!");
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use('/user', userRouter);
app.use('/userAccount', userAccountRouter);
app.use('/employee', employeeRouter);

mongoose.connect(mongoDBURL).then(() => {
    console.log("Mongo Database is connected");
    app.listen(PORT, () => {
        console.log(`Server is now starting at ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});

