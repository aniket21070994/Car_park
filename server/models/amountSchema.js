import mongoose from "mongoose";
import { type } from "os";
const amountSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId,
      ref:"user"
     },
    vehicalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vehical', },

    payment:{
            type:Number,
            require:true
        },
});

const Amount = mongoose.model('Amount', amountSchema);
export default Amount;
