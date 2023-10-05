import Joi from "joi";

const clockOutValidation = Joi.object({
    longitude: Joi.string().max(255),
    latitude: Joi.string().max(255)
})

export {
    clockOutValidation
}