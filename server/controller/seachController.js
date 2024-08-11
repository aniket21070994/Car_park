import City from "../models/citySchema.js";
import Slot from "../models/slotSchema.js"; 
import Zone from "../models/zoneSchema.js";


export const searchByCity = async (req, res) => {
    const { city } = req.params;
    try {
        const currentCity = await City.findOne({ name: city }); // Use findOne for a single match
        if (currentCity) {
            return res.status(200).json({ // Use 200 status for successful retrieval
                message: "Service available",
                success: true, // Corrected typo from "sucesse" to "success"
                currentCity
            });
        }
        return res.status(404).json({ // Use 404 for not found
            message: "Service not available",
            success: false,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ // Handle server errors
            message: "Internal server error",
            success: false,
            error: error.message
        });
    }
};

export const searchBySlot = async (req, res) => {
    const { zoneId } = req.params; 
    try {
        
        
        const slots = await Zone.findById(zoneId).populate("slots")
        console.log(slots);
        if (slots && slots.length > 0) { // Check if slots array is not empty
            return res.status(200).json({
                message: "Slots details",
                success: true,
                slots
            });
        } else {
            return res.status(404).json({ // Use 404 for not found
                message: "Slots not found",
                success: false
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ // Handle server errors
            message: "Internal server error",
            success: false,
            error: error.message
        });
    }
};
