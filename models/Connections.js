const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema({
  socketId: {
    type: String,
    required: true,
  },
  userId: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
  },
});
const Connection = mongoose.model("Connection", connectionSchema);
module.exports = Connection;
