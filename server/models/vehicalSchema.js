import mongoose from "mongoose";
const vehicleSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    payment:{
        type:Number,
        require:true
    },
    licensePlate: { type: String, required: true, unique: true },
    vehicleType: { type: String, required: true }, // e.g., car, motorcycle, etc.
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;
