// * NPM Packages
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const crypto = require("crypto");
const moment = require("moment");
const async = require("async");

// * Models
const Patient = require("../models/Patient");

// * Functions

// * Utils
const validationSchema = require("../validationSchemas/Patient");
const smtpTransport = require("../config/emailSetup");

// * Controllers -->

// * Create new account
// * Done
exports.createNewAccount = async (req, res) => {
  try {
    const { value, error } = validationSchema.createPatient(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if (value.password !== value.confirmPassword)
      return res.status(400).send("Passwords do not match.");

    const existingUser = await Patient.findOne({
      "emailProp.email": value.emailProp.email,
    }).exec();

    if (existingUser)
      return res.status(400).send("User with same email already exists.");

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(value.password, salt);

    const reqBody = _.omit(value, [
      "password",
      "confirmPassword",
      "contactNo",
      "emergencyContactNo",
      "dateOfBirth",
    ]);

    var newPatient = null;

    // Age calculations
    const age = moment(new Date(value.dateOfBirth.toString())).diff(
      moment(new Date()),
      "years"
    );

    if (value.emergencyContactNo) {
      newPatient = await Patient.create({
        ...reqBody,
        password: password,
        dateOfBirth: new Date(value.dateOfBirth.toString()),
        age: Number(age),
        contactNo: Number(value.contactNo),
        emergencyContactNo: Number(value.emergencyContactNo),
        joinedOn: new Date(),
      });
    } else {
      newPatient = await Patient.create({
        ...reqBody,
        password: password,
        dateOfBirth: new Date(value.dateOfBirth.toString()),
        age: Number(age),
        contactNo: Number(value.contactNo),
        joinedOn: new Date(),
      });
    }

    res.status(200).send(newPatient);
  } catch (error) {
    console.log(error);
    res.status(400).send("Server denied request.");
  }
};

// * Get My Profile
// * Done
exports.getMyProfile = async (req, res) => {
  try {
    const patient = await Patient.findById(req.user._id)
      .select("-password -verificationToken -resetToken")
      .exec();
    if (!patient) return res.status(400).send("User does not exist.");

    res.status(200).json({
      message: "Login Successfull",
      User: patient,
    });
  } catch (error) {
    console.log("Error occured here -> ", error);
    res.status(400).send("Server denied request.");
  }
};

// * Verify Email ( Send link to email )
// * Done
exports.verifyEmailLink = async (req, res) => {
  try {
    let user = await Patient.findById(req.user._id).exec();
    if (!user) return res.status(400).send("User does not exist.");

    const generateToken = async () => {
      const buf = await new Promise((resolve, reject) => {
        crypto.randomBytes(50, (err, buf) => {
          if (err) reject("unable to generate token.");
          resolve(buf.toString("hex"));
        });
      });
    };

    const token = await generateToken();

    // ! Not sure if this is the best approach or not.( Not a doc usage. )

    async.parallel(
      [
        function (callback) {
          const dt = new Date();
          user.verificationTokenValid = dt.setMinutes(dt.getMinutes() + 30); // 30 mins
          user.verificationToken = token;

          user
            .save()
            .then(() => {
              console.log("User Updated.");
              callback("User Updated");
            })
            .catch((err) => callback(err));
        },
        function (callback) {
          smtpTransport
            .sendMail({
              to: user.emailProp.email,
              from: `"Medic" <${process.env.EMAIL_ID}>`,
              subject: "Email Verification.",
              text: `Click the link to verify your email.\n` + `Link`, // ! <- Add link for client website
            })
            .then((info) => {
              console.log("Email sent\n", info);
              callback("Email Sent.");
            })
            .catch((err) => callback(err));
        },
      ],
      function (err) {
        return res
          .status(200)
          .send(
            `Email has been sent to ${user.emailProp.email} with further instructions.`
          );
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send("Server denied request.");
  }
};

// * Verify Email ( Click the link send to email )
// * Done
exports.verifyEmail = async (req, res) => {
  try {
    let user = await Patient.findOne({
      verificationToken: req.params.token,
      verificationTokenValid: { $gte: new Date() },
    }).exec();
    if (!user) return res.status(400).send("Invalid Email Verification Link");

    user.emailProp.verified = true;
    user.verificationToken = null;
    user.verificationTokenValid = null;

    user = await user.save();

    res.status(200).send(`${user.emailProp.email} was verified successfully.`);
  } catch (error) {
    console.log(error);
    res.status(400).send("Server denied request.");
  }
};

// * Get a single Patient
// * Done
exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientId)
      .select("-password -verificationToken -resetToken")
      .exec();
    if (!patient) return res.status(400).send("User does not exist.");

    res.status(200).send(patient);
  } catch (error) {
    console.log("Error occured here -> ", error);
    res.status(400).send("Server denied request.");
  }
};

// * Edit Profile
// * Done
exports.editProfile = async (req, res) => {
  try {
    const { value, error } = validationSchema.editProfile(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const profile = _.omit(value, [
      "contactNo",
      "emergencyContactNo",
      "dateOfBirth",
    ]);

    var updatedUser = null;

    if (profile.emergencyContactNo) {
      updatedUser = await Patient.findByIdAndUpdate(
        req.user._id,
        {
          ...profile,
          contactNo: Number(value.contactNo),
          emergencyContactNo: Number(value.emergencyContactNo),
          dateOfBirth: new Date(value.dateOfBirth.toString()),
        },
        { new: true }
      ).exec();
    } else {
      updatedUser = await Patient.findByIdAndUpdate(
        req.user._id,
        {
          ...profile,
          contactNo: Number(value.contactNo),
          dateOfBirth: new Date(value.dateOfBirth.toString()),
        },
        { new: true }
      ).exec();
    }

    res.status(200).send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(400).send("Server denied request.");
  }
};

// * Change Password
// * Done
exports.changePassword = async (req, res) => {
  try {
    const { value, error } = validationSchema.changePassword(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if (value.password !== value.confirmPassword)
      return res.status(400).send("Passwords do not match.");

    const patient = await Patient.findById(req.user._id).exec();

    const passwordMatch = await bcrypt.compare(
      value.oldPassword,
      patient.password
    );

    if (!passwordMatch) return res.status(400).send("Incorrect Password.");

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(value.password, salt);

    patient.password = newPassword;
    patient = await patient.save();

    res.status(200).send(patient);
  } catch (error) {
    console.log(error);
    res.status(400).send("Server denied request.");
  }
};

// * Change Email
// * Done
exports.changeEmail = async (req, res) => {
  try {
    const { value, error } = validationSchema.changeEmail(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const existingUser = await Patient.findOne({
      "emailProp.email": value.newEmail,
    }).exec();

    if (existingUser)
      return res.status(400).send("User with same email already exists.");

    const updatedUser = await Patient.findByIdAndUpdate(
      req.params._id,
      {
        emailProp: {
          email: value.newEmail,
          verified: false,
        },
      },
      { new: true }
    ).exec();

    if (!updatedUser) return res.status(400).send("User does not exist.");

    res.status(200).send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(400).send("Server denied request.");
  }
};

// * Forgot Password ( Send link to email )
// * Done
exports.forgotPasswordLink = async (req, res) => {
  try {
    const { value, error } = validationSchema.forgotPasswordLink(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await Patient.findOne({
      "emailProp.email": value.email,
    }).exec();
    if (!user) return res.status(400).send("User not found.");

    const buf = await crypto.randomBytes(25);
    const resetToken = buf.toString("hex");
    const dt = new Date();

    // ! Not sure if this is the best approach or not.( Not a doc usage. )
    async.parallel(
      [
        function (callback) {
          user.resetToken = resetToken;
          user.resetTokenValid = dt.setMinutes(dt.getMinutes() + 15); // 15 mins

          user
            .save()
            .then(() => {
              console.log("User Updated.");
              callback("User Updated");
            })
            .catch((err) => callback(err));
        },
        function (callback) {
          smtpTransport
            .sendMail({
              to: `${user.emailProp.email}`,
              from: `"Medic" <${process.env.EMAIL_ID}>`,
              subject: "Link for Reset Password.",
              text:
                `Click the link to reset your accounts password.\n` + `Link`, // ! <- Add link for client website
            })
            .then((info) => {
              console.log("Email sent\n", info);
              callback("Email Sent.");
            })
            .catch((err) => callback(err));
        },
      ],
      function (err) {
        return res
          .status(200)
          .send(
            `Email has been sent to ${user.emailProp.email} with further instructions.`
          );
      }
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
    const { value, error } = validationSchema.forgotPassword(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await Patient.findOne({
      resetToken: req.params.token,
      resetTokenValid: { $gte: new Date() },
    }).exec();

    if (!user) return res.status(400).send("Invalid Password Reset Link.");

    if (value.password !== value.confirmPassword)
      return res.status(400).send("Passwords do not match.");

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(value.password, salt);

    user.password = newPassword;
    user.resetToken = null;
    user.resetTokenValid = null;
    user = await user.save();

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send("Server denied request.");
  }
};

// * Controllers End -->
