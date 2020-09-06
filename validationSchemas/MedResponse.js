const Joi = require("joi");

exports.createNedit = (body) => {
  const schema = Joi.object({
    previousHealthConditions: Joi.object().keys({
      bool: Joi.bool().required(),
      details: Joi.when("previousHealthConditions.bool", {
        is: true,
        then: Joi.string().max(200).trim().required(),
      }),
    }),
  });

  return schema.validate(body);
};
