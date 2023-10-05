import Joi from "joi";

const registerUserValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.required(),
    name: Joi.string().max(100).required()
    // token: Joi.required()
})

const loginUserValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.required()
})

export {
    registerUserValidation,
    loginUserValidation
}