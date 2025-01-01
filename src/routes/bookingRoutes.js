const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Define routes with their corresponding controller functions
router.post('/', bookingController.createBooking);
router.get('/', bookingController.getBookings);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;  // Ensure correct export of the router object