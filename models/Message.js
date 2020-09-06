const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  from: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
  },
  to: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
  },
  msg: {
    type: String,
    required: true,
  },

  time: {
    type: Date,
    required: true,
  },

  read: {
    type: Boolean,
    default: false,
  },
  seen: Date,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
