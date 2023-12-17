import { Router } from "express";
import { UserController } from "./user.controller";

export const userRouter: Router = Router();
export const userController = new UserController();

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);
