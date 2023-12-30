import { LoginUserDto } from "@common/user-model";
import { useRouter } from "next/navigation";
import { useToast } from "@frontend/toast-context";
import { UseFormSetError } from "react-hook-form";
import { login } from "../../../../authentication/src";

const EmailOrPasswordMismatchMessage = "Email or password doesn't match!";

export const useUserLogin = (errorSetter: UseFormSetError<LoginUserDto>) => {
  const toast = useToast();
  const router = useRouter();
  const loginHandler = async (loginDto: LoginUserDto) => {
    try {
      await login(loginDto);
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return loginHandler;
};
