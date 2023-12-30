import { UserLoginResult } from "@common/user-model";
import { getSessionFromCookies } from "../utils/get-session-from-cookies";
import { refreshTokenAndReturnNewSession } from "../utils/refresh-token-and-return-new-session";

export const getSession = async (): Promise<UserLoginResult | undefined> => {
  let session = getSessionFromCookies();
  if (!session) {
    return undefined;
  }

  const {
    tokens: { authToken },
  } = session;

  if (authToken.expire <= Date.now()) {
    return session;
  }

  return await refreshTokenAndReturnNewSession(session);
};
