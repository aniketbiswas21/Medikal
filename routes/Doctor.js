const express = require("express");

// * Controllers
const doctor = require("../controllers/Doctor");
const { updateTimetable, getTimetable } = require("../controllers/Timetable");

// * Middleware
const { loginDoctor } = require("../middleware/Doctor");

// * API Endpoints -->
const router = express.Router();

// * Create new Doctor
// * Done
router.post("/create", doctor.addNewDoctor);

// * Get profile
// * Done
router.get("/profile", doctor.getDoctorProfile);

// * Get all doctors
// * Done
router.get("/all", doctor.getAllDoctors);

// * Get doctor with given id
// * Done
router.get("/:id", doctor.getDoctorById);

// * Edit doctor profile
// * Done
router.put("/edit", doctor.editDoctorProfile);

// * Change password
// * Done
router.post("/changePassword", doctor.changePassword);

// * Change slot active status
router.put("/updateTimetable", updateTimetable);

// * get timetable showing free slots
router.get("/getTimetable/:id", getTimetable);

// * Forgot Password ( Send link to email )
router.post("/forgotPassword", doctor.forgotPasswordLink);

// * Forgot Password ( Set new password )
// * Done
router.post("/forgotPassword/:token", doctor.forgotPassword);

// * Login Doctor
// * Done
router.post("/login", (req, res, next) => {
  passport.authenticate("doctorLogin", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json(info);

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res
        .status(200)
        .json({ message: "Login Successfull.", User: user });
    });
  })(req, res, next);
});

// * API Endpoint end -->

module.exports = router;
