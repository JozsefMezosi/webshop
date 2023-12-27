import { LoginForm } from "./login-form";

export const LoginPage = () => {
  return (
    <div className="flex-row items-center h-screen">
      <h1 className="text-center text-[2rem] pt-24 pb-32">
        Good to see you back!
      </h1>
      <LoginForm />
    </div>
  );
};
