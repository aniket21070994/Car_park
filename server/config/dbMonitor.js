
import Slot from "../models/slotSchema.js" // Adjust the import path as needed

// Function to check and update slots
export const checkAndUpdateSlots = async () => {
    try { 
        console.log(new Date())
        const now = new Date();
        const slotsToUpdate = await Slot.find({releaseAt: { $lt: now }});

        for (const slot of slotsToUpdate) {
            // This will trigger the pre-save middleware
            await slot.save();
        }

        console.log(`Checked and updated slots at ${now}`);
    } catch (error) {
        console.error('Error checking and updating slots:', error);
    }
};

// Periodically check every minute (or adjust the interval as needed)

