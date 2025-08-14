import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
        
    },
    password:{
        type:String,
        required:true
    },
    list:[{
        type:mongoose.Types.ObjectId,
        ref:"List",
    }],
},{
    timestamps:true
})

export const User=mongoose.model('User',userSchema)