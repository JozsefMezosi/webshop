import { TokenResult } from "user-model";
import { authService } from "../service/axios/auth.service";
import { setAuthToken } from "../store/actions/set-auth-token";

export const refreshAuthToken = async (refreshToken: string | undefined) => {
  if (!refreshToken) {
    return undefined;
  }
  const {
    data: { token },
  } = await authService.post<{ token: TokenResult }>(
    "auth/refresh",
    {},
    { headers: { refreshToken } }
  );
  setAuthToken(token.value, token.exp);

  return token.value;
};
