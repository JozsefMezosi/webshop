import { getJwtTokenFromCookies } from "../utils/get-jwt-token-from-cookies";
import { refreshAuthToken } from "../utils/refresh-auth-token";
export const getAuthToken = async () => {
  let authToken = getJwtTokenFromCookies("authToken");

  if (!authToken) {
    let refreshToken = getJwtTokenFromCookies("refreshToken");
    return await refreshAuthToken(refreshToken);
  }

  return authToken;
};
