import { RegisterUserDto } from "user-model";
import { useRouter } from "next/navigation";
import { useToast } from "@frontend/toast-context";
import { AxiosError } from "axios";
import { authService } from "../service/axios/auth.service";

export const useRegisterUser = () => {
  const toast = useToast();
  const router = useRouter();
  const registerHandler = async (registerDto: RegisterUserDto) => {
    try {
      await authService.post("auth/register", registerDto);

      router.push("/login");
      toast.success("Successfully registered!");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error);
        return;
      }
    }
  };

  return registerHandler;
};
