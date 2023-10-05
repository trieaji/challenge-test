import { prismaClient } from "../application/database.js";
import { validation } from "../validation/validation.js";
import { clockOutValidation } from "../validation/clockOutValidation.js";
import { ResponseError } from "../error/responseError.js";
import { ip, ipv6 } from "address";

const createClockOut = async (request,user) => {
    const myClockOut = validation(clockOutValidation, request)
    myClockOut.longitude = '-7.743477242637492'
    myClockOut.latitude = '110.45524513852155'
    myClockOut.user_id = user.id
    myClockOut.ip_address = ip()

    const dataClockOut = await prismaClient.clock_out.create({
        data: myClockOut,
        select: {
            id: true,
            user_id: true,
            ip_address: true,
            longitude: true,
            latitude: true,
            created_at: true
        }
    })

    return dataClockOut
}

export {
    createClockOut
}