import { UserLoginResult, UserLoginDto } from "user-model";
import { authService } from "../service/axios/auth.service";
import { AxiosError } from "axios";
import { Session } from "../cookie-store/session";

export const login = async (loginDto: UserLoginDto) => {
  try {
    const { data } = await authService.post<UserLoginResult>(
      "auth/login",
      loginDto
    );

    Session.setSession(data);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.error);
    }
  }
};
