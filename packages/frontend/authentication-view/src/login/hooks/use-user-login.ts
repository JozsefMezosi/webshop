import { LoginUserDto } from "user-model";
import { useRouter } from "next/navigation";
import { useToast } from "@frontend/toast-context";
import { AxiosError } from "axios";
import { HTTP_STATUS_CODES } from "@common/http-status-codes";
import { UseFormSetError } from "react-hook-form";
import { signIn } from "next-auth/react";

const EmailOrPasswordMismatchMessage = "Email or password doesn't match!";
export const useUserLogin = (errorSetter: UseFormSetError<LoginUserDto>) => {
  const toast = useToast();
  const router = useRouter();
  const loginHandler = async (loginDto: LoginUserDto) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        ...loginDto,
      });

      if (!res) {
        toast.error("Something went wrong, please try again later!");
        return;
      }

      const { ok } = res;
      if (!ok) {
        errorSetter("email", { message: EmailOrPasswordMismatchMessage });
        errorSetter("password", { message: EmailOrPasswordMismatchMessage });
        return;
      }

      router.push("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.status === HTTP_STATUS_CODES["Internal Server Error"]) {
          toast.error(error.response?.data.error);
          return;
        }
      }
    }
  };

  return loginHandler;
};
