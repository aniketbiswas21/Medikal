const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  slotId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  booked: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
  link: {
    type: String,
    default: null,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  skipped: {
    type: Boolean,
    default: false,
  },
});

// slotSchema.methods.isBooked = function () {
//   const now = new Date();
//   const slotDate = new Date(this.date);
//   // const slotDate = new Date(this.date - 1000 * 60 * 60 * 24 * 2);
//   return (
//     now.getMonth() <= slotDate.getMonth() && now.getDay() <= slotDate.getDay()
//   );
// };
const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
// module.exports.slotSchema = slotSchema;
