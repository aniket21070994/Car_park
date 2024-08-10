import mongoose, { mongo } from "mongoose";


const vehicalSchema=new mongoose.Schema({
   uid:{
    type:String,
    require:true
   },
    licence:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    pid:{
        type:String,
        required:true
    },
    start:{
        type:Date,
        required:true
    },
    end: {
        type:Date,
        required:true
    },  
})
export const vehical=mongoose.model("vehical",vehicalSchema)