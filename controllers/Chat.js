// * Models
const Message = require("../models/Message");

// * Add new doctor(conformed by organisation)
exports.getMessages = async (req, res) => {
  try {
    const ids = ["FWMaVH6xeNtdbvoKAAAA", req.params.id]; //!inly to test
    // const ids = [req.user._id, req.params.id];
    const messages = await Message.find({
      to: { $in: ids },
      from: { $in: ids },
    });
    res.send(messages);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server denied request");
  }
};
