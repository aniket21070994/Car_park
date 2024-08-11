import Slot from '../models/slotSchema.js'; // Corrected import path


export const bookSlot = async (req, res) => {
    const { slotId, userId, vehicleId, start, end } = req.body;

    try {
        const slot = await Slot.findById(slotId)

        // Check if the slot exists and is not occupied
        if (!slot) {
            return res.status(404).json({ 
                message: "Slot not found",
                success: false
            });
        }

        if (slot.isOccupied) {
            return res.status(409).json({
                message: "Slot is already booked",
                success: false
            });
        }

        // Update the slot's occupancy and booking details
        slot.isOccupied = true; // Mark the slot as occupied
        slot.bookedBy = userId; // Associate the user who booked it
        slot.vehicle = vehicleId; // Associate the vehicle
        slot.bookedAt = start; // Set the bookedAt time
        slot.releaseAt = end; // Set releaseAt to the specified end time

        await slot.save(); // Save the updated slot

        console.log('Slot booked successfully:', slot);
        return res.status(200).json({ // Return success response
            message: "Slot booked successfully",
            success: true,
            slot // Optionally return the updated slot
        });
    } catch (error) {
        console.error('Error booking slot:', error);
        return res.status(500).json({ // Handle server errors
            message: "Internal server error",
            success: false,
            error: error.message
        });
    }
};
