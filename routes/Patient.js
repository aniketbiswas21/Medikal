const express = require("express");
const passport = require("passport");

// * Controllers
const patient = require("../controllers/Patient");

// * Middleware
const { loginPatient, emailVerifiedPatient } = require("../middleware/patient");

// * API Endpoints -->
const router = express.Router();

// * Create new account
// * Done
router.post("/signUp", patient.createNewAccount);

// * Login User
// * Done
router.post("/login", (req, res, next) => {
  passport.authenticate("patientLogin", (err, user, info) => {
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

// * Get My Profile
// * Done
router.get("/profile",[ loginPatient ], patient.getMyProfile);

// * Verify Email ( Send link to email )
router.get("/profile/verifyEmail", [ loginPatient ], patient.verifyEmailLink);

// * Verify Email ( Click the link send to email )
router.get("/profile/verifyEmail/:token", patient.verifyEmail);

// * Get a single profile
// * Done
// ! Would restrict it to be used only by doctors and orgs
router.get("/get", [ emailVerifiedPatient ],patient.getPatient);

// * Edit Profile
router.post("/profile/edit", [ loginPatient ], patient.editProfile);

// * Change Password
// * Done
router.post("/profile/changePassword", [loginPatient] ,patient.changePassword);

// * Change Email
router.post("/profile/changeEmail", [ loginPatient ], patient.changeEmail);

// * Forgot Password ( Send link to email )
router.post("/forgotPassword", patient.forgotPasswordLink);

// * Forgot Password ( Set new password )
// * Done
router.post("/forgotPassword/:token", patient.forgotPassword);

// * API Endpoint end -->

module.exports = router;
