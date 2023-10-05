import Joi from "joi";

const sampleValidation = Joi.object({
    username: Joi.string().max(100).required(),
    city: Joi.string().max(100).required() 
})

export {
    sampleValidation
}