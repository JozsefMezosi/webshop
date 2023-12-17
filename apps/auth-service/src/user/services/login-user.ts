import { findUserByEmail } from "../queries/find-user-by-email";
import { LoginUserDto } from "../model/user.model";
import { validateLoginUserData } from "../validation/login/validate-login-data";
import { ApiError } from "../../model/api-error";
import { HTTP_STATUS_CODES } from "../../model/http-status-codes";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async ({ email, password }: LoginUserDto) => {
  validateLoginUserData({ email, password });
  const user = await findUserByEmail(email);
  if (!user) {
    throw new ApiError(
      "Email or password doesn't match!",
      HTTP_STATUS_CODES["Bad Request"]
    );
  }

  const isPasswordCorrect = await compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new ApiError(
      "Email or password doesn't match!",
      HTTP_STATUS_CODES["Bad Request"]
    );
  }
  return jwt.sign({ email, roles: user.roles }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });
};
