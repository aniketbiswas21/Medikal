// * NPM Packages
const { v4: uuidV4 } = require("uuid");

// * Models
const Booking = require("../models/Booking");
const Doctor = require("../models/Doctor");
const Timetable = require("../models/TimeTable");
const History = require("../models/History");

// * Functions

// * Utils
const validationSchema = require("../validationSchemas/Booking");

// * Controllers -->

// * Create new booking
// * Done
exports.createBooking = async (req, res) => {
  try {
    const { value, error } = validationSchema.createBooking(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // if (
    //   new Date(`1970-01-01 ${value.time.to}`) <
    //   new Date(`1970-01-01 ${value.time.from}`)
    // )
    //   return res.status(400).send("Invalid time slot.");

    const doctor = await Doctor.findById(value.doctor).exec();
    if (!doctor) return res.status(400).send("No such Doctor exists.");

    const timetable = await Timetable.findOne(doctor.timetable).exec();
    if (!timetable)
      return res.status(400).send("No timetable found for the doctor.");

    let todaysDate = new Date();
    todaysDate.setHours(0, 0, 0);
    let dateOfBooking = null;
    // console.log(todaysDate.getDay());
    // console.log(value.day);
    // console.log(value.day === todaysDate.getDay());

    if (value.day === todaysDate.getDay()) {
      dateOfBooking = todaysDate;
    } else if (
      value.day - todaysDate.getDay() === 1 ||
      (value.day === 0 && todaysDate.getDay() === 6)
    ) {
      dateOfBooking = todaysDate;
      dateOfBooking.setDate(dateOfBooking.getDate() + 1);
    } else {
      return res.status(400).send("Invalid booking request.");
    }

    const slot = timetable.days[value.day].id(value.slotId);
    if (!slot) return res.status(400).send("No slot found");
    if (!slot.active) return res.status(400).send("Slot is not active");
    if (slot.isBooked())
      return res.status(400).send("The slot is already booked");

    //* DONE // ! Check that for the doctor the slot is available

    let timeFrom,
      timeTo = dateOfBooking;

    timeFrom.setHours(
      value.time.from.split(":")[0],
      value.time.from.split(":")[1],
      00
    );

    timeTo.setHours(
      value.time.to.split(":")[0],
      value.time.to.split(":")[1],
      00
    );

    // req.user = { _id: "5f535cd6b9ce5b449cfb22fd" }; //! just for testing
    const newBooking = await Booking.create({
      doctor: value.doctor,
      slotId: value.slotId,
      patient: req.user._id,
      date: dateOfBooking,
      booked: true,
      time: {
        from: slot.time.to.setDate(Date.now()),
        to: slot.time.from.setDate(Date.now()),
      },
    });
    slot.date = dateOfBooking;
    slot.booked = true;
    await timetable.save();
    res.status(200).send(newBooking);
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server denied request.");
  }
};

// * Toggle Confirm for Booking
// * Done
exports.toggleConfirm = async (req, res) => {
  try {
    const { value, error } = validationSchema.toggleConfirm(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let booking = await Booking.findById(req.params.bookingId).exec();
    if (!booking) return res.status(400).send("Booking not found.");

    if (
      booking.time.from > new Date() &&
      !booking.active &&
      !booking.complete &&
      !booking.skipped
    ) {
      booking.confirmed = value.confirmed;
      booking = await booking.save();

      return res.status(200).send(booking);
    } else {
      return res.status(400).send("Booking can not be modified now.");
    }
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server denied request.");
  }
};

// * Start Meeting
// * Done
exports.startMeeting = async (req, res) => {
  try {
    let currentBooking = await Booking.findById(req.params.bookingId).exec();
    if (!currentBooking) return res.status(400).send("Booking does not exist.");

    if (!currentBooking.confirmed)
      return res.status(400).send("Booking is not confirmed.");

    // if meeting time is in permitable bounds
    if (currentBooking.time.from > new Date())
      return res.status(400).send("Meeting has not started yet;");

    if (currentBooking.time.to < new Date())
      return res.status(400).send("Meeting validity has ended.");

    // if meeting is already active
    if (
      currentBooking.active &&
      currentBooking.link &&
      !booking.complete &&
      !booking.skipped
    ) {
      return res.status(200).json({ active: true, link: currentBooking.link });
    } else if (
      !currentBooking.active &&
      !booking.complete &&
      !booking.skipped &&
      req.user &&
      req.user.role === "doctor" &&
      currentBooking.doctor.equals(req.user._id)
    ) {
      // activate the meeting
      currentBooking.active = true;
      currentBooking.link = uuidV4();

      currentBooking = await currentBooking.save();

      return res.status(200).json({ active: true, link: currentBooking.link });
    } else {
      return res.status(400).send("Meeting has not started yet.");
    }
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server denied request.");
  }
};

// * End Meeting
// * Done
exports.endMeeting = async (req, res) => {
  try {
    const { value, error } = validators.endBooking(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let booking = await Booking.findByIdAndDelete(req.params.bookingId).exec();
    if (!booking) return res.status(400).send("Booking not found.");

    if (!currentBooking.confirmed)
      return res.status(400).send("Booking is not confirmed.");
    if (new Date() > booking.time.from && !booking.skipped && booking.active) {
      booking.link = null;
      booking.active = false;
      booking.complete = true;

      booking = await booking.save();

      const history = new History({
        doctor: booking.doctor,
        patient: booking.patient,
        date: booking.date,
        time: booking.time,
        notes: req.body.notes,
        prescription: req.body.prescription,
      });
      await history.save();

      return res.status(200).send(booking);
    } else {
      return res.status(400).send("Request denied.");
    }
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server denied request.");
  }
};

// * Skip Meeting
// * Done
exports.skipMeeting = async (req, res) => {
  try {
    const { value, error } = validationSchema.skipBooking(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let booking = await Booking.findById(req.params.bookingId).exec();
    if (!booking) return res.status(400).send("Booking not found.");

    if (!booking.complete && !booking.active) {
      booking.skipped = value.skipped;
      booking = await booking.save();

      return res.status(200).send(booking);
    } else {
      return res.status(400).send("Booking can not be modified now.");
    }
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server denied request.");
  }
};

// * Controllers End -->
