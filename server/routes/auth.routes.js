import express from "express";
import { loginUser, logout, registerUser } from "../controllers/auth.controller.js";
import { authMiddleware } from "../Middlewares/auth.middlewares.js";

const authroutes=express.Router();

authroutes.post('/register',registerUser)
authroutes.post('/login',loginUser)
authroutes.post('/logout',authMiddleware,logout)

export default authroutes