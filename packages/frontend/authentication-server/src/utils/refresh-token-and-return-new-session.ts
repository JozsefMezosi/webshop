import { TokenResultWithRoles, UserLoginResult } from "@common/user-model";

export const refreshTokenAndReturnNewSession = async (
  oldSession: UserLoginResult
): Promise<UserLoginResult | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_SERVICE_URL}/auth/refresh`,
      {
        method: "POST",
        headers: { refreshToken: oldSession.tokens.refreshToken.value },
      }
    );

    const data = (await res.json()) as TokenResultWithRoles;

    const newSession = {
      tokens: {
        refreshToken: oldSession.tokens.refreshToken,
        authToken: { expire: data.expire, value: data.value },
      },
      userData: { ...oldSession.userData, roles: data.roles },
    };

    return newSession;
  } catch (error) {
    return undefined;
  }
};
