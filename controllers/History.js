// * Models
const History = require("../models/History");
// const Booking = require("../models/Booking");

// * Utils
const validationSchema = require("../validationSchemas/History");

// * NPM Packages
const { pick, omit } = require("lodash");

// * Controllers -->

// * Create a new History
exports.createHistory = async (req, res) => {
  try {
    const { value, error } = validationSchema.createHistory(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // let booking = await Booking.findById(value.bookingId).exec();
    // if (!booking) return res.status(400).send("Booking does not exists.");

    // if (booking.active || !booking.confirmed || booking.skipped)
    //   return res.status(400).send("Action denied.");

    const newHistory = await History.create({
      // ...pick(booking, ["doctor", "patient", "date", "time"]),
      ...omit(value, ["bookingId"]),
    });

    res.status(200).send(newHistory);
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server denied request.");
  }
};

// * Edit History
exports.editHistory = async (req, res) => {
  try {
    const { value, error } = validationSchema.editHistory(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const editedHistory = await History.findByIdAndUpdate(
      req.params.historyId,
      {
        ...value,
      },
      { new: true }
    ).exec();

    if (!editedHistory) res.status(400).send("History not found.");

    res.status(200).send(editedHistory);
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server denied request.");
  }
};

// * Get all histories
exports.allHistories = async (req, res) => {
  try {
    const histories = await History.find({})
      .sort("-date")
      .populate("patient", "name email")
      .populate("doctor", "name email")
      .exec();
    if (!histories) return res.status(400).send("History not found.");

    res.status(200).send(histories);
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server denied request.");
  }
};

// * Get history for patient
exports.patientHistories = async (req, res) => {
  try {
    const histories = await History.find({ patient: req.user._id })
      .sort("-date")
      .populate("patient", "name email")
      .populate("doctor", "name email")
      .exec();
    if (!histories) return res.status(400).send("History not found.");

    res.status(200).send(histories);
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server denied request.");
  }
};

// * Get history for doctor
exports.doctorHistories = async (req, res) => {
  try {
    const histories = await History.find({ doctor: req.user._id })
      .sort("-date")
      .populate("patient", "name email")
      .populate("doctor", "name email")
      .exec();
    if (!histories) return res.status(400).send("History not found.");

    res.status(200).send(histories);
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server denied request.");
  }
};

// * Controllers End -->
