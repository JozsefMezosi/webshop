import { TokenResult, TokenResultWithRoles, UserLoginResult } from "user-model";
import { authService } from "../service/axios/auth.service";
import { Session } from "../cookie-store/session";

export const refreshTokenAndReturnNewSession = async (
  refreshToken: TokenResult,
  oldSession: UserLoginResult
): Promise<UserLoginResult | undefined> => {
  try {
    const { data } = await authService.post<TokenResultWithRoles>(
      "auth/login",
      {},
      { headers: { refreshToken: refreshToken.value } }
    );

    const newSession = {
      tokens: {
        refreshToken: oldSession.tokens.refreshToken,
        authToken: { expire: data.expire, value: data.value },
      },
      userData: { ...oldSession.userData, roles: data.roles },
    };

    Session.setSession(newSession);
    return newSession;
  } catch {
    return undefined;
  }
};
