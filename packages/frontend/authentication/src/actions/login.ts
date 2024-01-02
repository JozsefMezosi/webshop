import { UserLoginResult, UserLoginDto } from "@common/user-model";
import { authService } from "../service/axios/auth.service";
import { Session } from "../cookie-store/session";

export const login = async (loginDto: UserLoginDto) => {
  const { data } = await authService.post<UserLoginResult>(
    "auth/login",
    loginDto
  );

  Session.setSession(data);
};
