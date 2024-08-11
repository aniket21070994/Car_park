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
    // Check if releaseAt exists and if it is less than the current date
    if (this.releaseAt && this.releaseAt < new Date()) {
        this.isOccupied = false; // Set isOccupied to false if the releaseAt time has passed
        this.bookedBy = null;    // Optionally clear bookedBy
        this.vehicle = null;      // Optionally clear vehicle
        this.bookedAt = null;     // Optionally clear bookedAt
        this.releaseAt = null;    // Optionally clear releaseAt
    }
    next(); // Proceed with the save operation
});

// Create the Slot model
const Slot = mongoose.model('Slot', slotSchema);
export default Slot;
