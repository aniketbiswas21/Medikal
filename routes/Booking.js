const express = require("express");

// * Controllers
const booking = require("../controllers/Booking");

// * API Endpoints -->
const router = express.Router();

// * Create a new booking (Patient)
router.post("/new", booking.createBooking);

// * Toggle Confirm (org and doctor)
router.put("/confirm/:bookingId", booking.toggleConfirm);

// * Start Meeting (patient and doctor)
router.put("/start/:bookingId", booking.startMeeting);

// * End Meeting (doctor)
router.put("/end/:bookingId", booking.endMeeting);

// * Skip meeting (doctor)
router.put("/skip/:bookingId", booking.skipMeeting);

// * API Endpoints End -->

module.exports = router;
