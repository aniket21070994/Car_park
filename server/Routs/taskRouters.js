import express from 'express';

import { bookSlot } from '../controller/bookingController.js';
import { searchByCity,searchBySlot } from '../controller/seachController.js';
import { Register,registerVehical } from '../controller/userController.js';
const router = express.Router();

// Booking route
router.post('/book', bookSlot); // Endpoint to book a slot

// Search routes
router.get('/search/city/:city', searchByCity); // Endpoint to search by city
router.get('/search/slot/:zoneId', searchBySlot); // Endpoint to search by slot
//User registration
router.post('/register-user',Register ); 
// Vehicle registration route
router.post('/register-vehicle', registerVehical); // Endpoint to register a vehicle

export default router;
