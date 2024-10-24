import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { dbConnection } from './database/dbConnection.js';
import cors from 'cors';
import messageRouter from './router/messageRouter.js'
import {errorMiddleware} from './middlewares/errorMiddleware.js'
import userRouter from './router/userRouter.js'
import appointmentRouter from './router/appointmentRouter.js'
import axios from 'axios'

const _dirname = path.resolve();

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin:["https://lawsuit-rambos-projects-a1065a11.vercel.app","https://legal-sathi-dashboard.vercel.app"],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
    })
);

app.use("/api/v1/message",messageRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/appointment",appointmentRouter);

app.use(express.static(path.join(_dirname, "/client/dist")))
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"client","dist","index.html"));
});

dbConnection();




app.use(errorMiddleware);
export default app;
