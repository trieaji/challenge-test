import { createClockIn } from "../services/clockInService.js";

const clockinUser = async (req,res,next) => {
    try {
        let request = req.body
        let user = req.user
        const result = await createClockIn(request,user)
        res.status(200).json({
            data:result
        })
    } catch (error) {
        next(error)
    }
}

export {
    clockinUser
}