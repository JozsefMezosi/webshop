import { RegisterUserDto } from "user-model";
import { createUser } from "../queries/create-user";
import { validateRegistrationData } from "../validation/register/validate-registration-data";
import { hash } from "bcrypt";
export const registerUser = async (userData: RegisterUserDto) => {
  await validateRegistrationData(userData);

  const hashedPassword = await hash(userData.password, 10);

  await createUser({ ...userData, password: hashedPassword });
};
