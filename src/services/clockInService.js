import { prismaClient } from "../application/database.js";
import { validation } from "../validation/validation.js";
import { clockInValidation } from "../validation/clockInValidation.js";
import { ResponseError } from "../error/responseError.js";
import { ip, ipv6 } from "address";


const createClockIn = async (request,user) => {
    const myClockIn = validation(clockInValidation, request)
    myClockIn.longitude = '-7.743477242637492'
    myClockIn.latitude = '110.45524513852155'
    myClockIn.user_id = user.id
    myClockIn.ip_address = ip()

    const check = await prismaClient.clock_in.count({
        where: {
            user_id: user.id
        }
    })

    if(check) {
        throw new ResponseError(404, 'user has clocked in')
    }
    
    const dataClockIn = await prismaClient.clock_in.create({
        data: myClockIn,
        select: {
            id: true,
            user_id: true,
            ip_address: true,
            longitude: true,
            latitude: true,
            created_at: true
        }
    })

    return dataClockIn

}

export {
    createClockIn
}