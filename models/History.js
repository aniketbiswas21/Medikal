const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
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
  notes: {
    type: String,
    max: 500,
  },

  prescription: [
    {
      medicine: {
        type: String,
        max: 150,
      },
      instructions: {
        type: String,
        max: 150,
      },
      notes: {
        type: String,
        max: 150,
      },
    },
  ],
});

const History = mongoose.model("History", historySchema);

module.exports = History;
