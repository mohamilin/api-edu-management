const Joi = require("joi");

const register = {
  body: Joi.object().keys({
    user_email: Joi.string().required().email(),
    user_password: Joi.string().required(),
    user_name: Joi.string().required(),
    user_type: Joi.string()
      .required()
      .valid("super_user", "administrator", "employee", "student", "parent"),
  }),
};

module.exports = {
  register,
};
