import mongoose from 'mongoose';

// Define the slot schema
const slotSchema = new mongoose.Schema({
    isOccupied: { type: Boolean, default: false },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null, // Null if the slot is not booked
    },
    vehicle: { // Corrected spelling from 'vehical' to 'vehicle'
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        default: null, // Null if the slot is not booked
    },
    bookedAt: { type: Date, default: null }, // Date when the slot was booked
    releaseAt: { type: Date, default: null }, // Release date
});

// Pre-save middleware to check for release time
slotSchema.pre('save', function (next) {
    console.log('Middleware triggered:', this);
    if (this.releaseAt< new Date()) {
        this.isOccupied = false;
        this.bookedBy = null;
        this.vehicle = null;
        this.bookedAt = null;
        this.releaseAt = null;
    }
    next();
});


// Create the Slot model
const Slot = mongoose.model('Slot', slotSchema);
export default Slot;
