import { ApiError } from "../../../model/api-error";
import { HTTP_STATUS_CODES } from "../../../model/http-status-codes";
import { LoginUserDto } from "../../model/user.model";
import { validateLoginUserDtoSchema } from "./login-validation.schema";

export const validateLoginUserData = (data: LoginUserDto) => {
  const { error } = validateLoginUserDtoSchema.validate(data, {
    abortEarly: false,
  });
  if (error) {
    throw new ApiError(error.message, HTTP_STATUS_CODES["Bad Request"]);
  }
};
