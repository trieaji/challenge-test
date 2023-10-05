import { createdbSample } from "../services/sampleService.js";

const createSample = async (req,res,next) => {
    try {
        let requ = req.body
        const result = await createdbSample(requ)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export {
    createSample
}