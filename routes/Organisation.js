const express = require("express");

// * Controllers
const organisation = require("../controllers/Organisation");

// * Middleware
// const { loginOrganisation } = require("../middleware/Organisation"); //!

// * API Endpoints -->
const router = express.Router();

// * Login User
// * Done
router.post("/login", (req, res, next) => {
  passport.authenticate("organisationLogin", (err, user, info) => {
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

// * Get all Organisation
// * Done
router.get("/all", organisation.getAllOrganisation);

// * get Organisation with given id
// * Done
router.get("/info/:id", organisation.getOrganisationById);

// * Create new Organisation
// * Done
router.post("/create", organisation.createNewOraganisation);

// * Edit Organisation Details
// ! check logged in
router.put("/edit", organisation.editOrganisationDetails);

// * Edit fields
// ! check logged in
router.put("/editFields", organisation.editOrganisationFields);

// * Change password
// * Done
router.post("/changePassword", organisation.changePassword);

// * Forgot Password ( Send link to email )
router.post("/forgotPassword", organisation.forgotPasswordLink);

// * Forgot Password ( Set new password )
// * Done
router.post("/forgotPassword/:token", organisation.forgotPassword);

// * Verify doctor
// ! check logged in
router.post("/verify", organisation.verifyDoctor);

// * get all unverified doctors for that organisation
// ! check logged in
router.get("/unverified", organisation.getUnverifiedDoctors);

// * API Endpoint end -->

module.exports = router;
