// * NPM Packages
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const crypto = require("crypto");

// * Models
const Doctor = require("../models/Doctor");

// * Utils
const validators = require("../validationSchemas/Doctor");
const { omit } = require("lodash");
// const smtpTransport = require("../config/emailSetup");

// * Controllers -->
const { initTimetableForDoctor } = require("./Timetable");

// * Add new doctor(conformed by organisation)
exports.addNewDoctor = async (req, res) => {
  try {
    const { value, error } = validators.newDoctor(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if (value.password !== value.confirmPassword)
      return res.status(400).send("Passwords do not match.");
    const existingDoctor = await Doctor.findOne({ email: value.email });
    if (existingDoctor)
      return res.status(400).send("Doctor with given email already exists.");

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(value.password, salt);
    req.body = omit(value, [
      "password",
      "confirmPassword",
      "contactNo",
      "emergencyContactNo",
      "dateOfBirth",
    ]);
    const newDoctor = new Doctor({
      ...req.body,
      password,
      role: "doctor",
      dateOfBirth: new Date(value.dateOfBirth.toString()),
      contactNo: Number(value.contactNo),
      emergencyContactNo: Number(value.emergencyContactNo),
      joinedOn: new Date(),
      active: true,
    });
    newDoctor.timetable = await initTimetableForDoctor(
      newDoctor._id,
      value.timetable
    );
    await newDoctor.save();
    res.send(newDoctor);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server denied request");
  }
};

// * Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const allDoctors = await Doctor.find();
    res.send(allDoctors);
  } catch (err) {
    res.status(400).send("Server denied request");
  }
};

// * Get doctor with given id
exports.getDoctorById = async (req, res) => {
  try {
    if (!req.params || !req.params.id)
      return res.status(400).send("No id provided");
    const doctor = await Doctor.findById(req.params.id).select([
      "-password",
      "-resetToken",
      "-resetTokenValid",
    ]);
    if (!doctor) return res.status(400).send("No doctor found");
    res.send(doctor);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server denied request");
  }
};

// * Get profile of logged in doctor
exports.getDoctorProfile = async (req, res) => {
  try {
    const doctorProfile = await Doctor.findById(req.user._id).select([
      "-password",
      "-resetToken",
      "-resetTokenValid",
    ]);
    if (!doctorProfile) return res.status(400).send("No doctor found");
    res.send(doctorProfile);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server denied request");
  }
};
// * Edit profile
exports.editDoctorProfile = async (req, res) => {
  try {
    const { value, error } = validators.editDoctor(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    req.body = omit(value, ["contactNo", "emergencyContactNo"]);

    const newProfile = {
      ...req.body,
    };
    if (value.contactNo) newProfile.contactNo = Number(value.contactNo);
    if (value.emergencyContactNo)
      newProfile.emergencyContactNo = Number(value.emergencyContactNo);

    const doctorProfile = await Doctor.findByIdAndUpdate(
      req.user._id,
      newProfile,
      { new: true }
    );
    if (!doctorProfile) return res.status(400).send("No doctor found");
    res.send(doctorProfile);
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

    const doctor = await Doctor.findById(req.user._id);

    const passwordMatch = await bcrypt.compare(
      value.oldPassword,
      doctor.password
    );

    if (!passwordMatch) return res.status(400).send("Incorrect Password.");

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(value.password, salt);

    doctor.password = newPassword;
    await doctor.save();

    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(400).send("Server denied request.");
  }
};

// * Forgot Password ( Send link to email )
exports.forgotPasswordLink = async (req, res) => {
  try {
    let doctor = await Doctor.findOne({
      email: req.body.email,
    });
    if (!doctor) return res.status(400).send("doctor not found.");

    const buf = await crypto.randomBytes(25);
    const resetToken = buf.toString("hex");
    const dt = new Date();

    doctor.resetToken = resetToken;
    doctor.resetTokenValid = dt.setMinutes(dt.getMinutes() + 15); // 15 mins

    await doctor.save();

    var info = await smtpTransport.sendMail({
      to: `${doctor.email}`,
      from: `"Medic" <${process.env.EMAIL_ID}>`,
      subject: "Link for Reset Password.",
      text: `Click the link to reset your accounts password.\n`,
      html: `<a href="http://localhost:5000/api/doctor/forgotPassword/${resetToken}">Verify Email</button>`, //!EDIT EMAIL
    });

    console.log("Email sent :- ", info);

    res
      .status(200)
      .send(
        `Email has been sent to ${doctor.email} with further instructions. ${req.originalUrl}`
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

    let doctor = await Doctor.findOne({
      resetToken: req.params.token,
      resetTokenValid: { $gte: new Date() },
    }).exec();

    if (!doctor) return res.status(400).send("Invalid Password Reset Link.");

    if (value.password !== value.confirmPassword)
      return res.status(400).send("Passwords do not match.");

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(value.password, salt);

    doctor.password = newPassword;
    doctor.resetToken = null;
    doctor.resetTokenValid = null;
    doctor = await doctor.save();

    res.status(200).send(doctor);
  } catch (error) {
    console.log(error);
    res.status(400).send("Server denied request.");
  }
};
