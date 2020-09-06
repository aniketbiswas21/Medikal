// * Models
const Timetable = require("../models/TimeTable");
const Slot = require("../models/Slot");

// * Utils
const validators = require("../validationSchemas/Timetable");

// * init new timetable for a doctor;
// !
//!remove
function createFakeInput() {
  const startTime = 9;
  const endTime = 17;
  const date = new Date();
  let timetable = [];

  for (i = 0; i < 7; i++) {
    let slotTime = new Date(2000, 0, 1, startTime, 0);
    let end = new Date(2000, 0, 1, endTime, 0);
    timetable.push([]);

    while (slotTime < end) {
      const hour = slotTime.getHours();
      const slot = {
        from: hour,
        to: hour + 1000 * 60 * 60,
        active: true,
      };

      timetable[i].push(slot);
      slotTime.setTime(slotTime.getTime() + 1000 * 60 * 60);
    }
  }

  return timetable;
}
exports.initTimetableForDoctor = async (doctorId, inputTimetable) => {
  //!params validator
  inputTimetable = createFakeInput(); //!remove
  let timetable = { days: [] };

  const backDate = new Date(2000, 0, 1, 0, 0);
  inputTimetable.forEach((day) => {
    const t = day.map((slot) => {
      return new Slot({
        date: backDate,
        active: slot.active,
        time: {
          from: slot.from,
          to: slot.to,
        },
      });
    });
    timetable.days.push(t);
  });

  timetable.doctorId = doctorId;
  timetable = new Timetable(timetable);
  await timetable.save();

  return timetable._id;
};

//* Change slot active status
//! not complete
exports.updateTimetable = async (req, res) => {
  try {
    const { value: changes, error } = validators.updateTimetable(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const doctorId = req.doctorID || "5f5385d16076c42880e41b92"; //! ONLY FOR TESTING ,SET ID PROPERLY
    const timetable = await Timetable.findOne({ doctorId });
    if (!timetable) return res.status(400).send("No timetable found");
    changes.days.forEach((dayArr, dayIndex) => {
      dayArr.forEach((slot, i) => {
        const slotIndex = timetable.days[dayIndex].findIndex(
          (s) => s.id === slot.id
        );
        if (timetable.days[dayIndex][slotIndex].booked)
          return res.status(400).send({
            id: timetable.days[dayIndex][slotIndex].id,
            msg: "Cannot change a prebooked slot",
          });

        timetable.days[dayIndex][slotIndex].active = slot.active;
        timetable.days[dayIndex][slotIndex].time.from = slot.time.from;
        timetable.days[dayIndex][slotIndex].time.to = slot.time.to;
      });
    });
    await timetable.save();
    res.send(timetable);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server denied request.");
  }
};

// * get timetable
exports.getTimetable = async (req, res) => {
  try {
    const { id: doctorId } = req.params;
    if (!doctorId) return res.status(400).send("No id provided");

    const timetable = await Timetable.findOne({ doctorId });
    if (!timetable) return res.status(400).send("No timetable found");

    for (i = 0; i < 7; i++) {
      timetable.days[i].forEach((slot, i) => {
        slot.booked = slot.isBooked();
      });
    }
    res.send(timetable);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server denied request.");
  }
};
