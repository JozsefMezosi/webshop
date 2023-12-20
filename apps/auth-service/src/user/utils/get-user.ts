import { compare } from "bcrypt";
import { ApiError } from "../../model/api-error";
import { HTTP_STATUS_CODES } from "../../model/http-status-codes";
import { LoginUserDto } from "../model/user.model";
import { findUserByEmail } from "../queries/find-user-by-email";

export const getUser = async ({ email, password }: LoginUserDto) => {
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

  return user;
};
