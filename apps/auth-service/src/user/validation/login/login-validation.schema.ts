import Joi from "joi";
import { LoginUserDto } from "user-model";

export const validateLoginUserDtoSchema = Joi.object<LoginUserDto>({
  email: Joi.string().max(256).email().required().trim(),
  password: Joi.string().min(8).max(256).required().trim(),
});
