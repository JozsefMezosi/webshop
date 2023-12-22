"use client";

import { Input } from "@form/components";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { LoginUserDto, LoginUserResult } from "user-model";
import { authService } from "../../../services/axios/auth.service";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserDto>();

  const [, setCookies] = useCookies();

  const loginHandler = async (loginDto: LoginUserDto) => {
    try {
      const {
        data: {
          tokens: { refreshToken, token },
          userData,
        },
      } = await authService.post<LoginUserResult>("auth/login", loginDto);

      const now = new Date();
      const authTokenExp = new Date(now.getTime() + 10 * token.exp);
      const refreshTokenExp = new Date(now.getTime() + 10 * refreshToken.exp);

      setCookies("auth-token", token.value, { expires: authTokenExp });
      setCookies("refresh-token", refreshToken, { expires: refreshTokenExp });
      setCookies("user-first-name", userData.name.firstName);
      setCookies("user-last-name", userData.name.lastName);
    } catch (error) {
      console.log("todo ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(loginHandler)}>
      <Input {...register("email", { required: true })} />
      <Input {...register("password", { required: true })} />
      <button type="submit" className="">
        Login
      </button>
    </form>
  );
};
