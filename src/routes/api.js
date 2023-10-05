import express from "express";
import { createSample } from "../controllers/sampleController.js";
import { registerUser, loginUser } from "../controllers/userController.js";

const apiRouter = new express.Router();

apiRouter.post('/api/sample', createSample);

//register
apiRouter.post('/api/register', registerUser);

//login
apiRouter.post('/api/login',loginUser);

export {
    apiRouter
}