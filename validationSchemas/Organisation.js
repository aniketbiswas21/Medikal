const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.newOrganisation = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(250).trim().required(),
    description: Joi.string().min(3).max(250).trim().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(100).trim().required(),
    confirmPassword: Joi.string().min(6).max(100).trim().required(),
    contactNumber: Joi.string()
      .length(10)
      .trim()
      .pattern(/[6-9]{1}[0-9]{9}/)
      .required(),
    // fields: Joi.array().items(Joi.objectId().required()).required(), //.min(1)//! commented for testing
    fields: Joi.array().items(Joi.string().required()).required(), //.min(1)//! only for testing
    location: Joi.object({
      latitude: Joi.string().trim().min(3).max(100).required(),
      longitude: Joi.string().trim().min(3).max(100).required(),
      city: Joi.string().trim().min(3).max(100).required(),
      state: Joi.string().trim().min(3).max(100).required(),
      area: Joi.string().trim().min(3).max(100).required(),
      address: Joi.string().trim().min(3).max(100).required(),
    }),
  });
  return schema.validate(body);
};

exports.editOrganisationDetails = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(250).trim(),
    description: Joi.string().min(3).max(250).trim(),
    email: Joi.string().email(),
    contactNumber: Joi.string()
      .length(10)
      .trim()
      .pattern(/[6-9]{1}[0-9]{9}/),
  });
  return schema.validate(body);
};

exports.editOrganisationFields = (body) => {
  const schema = Joi.object({
    // fields: Joi.array().items(Joi.objectId().required()).required(), //.min(1)//! commented for testing//!Check for validity of field id
    fields: Joi.array().items(Joi.string().required()).required(), //.min(1)//! only for testing
  });
  return schema.validate(body);
};

exports.changePassword = (body) => {
  const schema = Joi.object({
    oldPassword: Joi.string().min(6).max(100).trim().required(),
    password: Joi.string().min(6).max(100).trim().required(),
    confirmPassword: Joi.string().min(6).max(100).trim().required(),
  });
  return schema.validate(body);
};
exports.forgotPassword = (body) => {
  const schema = Joi.object({
    password: Joi.string().min(6).max(100).trim().required(),
    confirmPassword: Joi.string().min(6).max(100).trim().required(),
  });
  return schema.validate(body);
};
