import { RegisterUserDto } from "../../model/user.model";
import { validateUserRegisterDataSchema } from "./register-validation.schema";

export const validateRegistrationData = async (userData: RegisterUserDto) =>
  await validateUserRegisterDataSchema.validateAsync(userData, {
    abortEarly: false,
  });
