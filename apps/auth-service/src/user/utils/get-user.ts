import { compare } from "bcrypt";
import { ApiError } from "../../model/api-error";
import { HTTP_STATUS_CODES } from "@common/http-status-codes";
import { findUserByEmail } from "../queries/find-user-by-email";
import { LoginUserDto } from "@common/user-model";

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
