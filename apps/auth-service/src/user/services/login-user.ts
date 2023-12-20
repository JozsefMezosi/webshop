import { LoginUserDto } from "../model/user.model";
import { validateLoginUserData } from "../validation/login/validate-login-data";
import { createAuthAndRefreshTokens } from "../utils/create-auth-and-refresh-tokens";
import { getUser } from "../utils/get-user";

export const loginUser = async (loginDto: LoginUserDto) => {
  validateLoginUserData(loginDto);

  const user = await getUser(loginDto);

  return createAuthAndRefreshTokens(user);
};
