import { LoginUserDto } from "@common/user-model";
import { useRouter } from "next/navigation";
import { useToast } from "@frontend/toast-context";
import { UseFormSetError } from "react-hook-form";
import { login } from "../../../../authentication/src";
import { AxiosError } from "axios";
import { HTTP_STATUS_CODES } from "@common/http-status-codes";

const EmailOrPasswordMismatchMessage = "Email or password doesn't match!";

export const useUserLogin = (errorSetter: UseFormSetError<LoginUserDto>) => {
  const toast = useToast();
  const router = useRouter();
  const loginHandler = async (loginDto: LoginUserDto) => {
    try {
      await login(loginDto);
      router.push("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === HTTP_STATUS_CODES["Bad Request"]) {
          errorSetter("email", { message: EmailOrPasswordMismatchMessage });
          errorSetter("password", { message: EmailOrPasswordMismatchMessage });
          return;
        }
      }

      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return loginHandler;
};
