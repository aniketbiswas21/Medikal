const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.newDoctor = (body) => {
  //! add validatir for timetable
  const schema = Joi.object({
    name: Joi.object()
      .keys({
        firstName: Joi.string().min(3).max(250).trim().required(),
        lastName: Joi.string().min(3).max(250).trim(),
      })
      .required(),
    email: Joi.string().email().required(),
    contactNo: Joi.string()
      .length(10)
      .trim()
      .pattern(/[6-9]{1}[0-9]{9}/)
      .required(),
    emergencyContactNo: Joi.string()
      .length(10)
      .trim()
      .pattern(/[6-9]{1}[0-9]{9}/),
    password: Joi.string().min(6).max(100).trim().required(),
    confirmPassword: Joi.string().min(6).max(100).trim().required(),
    dateOfBirth: Joi.date().required(), //! VERIFY date format ,current: MM/DD/YYYY //? OPTIONAL CHECK VALIDITY OF DOB(above 18)
    gender: Joi.string()
      .lowercase()
      .valid("male", "female", "other")
      .required(),
    description: Joi.string().min(3).max(250).trim().required(),
    // fields: Joi.array().items(Joi.objectId().required()).required(), //.min(1)//! commented for testing
    // org: Joi.objectId().required(),//! commented for testing
    fields: Joi.array().items(Joi.string().required()).required(), //.min(1)//! only for testing
    org: Joi.string().required(), //! only for testing
  });
  return schema.validate(body);
};

exports.editDoctor = (body) => {
  const schema = Joi.object({
    contactNo: Joi.string()
      .length(10)
      .trim()
      .pattern(/[6-9]{1}[0-9]{9}/),
    emergencyContactNo: Joi.string()
      .length(10)
      .trim()
      .pattern(/[6-9]{1}[0-9]{9}/),
    gender: Joi.string().lowercase().valid("male", "female", "other"),
    description: Joi.string().min(3).max(250).trim(),
    // fields: Joi.array().items(Joi.objectId().required()).required(), //.min(1)//! commented for testing
    fields: Joi.array().items(Joi.string().required()), //.min(1)//! only for testing
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
