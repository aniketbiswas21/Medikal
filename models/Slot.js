const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  time: {
    from: {
      type: Date,
    },
    to: {
      type: Date,
    },
  },
  booked: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

slotSchema.methods.isBooked = function () {
  const now = new Date();
  const slotDate = new Date(this.date);
  // const slotDate = new Date(this.date - 1000 * 60 * 60 * 24 * 2);
  return (
    now.getMonth() <= slotDate.getMonth() && now.getDate() <= slotDate.getDate()
  );
};
const Slot = mongoose.model("Slot", slotSchema);
module.exports = Slot;
module.exports.slotSchema = slotSchema;
