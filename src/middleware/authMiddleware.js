import jwt from 'jsonwebtoken';
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/responseError.js";

const authMiddleware = async (req,res,next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if(!token) {
        throw new ResponseError(401, "Login first to access this resource")
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await prismaClient.users.findFirst({
        where: {
            token: token
        }
    })

    next();
}

export {
    authMiddleware
}