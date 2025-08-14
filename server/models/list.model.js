import mongoose from "mongoose";

const listSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    }
    ,description:{
        type:String,
        required:true
    },
    user:[{
        type:mongoose.Types.ObjectId,
        ref:"List"
    }]

},{
    timestamps:true,
})

export const List=mongoose.model('List',listSchema)
