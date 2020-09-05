// * NPM Packages
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

// * Models
const Organisation = require("../models/Organisation");

// * Utils
const validators = require("../validationSchemas/Organisation");
const { omit } = require("lodash");
// const smtpTransport = require("../config/emailSetup");

// * Controllers -->

// * Add new Organisation
exports.createNewOraganisation = async (req, res) => {
  try {
    const { value, error } = validators.newOrganisation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if (value.password !== value.confirmPassword)
      return res.status(400).send("Passwords do not match.");
    const existingOrganisation = await Organisation.findOne({
      email: value.email,
    });
    if (existingOrganisation)
      return res
        .status(400)
        .send("Organisation with given email already exists.");

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(value.password, salt);
    req.body = omit(value, ["password", "confirmPassword", "contactNumber"]);
    const newOrganisation = new Organisation({
      ...req.body,
      password,
      dateCreated: new Date(),
      contactNumber: Number(value.contactNumber),
      active: true,
    });
    await newOrganisation.save();
    res.send(newOrganisation);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server denied request");
  }
};

// * Get all Organisation
exports.getAllOrganisation = async (req, res) => {
  try {
    const allOrganisation = await Organisation.find();
    res.send(allOrganisation);
  } catch (err) {
    res.status(400).send("Server denied request");
  }
};

// * Get doctor with given id
exports.getOrganisationById = async (req, res) => {
  try {
    if (!req.params || !req.params._id)
      return res.status(400).send("No id provided");
    const organisation = await Organisation.findById(req.params.id).select([
      "-password",
      "-resetToken",
      "-resetTokenValid",
    ]);
    if (!organisation) return res.status(400).send("No organisation found");
    res.send(organisation);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server denied request");
  }
};

// * Edit Organisation details
exports.editOrganisationDetails = async (req, res) => {
  try {
    const { value, error } = validators.editOrganisationDetails(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    req.user = { id: "5f4ff115a6888556645a2e6f" }; //! just for testing
    const { id } = req.user;
    req.body = omit(value, ["contactNumber"]);

    const newOrganisation = {
      ...req.body,
    };
    if (value.contactNumber)
      newOrganisation.contactNumber = Number(value.contactNumber);

    const organisation = await Organisation.findByIdAndUpdate(
      { _id: id },
      newOrganisation,
      { new: true }
    );
    if (!organisation) return res.status(400).send("No organisation found");
    res.send(organisation);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server denied request");
  }
};
// * Edit editOrganisation Fields
exports.editOrganisationFields = async (req, res) => {
  try {
    const { value, error } = validators.editOrganisationFields(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    req.user = { id: "5f4ff115a6888556645a2e6f" }; //! just for testing
    const organisation = await Organisation.findByIdAndUpdate(
      req.user.id,
      { fields: req.body.fields },
      { new: true }
    );
    if (!organisation) return res.status(400).send("No organisation found");
    res.send(organisation);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server denied request");
  }
};

// * Change Password
// * Done
exports.changePassword = async (req, res) => {
  try {
    const { value, error } = validators.changePassword(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if (value.password !== value.confirmPassword)
      return res.status(400).send("Passwords do not match.");

    const organisation = await Organisation.findById(req.user._id);

    const passwordMatch = await bcrypt.compare(
      value.oldPassword,
      organisation.password
    );

    if (!passwordMatch) return res.status(400).send("Incorrect Password.");

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(value.password, salt);

    organisation.password = newPassword;
    await organisation.save();

    res.send(organisation);
  } catch (error) {
    console.log(error);
    res.status(400).send("Server denied request.");
  }
};

// * Forgot Password ( Send link to email )
exports.forgotPasswordLink = async (req, res) => {
  try {
    let organisation = await Organisation.findOne({
      email: req.body.email,
    });
    if (!organisation) return res.status(400).send("organisation not found.");

    const buf = await crypto.randomBytes(25);
    const resetToken = buf.toString("hex");
    const dt = new Date();

    organisation.resetToken = resetToken;
    organisation.resetTokenValid = dt.setMinutes(dt.getMinutes() + 15); // 15 mins

    await organisation.save();

    var info = await smtpTransport.sendMail({
      to: `${organisation.email}`,
      from: `"Medic" <${process.env.EMAIL_ID}>`,
      subject: "Link for Reset Password.",
      text: `Click the link to reset your accounts password.\n`,
      html: `<a href="http://localhost:5000/api/organisation/forgotPassword/${resetToken}">Verify Email</button>`, //!EDIT EMAIL
    });

    console.log("Email sent :- ", info);

    res
      .status(200)
      .send(
        `Email has been sent to ${organisation.email} with further instructions. ${req.originalUrl}`
      );
  } catch (error) {
    console.log(error);
    res.status(400).send("Server denied request.");
  }
};
// * Forgot Password ( Set new password )
// * Done
exports.forgotPassword = async (req, res) => {
  try {
    const { value, error } = validators.forgotPassword(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let organisation = await Organisation.findOne({
      resetToken: req.params.token,
      resetTokenValid: { $gte: new Date() },
    }).exec();

    if (!organisation)
      return res.status(400).send("Invalid Password Reset Link.");

    if (value.password !== value.confirmPassword)
      return res.status(400).send("Passwords do not match.");

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(value.password, salt);

    organisation.password = newPassword;
    organisation.resetToken = null;
    organisation.resetTokenValid = null;
    await organisation.save();

    res.status(200).send(organisation);
  } catch (error) {
    console.log(error);
    res.status(400).send("Server denied request.");
  }
};
