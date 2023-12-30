import { RegisterUserDto } from "@common/user-model";
import { authService } from "../service/axios/auth.service";
import { AxiosError } from "axios";

export const registerUser = async (registerDto: RegisterUserDto) => {
  try {
    await authService.post("auth/register", registerDto);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data.error;
    }
  }
};
