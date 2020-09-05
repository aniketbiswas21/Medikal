const Joi = require("joi");

exports.createPatient = (body) => {
  const schema = Joi.object({
    name: Joi.object()
      .keys({
        firstName: Joi.string().min(3).max(250).trim().required(),
        lastName: Joi.string().min(3).max(250).trim(),
      })
      .required(),
    emailProp: Joi.object()
      .keys({
        email: Joi.string().email().required(),
      })
      .required(),
    contactNo: Joi.string().length(10).trim().required(),
    password: Joi.string().min(6).max(100).trim().required(),
    confirmPassword: Joi.string().min(6).max(100).trim().required(),
    emergencyContactNo: Joi.string().length(10).trim(),
    dateOfBirth: Joi.date().required(),
    gender: Joi.string()
      .lowercase()
      .valid("male", "female", "other")
      .required(),
  });
  return schema.validate(body);
};

exports.editProfile = (body) => {
  const schema = Joi.object({
    name: Joi.object()
      .keys({
        firstName: Joi.string().min(3).max(250).trim().required(),
        lastName: Joi.string().min(3).max(250).trim(),
      })
      .required(),
    contactNo: Joi.string().length(10).trim().required(),
    emergencyContactNo: Joi.string().length(10).trim(),
    dateOfBirth: Joi.date().required(),
    gender: Joi.string()
      .lowercase()
      .valid("male", "female", "other")
      .required(),
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

exports.changeEmail = (body) => {
  const schema = Joi.object({
    newEmail: Joi.string().email().required(),
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
