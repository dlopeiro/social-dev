import Joi from "joi"

export const signupSchema = Joi.object({
  firstName: Joi.string().required().max(50).message('The field "First name" must contain up to {{#limit}} characters'),
  lastName: Joi.string().required().max(50).message('The field "Last name" must contain up to {{#limit}} characters'),
  user: Joi.string().required().max(30).message('The field "User" must contain up to {{#limit}} characters'),
  email: Joi.string().email({ tlds: { allow: false } }).required().max(100).message('The field "Email" must contain up to {{#limit}} characters'),
  password: Joi.string().required()
    .max(50).message('The password must contain up to {{#limit}} characters')
    .min(6).message('The password must contain at least {{#limit}} characters'),
})

export const loginSchema = Joi.object({
  userOrEmail: Joi.string().required(),
  password: Joi.string().required()
    .max(50).message('The password must contain up to {{#limit}} characters')
    .min(6).message('The password must contain at least {{#limit}} characters'),
})