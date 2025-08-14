import {User} from "../models/user.model.js";
import jwt from "jsonwebtoken"

export const authMiddleware=async(req,res,next)=>{
    console.log(req.cookies)
  
 

try {
       const token=req.cookies.token
    console.log("token is",token?"Yess":"No")

    if(!token){
        return res.status(400).json({
            Message:"User Not verified"
        })
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    console.log(decoded)
    if(!decoded){
        return res.status(401).json({
            message:"Authentication Failed"
        })
    }
    req.user=decoded;
    next();
}
    
catch (error) {
    console.log(error)
    res.status(500).json({
        message:"Internal Server Error"
    })
    
}
}