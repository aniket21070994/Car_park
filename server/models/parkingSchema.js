import mongoose, { mongo } from "mongoose";


const parkingSchema=new mongoose.Schema({
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
    slot:{
        type:Number,
        required:true
    },

    start:{
        type:Date,
        required:true
    },
    end: {
        type:Date,
        required:true
    }
    
    
    
    


   
   
   
   

})
export const parking=mongoose.model("parking",parkingSchema)