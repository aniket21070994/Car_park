import mongoose from "mongoose";
const zoneSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        require:true
        
    },
    slots: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Slot',
    }],
});

const Zone = mongoose.model('Zone', zoneSchema);
export default Zone;
