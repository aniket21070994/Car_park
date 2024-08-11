import mongoose from "mongoose";
const citySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    zones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Zone',
    }],
});

const City = mongoose.model('City', citySchema);
export default City;
