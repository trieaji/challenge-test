import express from "express";
import { clockinUser } from "../controllers/clockInController.js";
import { clockOutUser } from "../controllers/clockOutController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const authRouter = new express.Router();
authRouter.use(authMiddleware)

//clock in api
authRouter.post('/api/clokin', clockinUser)

//clock out api
authRouter.post('/api/clockout', clockOutUser)

export {
    authRouter
}