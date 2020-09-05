const mongoose = require("mongoose");

const organisationSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxlength: 250,
    required: true,
  },
  description: {
    type: String,
    minLength: 3,
    maxlength: 250,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  fields: [
    {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "Slots",
      required: true,
    },
  ],
  location: {
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    area: { type: String, required: true },
    address: { type: String, required: true },
  },
  dateCreated: {
    type: Date,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  resetToken: {
    type: String,
    default: null,
  },
  resetTokenValid: {
    type: Date,
    default: null,
  },
  role: {
    type: String,
    enum: ["patient", "doctor", "nurse", "org"],
    default: "org",
  },
});

const Organisation = mongoose.model("Organisation", organisationSchema);
module.exports = Organisation;
