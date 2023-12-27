import { ApiError } from "./api-error";

import { HTTP_STATUS_CODES } from "@common/http-status-codes";

export const forbiddenError = new ApiError(
  "Access Denied.",
  HTTP_STATUS_CODES.Forbidden
);
