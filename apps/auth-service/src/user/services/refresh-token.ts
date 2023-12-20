import { Request } from "express";
import { findUserByEmail } from "../queries/find-user-by-email";
import { forbiddenError } from "../../model/forbidden-error";
import { verifyJwt } from "../utils/verify-jwt";
import { createAuthToken } from "../utils/create-auth-token";

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

  return createAuthToken({ email: user.email, roles: user.roles });
};
