import { LoginUserResult } from "user-model";
import { USER_COOKIE_NAMES } from "../model/user-cookie-names.model";
import { cookies } from "next/headers";

export const getJwtTokenFromCookies = (
  tokenName: keyof LoginUserResult["tokens"]
) => {
  const cookieStore = cookies();
  return cookieStore.get(USER_COOKIE_NAMES[tokenName])?.value;
};
