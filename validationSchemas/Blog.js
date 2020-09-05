const Joi = require("joi");

exports.createBlog = (body) => {
  const schema = Joi.object({
    title: Joi.string().min(5).max(100).trim().required(),
    content: Joi.string().min(500).max(5000).trim().required(),
    photo: Joi.string(),
  });

  return schema.validate(body);
};

exports.updateBlog = (body) => {
  const schema = Joi.object({
    title: Joi.string().min(5).max(100).trim(),
    content: Joi.string().min(500).max(5000).trim(),
    photo: Joi.string(),
  });

  return schema.validate(body);
};
