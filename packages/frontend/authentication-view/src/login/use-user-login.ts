import { LoginUserDto, LoginUserResult } from "user-model";
import { authService } from "../service/axios/auth.service";
import { loginUser } from "../store/actions/login-user";
import { useSaveUserDataToCookies } from "./hooks/use-save-user-data-to-cookies";
import { useRouter } from "next/navigation";

export const useUserLogin = () => {
  const saveUserDataToCookies = useSaveUserDataToCookies();
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
      console.log("todo ", error);
    }
  };

  return loginHandler;
};
