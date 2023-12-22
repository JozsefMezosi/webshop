import { User } from "next-auth";
import { LoginUserDto } from "user-model";
import { authService } from "../axios/auth.service";

export const loginUser = async (loginDto: LoginUserDto): Promise<User> => {
  const { data } = await authService.post("auth/login", loginDto);
  console.log(data);

  return data;
};
