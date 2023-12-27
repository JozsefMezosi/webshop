import { LoginUserDto, LoginUserResult } from "user-model";
import { authService } from "../service/axios/auth.service";
import { loginUser } from "../store/actions/login-user";
import { useSaveUserDataToCookies } from "./hooks/use-save-user-data-to-cookies";
import { useRouter } from "next/navigation";
import { useToast } from "@frontend/toast-context";
import { AxiosError } from "axios";
import { HTTP_STATUS_CODES } from "@common/http-status-codes";
import { UseFormSetError } from "react-hook-form";

const EmailOrPasswordMismatchMessage = "Email or password doesn't match!";
export const useUserLogin = (errorSetter: UseFormSetError<LoginUserDto>) => {
  const saveUserDataToCookies = useSaveUserDataToCookies();
  const toast = useToast();
  const router = useRouter();
  const loginHandler = async (loginDto: LoginUserDto) => {
    try {
      const { data } = await authService.post<LoginUserResult>(
        "auth/login",
        loginDto
      );

      loginUser(data);
      saveUserDataToCookies(data);
      router.push("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.status === HTTP_STATUS_CODES["Internal Server Error"]) {
          toast?.error(error.response?.data.error);
          return;
        }

        errorSetter("email", { message: EmailOrPasswordMismatchMessage });
        errorSetter("password", { message: EmailOrPasswordMismatchMessage });
      }
    }
  };

  return loginHandler;
};
