import { cookies } from "next/headers";
import { UserLoginResult } from "user-model";
import { UserLoginResultCookieName } from "../models/user-session-cookie-name";

export const getSessionFromCookies = () => {
  const session = cookies().get(UserLoginResultCookieName)?.value;

  if (!session) {
    return undefined;
  }

  return JSON.parse(session) as UserLoginResult;
};
