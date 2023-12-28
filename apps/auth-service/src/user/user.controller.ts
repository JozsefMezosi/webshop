import { Request, Response } from "express";
import { loginUser } from "./services/login-user";

import { registerUser } from "./services/register-user";
import { Controller } from "../utils/controller.decorator";
import { refreshToken } from "./services/refresh-token";

@Controller
export class UserController {
  async login(req: Request, res: Response) {
    const data = await loginUser(req.body);

    res.json(data);
  }

  async register(req: Request, res: Response) {
    await registerUser(req.body);

    res.json({ message: "User successfully registered." });
  }

  async refreshToken(req: Request, res: Response) {
    const tokenWithRoles = await refreshToken(req);

    res.json(tokenWithRoles);
  }
}
