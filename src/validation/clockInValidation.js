import Joi from "joi";

const clockInValidation = Joi.object({
    longitude: Joi.string().max(255),
    latitude: Joi.string().max(255)
})

export {
    clockInValidation
}