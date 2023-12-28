"use client";
import { RegisterForm } from "./register-form";

export const RegisterPage = () => {
  return (
    <div className="flex-row items-center h-screen">
      <h1 className="text-center text-[2rem] pt-24 pb-32">
        Let's sign you up!
      </h1>
      <RegisterForm />
    </div>
  );
};
