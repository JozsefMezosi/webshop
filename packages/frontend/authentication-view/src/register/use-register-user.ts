import { RegisterUserDto } from "@common/user-model";
import { useRouter } from "next/navigation";
import { useToast } from "@frontend/toast-context";
import { registerUser } from "../../../authentication/src";
export const useRegisterUser = () => {
  const toast = useToast();
  const router = useRouter();
  const registerHandler = async (registerDto: RegisterUserDto) => {
    try {
      await registerUser(registerDto);
      router.push("/login");
      toast.success("Successfully registered!");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        return;
      }
    }
  };

  return registerHandler;
};
