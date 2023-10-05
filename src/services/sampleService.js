import { prismaClient } from "../application/database.js";
import { validation } from "../validation/validation.js";
import { sampleValidation } from "../validation/sampleValidation.js";

const createdbSample = async (request) => {
    const mySample = validation(sampleValidation, request)

    const dataSample = prismaClient.sample.create({
        data: mySample,
        select: {
            username: true,
            city: true
        }
    })

    return dataSample
}

export {
    createdbSample
}