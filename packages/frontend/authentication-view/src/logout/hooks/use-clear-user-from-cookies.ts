import { useCallback } from "react";
import { useCookies } from "react-cookie";
import { USER_COOKIE_NAMES } from "../../model/user-cookie-names.model";

export const useClearUserFromCookies = () => {
  const [, , removeCookie] = useCookies();

  const clearUserFromCookies = useCallback(() => {
    removeCookie(USER_COOKIE_NAMES.authToken);
    removeCookie(USER_COOKIE_NAMES.refreshToken);
    removeCookie(USER_COOKIE_NAMES.userFirstName);
    removeCookie(USER_COOKIE_NAMES.userLastName);
  }, []);

  return clearUserFromCookies;
};
