"use client";

import { Input } from "@form/components";
import { useForm } from "react-hook-form";
import { LoginUserDto } from "user-model";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserDto>();
  const test = (data: LoginUserDto) => {
    console.log({ data });
  };
  return (
    <form onSubmit={handleSubmit(test)}>
      <Input {...register("email", { required: true })} />
      <button type="submit" className="">
        Login
      </button>
    </form>
  );
};
