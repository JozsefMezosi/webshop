import { validateLoginUserData } from "../validation/login/validate-login-data";
import { createAuthAndRefreshTokens } from "../utils/create-auth-and-refresh-tokens";
import { getUser } from "../utils/get-user";
import { LoginUserDto, LoginUserResult } from "user-model";

export const loginUser = async (
  loginDto: LoginUserDto
): Promise<LoginUserResult> => {
  validateLoginUserData(loginDto);

  const user = await getUser(loginDto);

  return {
    tokens: createAuthAndRefreshTokens(user),
    userData: {
      name: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    },
  };
};
