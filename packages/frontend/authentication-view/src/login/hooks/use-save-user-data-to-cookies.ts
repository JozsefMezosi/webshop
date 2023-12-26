import { useCookies } from "react-cookie";
import { LoginUserResult } from "user-model";
import { USER_COOKIE_NAMES } from "../../model/user-cookie-names.model";

export const useSaveUserDataToCookies = () => {
  const [, setCookies] = useCookies();

  const saveUserDataToCookies = ({
    tokens: { refreshToken, authToken: token },
    userData: {
      name: { firstName, lastName },
    },
  }: LoginUserResult) => {
    setCookies(USER_COOKIE_NAMES.authToken, token.value, {
      expires: new Date(token.exp),
    });
    setCookies(USER_COOKIE_NAMES.refreshToken, refreshToken, {
      expires: new Date(refreshToken.exp),
    });
    setCookies(USER_COOKIE_NAMES.userFirstName, firstName);
    setCookies(USER_COOKIE_NAMES.userLastName, lastName);
  };

  return saveUserDataToCookies;
};
