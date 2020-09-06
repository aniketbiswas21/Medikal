const express = require("express");

// * Controllers
const history = require("../controllers/History");

// * API Endpoints -->
const router = express.Router();

// * Create new history
router.post("/new", history.createHistory);

// * Edit history
router.put("/edit/:historyId", history.editHistory);

// * Get all histories
router.get("/all", history.allHistories);

// * Get histories of patient
router.get("/patient", history.patientHistories);

// * Get histories of doctor
router.get("/doctor", history.doctorHistories);

// * API Endpoints End -->

module.exports = router;
