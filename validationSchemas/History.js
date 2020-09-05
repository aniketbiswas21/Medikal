const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.createHistory = (body) => {
  const schema = Joi.object({
    bookingId: Joi.objectId().required(),
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

exports.editHistory = (body) => {
  const schema = Joi.object({
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
