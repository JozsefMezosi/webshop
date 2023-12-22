import { UserRoles } from "user-model";
import { createAuthToken } from "./create-auth-token";
import { signJwt } from "./sign-jwt";

interface CreateAuthAndRefreshTokensProps {
  email: string;
  roles: UserRoles;
}
export const createAuthAndRefreshTokens = ({
  email,
  roles,
}: CreateAuthAndRefreshTokensProps) => {
  const token = createAuthToken({ email, roles });
  const refreshToken = signJwt({
    payload: { email },
    subject: email,
    expiresIn: process.env.JWT_EXP,
  });

  return {
    token,
    refreshToken,
  };
};
