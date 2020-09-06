const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.createNedit = (body) => {
  const schema = Joi.object({
    content: Joi.string().min(100).max(500).trim().required(),
    tags: Joi.array()
      .items(Joi.string().min(2).max(50).lowercase().trim())
      .max(5)
      .required(),
    location: Joi.object().keys({
      state: Joi.string().min(3).max(50).lowercase().trim(),
      city: Joi.string().min(3).max(50).lowercase().trim(),
    }),
    urgency: Joi.bool().required(),
    category: Joi.string()
      .valid("askingDonation", "lookingToDonate")
      .trim()
      .required(),
  });

  return schema.validate(body);
};

