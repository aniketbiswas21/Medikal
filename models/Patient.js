const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["patient", "doctor", "nurse", "org"],
    default: "patient",
  },
  name: {
    firstName: {
      type: String,
      minlength: 3,
      maxlength: 250,
      required: true,
    },
    lastName: {
      type: String,
      minlength: 3,
      maxlength: 250,
    },
  },
  emailProp: {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  contactNo: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  emergencyContactNo: Number,
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  upcoming: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Slot",
    },
  ],
  history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "History",
    },
  ],
  joinedOn: Date,
  lastSeen: Date,
  verificationToken: {
    type: String,
    default: null,
  },
  verificationTokenValid: {
    type: Date,
    default: null,
  },
  resetToken: {
    type: String,
    default: null,
  },
  resetTokenValid: {
    type: Date,
    default: null,
  },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
