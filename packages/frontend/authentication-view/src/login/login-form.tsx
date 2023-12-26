"use client";

import { Input } from "@frontend/form-components";
import { useForm } from "react-hook-form";
import { LoginUserDto } from "user-model";
import { useUserLogin } from "./use-user-login";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserDto>();

  const loginHandler = useUserLogin();

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
