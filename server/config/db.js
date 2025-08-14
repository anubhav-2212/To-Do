import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export const db=async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((res)=>{
        console.log('DataBase Connected')
    })
    .catch((error)=>{
        console.log('Error Connecting DataBase',error)
    })
}
