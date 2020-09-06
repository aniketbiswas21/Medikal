const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
// schema={
//   Joi
// }
exports.updateTimetable = (body) => {
  return Joi.object({
    days: Joi.array().items(Joi.array()).required(),
    time: Joi.object({
      from: Joi.date().required(),
      to: Joi.date().required(),
    }),
  }).validate(body);
};
// exports.bookSlot = (body) => {
//   const schema = Joi.object({
//     day: Joi.number().min(0).max(7).required(),
//     id: Joi.string().required(), //! only for testing
//     //   id:Joi.objectId().required(),
//     // patientId: Joi.string().required(), //! only for testing
//     //   id:Joi.objectId().required(),
//     doctorId: Joi.string().required(), //! only for testing
//     //   id:Joi.objectId().required(),
//   });
//   return schema.validate(body);
// };
exports.getTimetable = (body) => {
  const schema = Joi.object({
    doctorId: Joi.string().required(), //! only for testing
    //   id:Joi.objectId().required(),
  });
  return schema.validate(body);
};
