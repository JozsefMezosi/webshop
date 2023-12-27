import { LoginUserDto } from "user-model";
import { ApiError } from "../../../model/api-error";
import { HTTP_STATUS_CODES } from "@common/http-status-codes";

import { validateLoginUserDtoSchema } from "./login-validation.schema";

export const validateLoginUserData = (data: LoginUserDto) => {
  const { error } = validateLoginUserDtoSchema.validate(data, {
    abortEarly: false,
  });
  if (error) {
    throw new ApiError(error.message, HTTP_STATUS_CODES["Bad Request"]);
  }
};
