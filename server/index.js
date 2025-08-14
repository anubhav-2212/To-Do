import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
import {db} from "./config/db.js"
import authroutes from "./routes/auth.routes.js";
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express();
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cors())
app.use(cookieParser());

const PORT=process.env.PORT||4000;
app.get('/',(req,res)=>{
    console.log("Server Running")
})
app.use('/api/v1/user',authroutes)

app.listen(PORT,()=>{
    console.log(`Server Running at Port ${PORT}`)
})
db();