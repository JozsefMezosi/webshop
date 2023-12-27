import { Input, PrimaryButton } from "@frontend/form-components";
import { useForm } from "react-hook-form";
import { RegisterUserDto } from "user-model";
import {
  UserIcon,
  LockClosedIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRegisterUser } from "./user-register-user";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserDto>({ mode: "onSubmit" });
  const registerHandler = useRegisterUser();
  return (
    <div className="grid max-w-[60rem] m-auto">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="grid gap-5 justify-items-center"
      >
        <Input
          error={errors.email?.message}
          icon={<EnvelopeIcon />}
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format!",
            },
          })}
          containerClassName="w-96"
          placeholder="john.doe@email.com"
        />
        <Input
          error={errors.password?.message}
          icon={<LockClosedIcon />}
          {...register("password", {
            required: true,
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              message:
                "The password must contains at least 8 charters, one upper and one lower case letter and one number.",
            },
          })}
          containerClassName="w-96"
          type="password"
          placeholder="************"
        />
        <Input
          error={errors.firstName?.message}
          icon={<UserIcon />}
          {...register("firstName", { required: true })}
          containerClassName="w-96"
          placeholder="John"
        />
        <Input
          error={errors.lastName?.message}
          icon={<UserIcon />}
          {...register("lastName", { required: true })}
          containerClassName="w-96"
          placeholder="Doe"
        />
        <PrimaryButton type="submit" text="Register" />
      </form>

      <h2 className="text-center mt-8 text-sm  ">
        You have an account? Let's{" "}
        <Link href="/login" className="underline text-blue-400">
          sing you in!
        </Link>
      </h2>
    </div>
  );
};
