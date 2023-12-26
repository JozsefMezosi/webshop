import { Request } from "express";
import { findUserByEmail } from "../queries/find-user-by-email";
import { forbiddenError } from "../../model/forbidden-error";
import { verifyJwt } from "../utils/verify-jwt";
import { createAuthToken } from "../utils/create-auth-token";
import { getExpireDate } from "../utils/get-expire-date";

export const refreshToken = async (req: Request) => {
  const refreshToken = req.header("refreshToken");
  if (!refreshToken) {
    throw forbiddenError;
  }

  const decoded = verifyJwt(refreshToken);

  if (typeof decoded === "string" || !decoded.sub) {
    throw forbiddenError;
  }

  const user = await findUserByEmail(decoded.sub);
  if (!user) {
    throw forbiddenError;
  }

  const now = new Date();
  const jwtExp = parseInt(process.env.JWT_EXP_IN_SECONDS);
  const authTokenExp = getExpireDate({ now, secondsToAdd: jwtExp });
  return {
    value: createAuthToken({ email: user.email, roles: user.roles }),
    exp: authTokenExp,
  };
};
