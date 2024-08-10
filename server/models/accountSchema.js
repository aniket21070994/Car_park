import mongoose, { mongo } from "mongoose";
import { type } from "os";


const accountSchema=new mongoose.Schema({
    
uid:{
    type:String,
    require:true
},
amount:{
     type:Number,
     require:true
}
   
   
   
   

})
export const Account=mongoose.model("Account",accountSchema)