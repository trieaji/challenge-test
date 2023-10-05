import { createClockOut } from "../services/clockOutService.js";

const clockOutUser = async (req,res,next) => {
    try {
        let request = req.body
        let user = req.user
        const result = await createClockOut(request,user)
        res.status(200).json({
            data:result
        })
    } catch (error) {
        next(error)
    }
}

export {
    clockOutUser
}