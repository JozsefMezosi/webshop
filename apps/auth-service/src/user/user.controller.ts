import { Request, Response } from "express";
import { loginUser } from "./services/login-user";

import { registerUser } from "./services/register-user";
import { Controller } from "../utils/controller.decorator";

@Controller
export class UserController {
  async login(req: Request, res: Response) {
    const token = await loginUser(req.body);

    res.json({ token });
  }

  async register(req: Request, res: Response) {
    await registerUser(req.body);

    res.json({ msg: "User successfully registered." });
  }
}
