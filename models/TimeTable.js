const mongoose = require("mongoose");
const { slotSchema } = require("./Slot");

const timetableSchema = new mongoose.Schema({
  days: [[slotSchema]],
  doctorId: {
    type: mongoose.Schema.ObjectId,
    ref: "doctor",
  },
});

const TimeTable = mongoose.model("TimeTable", timetableSchema);

module.exports = TimeTable;
