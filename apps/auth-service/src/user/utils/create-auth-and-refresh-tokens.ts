import { UserLoginResult, UserRoles } from "@common/user-model";
import { createAuthToken } from "./create-auth-token";
import { signJwt } from "./sign-jwt";
import { getExpireDate } from "./get-expire-date";

interface CreateAuthAndRefreshTokensProps {
  email: string;
  roles: UserRoles[];
}

export const createAuthAndRefreshTokens = ({
  email,
  roles,
}: CreateAuthAndRefreshTokensProps): UserLoginResult["tokens"] => {
  const jwtExp = parseInt(process.env.JWT_EXP_IN_SECONDS);
  const refreshTokenExpInSeconds = parseInt(
    process.env.JWT_REFRESH_TOKEN_EXP_IN_SECONDS
  );
  const token = createAuthToken({ email, roles });
  const refreshToken = signJwt({
    payload: { email },
    subject: email,
    expiresIn: refreshTokenExpInSeconds,
  });

  const now = new Date();
  const authTokenExp = getExpireDate({ now, secondsToAdd: jwtExp });

  const refreshTokenExp = getExpireDate({
    now,
    secondsToAdd: refreshTokenExpInSeconds,
  });
  return {
    authToken: { value: token, expire: authTokenExp.getTime() },
    refreshToken: {
      value: refreshToken,
      expire: refreshTokenExp.getTime(),
    },
  };
};
