import { LoginUserResult, UserRoles } from "user-model";
import { createAuthToken } from "./create-auth-token";
import { signJwt } from "./sign-jwt";

interface CreateAuthAndRefreshTokensProps {
  email: string;
  roles: UserRoles;
}
export const createAuthAndRefreshTokens = ({
  email,
  roles,
}: CreateAuthAndRefreshTokensProps): LoginUserResult["tokens"] => {
  const token = createAuthToken({ email, roles });
  const refreshToken = signJwt({
    payload: { email },
    subject: email,
    expiresIn: process.env.JWT_EXP_IN_SECONDS,
  });

  return {
    token: { value: token, exp: parseInt(process.env.JWT_EXP_IN_SECONDS) },
    refreshToken: {
      value: refreshToken,
      exp: parseInt(process.env.JWT_REFRESH_TOKEN_EXP_IN_SECONDS),
    },
  };
};
