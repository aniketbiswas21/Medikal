const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["patient", "doctor", "nurse", "org"],
    default: "doctor",
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
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNo: {
    type: Number,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  emergencyContactNo: {
    type: Number,
    // required: true,
    unique: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: 3, //!setting 3 for testing ,original value 100
    maxlength: 500,
    required: true,
  },
  joinedOn: {
    type: Date,
    required: true,
  },
  fields: {
    type: [
      {
        type: String, //! ONLY FOR TESTING
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Fields",
      },
    ],
    // required: true,
  },
  org: {
    type: String, //! ONLY FOR TESTING
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "Org",
    required: true,
  },
  timetable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TimeTable",
  },
  upcoming: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Slots",
    },
  ],
  history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "History",
    },
  ],
  approved: {
    type: Boolean,
    default: false,
  },
  lastSeen: Date,
  resetToken: {
    type: String,
    default: null,
  },
  resetTokenValid: {
    type: Date,
    default: null,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
