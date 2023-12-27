"use client";
import { useRouter } from "next/navigation";
import { LoginForm } from "./login-form";
import { useAuthToken } from "../api/use-auth-token";

export const LoginPage = () => {
  const router = useRouter();
  const token = useAuthToken();
  if (token) {
    router.push("/");
  }
  return (
    <div className="flex-row items-center h-screen">
      <h1 className="text-center text-[2rem] pt-24 pb-32">
        Good to see you back!
      </h1>
      <LoginForm />
    </div>
  );
};
