import { validateLoginUserData } from "../validation/login/validate-login-data";
import { createAuthAndRefreshTokens } from "../utils/create-auth-and-refresh-tokens";
import { getUser } from "../utils/get-user";
import { LoginUserDto, UserLoginResult } from "@common/user-model";

export const loginUser = async (
  loginDto: LoginUserDto
): Promise<UserLoginResult> => {
  validateLoginUserData({ email: loginDto.email, password: loginDto.password });

  const user = await getUser(loginDto);

  return {
    tokens: createAuthAndRefreshTokens(user),
    userData: {
      email: user.email,
      roles: user.roles,
      name: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    },
  };
};
