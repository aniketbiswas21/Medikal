const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.createBooking = (body) => {
  const schema = Joi.object({
    slotId: Joi.objectId().required(),
    doctor: Joi.objectId().required(),
    day: Joi.number().integer().max(6).min(0).required(),
    // time: Joi.object()
    //   .keys({
    //     from: Joi.string()
    //       .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    //       .required(),
    //     to: Joi.string()
    //       .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    //       .required(),
    //   })
    //   .required(),
  });

  return schema.validate(body);
};
exports.endBooking = (body) => {
  const schema = Joi.object({
    doctor: Joi.objectId().required(),
    patient: Joi.objectId().required(),
    date: Joi.date().required(),
    time: Joi.object({
      from: Joi.date().required(),
      to: Joi.date().required(),
    }).required(),
    notes: Joi.string().max(500),
    prescription: Joi.array().items(
      Joi.object({
        medicine: Joi.string().max(150),
        instructions: Joi.string().max(150),
        notes: Joi.string().max(150),
      })
    ),
  });

  return schema.validate(body);
};

exports.toggleConfirm = (body) => {
  const schema = Joi.object({
    confirmed: Joi.bool().required(),
  });

  return schema.validate(body);
};

exports.skipBooking = (body) => {
  const schema = Joi.object({
    skipped: Joi.bool().required(),
  });

  return schema.validate(body);
};
