const mongoose = require("mongoose");

const medResponseSchema = new mongoose.Schema({
  medPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MedPost",
  },
  user: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "user.model",
    },
    model: {
      type: String,
      enum: ["Patient", "Doctor"],
      required: true,
    },
  },
  previousHealthConditions: {
    bool: {
      type: Boolean,
      required: true,
    },
    details: {
      type: String,
      maxlength: 200,
    },
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const MedResponse = mongoose.model("MedResponse", medResponseSchema);

module.exports = MedResponse;
