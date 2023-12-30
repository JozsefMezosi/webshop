"use client";

import { Input, PrimaryButton } from "@frontend/form-components";
import { useForm } from "react-hook-form";
import { LoginUserDto } from "@common/user-model";
import { useUserLogin } from "./hooks/use-user-login";
import Link from "next/link";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginUserDto>();

  const loginHandler = useUserLogin(setError);

  return (
    <div className="grid lg:grid-cols-2 max-w-[60rem] m-auto">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="grid gap-5 justify-items-center lg:py-14 lg:border-r-2"
      >
        <h2 className="text-center text-lg pb-5">Let's sign you in!</h2>
        <Input
          error={errors.email?.message}
          icon={<EnvelopeIcon />}
          {...register("email", { required: true })}
          containerClassName="w-96"
          placeholder="john.doe@email.com"
        />
        <Input
          error={errors.password?.message}
          icon={<LockClosedIcon />}
          {...register("password", { required: true })}
          containerClassName="w-96"
          type="password"
          placeholder="************"
        />
        <PrimaryButton type="submit" text="Login" />
      </form>

      <h2 className="text-center mt-8 lg:my-auto text-sm lg:text-lg ">
        You don't have an account? Let's{" "}
        <Link href="/register" className="underline text-blue-400">
          sing you up!
        </Link>
      </h2>
    </div>
  );
};
