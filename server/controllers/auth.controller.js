import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const registerUser=async(req,res)=>{
    const{name,email,password}=req.body;
    if(!name||!email||!password){
        return res.status(400).json({
            message:"Credentials Missing"
        })
    }
    try {
        const existingUser=await User.findOne({
            email
        })
        if(existingUser){
            return res.status(400).json({
                message:"User Already exist"
            })
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=await  User.create({
            name:name,
            email:email,
            password:hashedPassword
        })
          const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET,{
        expiresIn:"24h"
    })
    console.log(token)
    const cookieOptions={
        httpOnly:true,
        secure:true,
        maxAge:24*60*60*1000
    }
    res.cookie("token",token,cookieOptions)
        res.status(201).json({
            message:"User Register Successfully",
            user:{
                id:newUser._id,
                name:newUser.name,
                email:newUser.email,

            }
        })
        
        
    } catch (error) {
        console.log('Error Creating User',error)
        res.status(500).json({
            message:"Server Error"
        
    })
}
}
export const loginUser=async(req,res)=>{
    const{email,password}=req.body;
    if(!email||!password){
        return res.status(401).json({
            message:"Credentials Missing"
        })
    }
    console.log(email,password)
    try {
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message:"User Not Registered ,Please SignIn First",

        })


    }
    console.log(user)
    const isPasswordMatched=await bcrypt.compare(password,user.password);
    
    if(!isPasswordMatched){
        return res.status(400).json({
            message:"Wrong Credentials"
        })
    }
    console.log(isPasswordMatched)
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{
        expiresIn:"24h"
    })
    console.log(token)
    const cookieOptions={
        httpOnly:true,
        secure:true,
        maxAge:24*60*60*1000
    }
    res.cookie("token",token,cookieOptions)
    res.status(200).json({
        message:"User Logged In",
        token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        }
    })

 }
  catch (error) {
    console.log('Error Logging User',error)
    res.status(500).json({
        message:"Internal Server Error"
    })

        
    }
}
export const logout=async(req,res)=>{
    try {
        res.cookie("token","",{})
        res.status(200).json({
            message:"User Logged Out"
        })
        
    } catch (error) {
         console.log('Error LoggingOut User',error)
    res.status(500).json({
        message:"Internal Server Error"
    })
        
    }
}
export const getMe=async(req,res)=>{
    try {
        const user=await User.findById(req.user.id,select(--password))
        console.log(user)
        
    } catch (error) {
        
    }
}
