const mongoose = require("mongoose");

const medPostSchema = new mongoose.Schema({
  postedBy: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "postedBy.model",
    },
    model: {
      type: String,
      required: true,
      enum: ["Patient", "Doctor", "Org"],
    },
  },
  content: {
    type: String,
    minlength: 100,
    maxlength: 500,
    required: true,
  },
  tags: {
    type: [
      {
        type: String,
        minlength: 2,
        maxlength: 50,
      },
    ],
    required: true,
    validate: {
      validator: function (arr) {
        return arr.length <= 5;
      },
    },
  },
  location: {
    state: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    city: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
  },
  date: {
    type: Date,
    default: new Date(),
  },
  responses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MedResponse",
    },
  ],
  urgency: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    enum: ["askingDonation", "lookingToDonate"],
  },
  resolved: {
    type: Boolean,
    default: false,
  },
});

const MedPost = mongoose.model("MedPost", medPostSchema);

module.exports = MedPost;
