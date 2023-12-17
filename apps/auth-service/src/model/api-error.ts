/* eslint-disable no-unused-vars */
import { HTTP_STATUS_CODES } from "./http-status-codes";
import type { HTTP_STATUS_CODES as HTTP_STATUS_CODES_TYPE } from "./http-status-codes";

export class ApiError implements Error {
  name: string = "Api-error";
  stack?: string | undefined;
  cause?: unknown;

  constructor(
    readonly message: string,
    readonly statusCode: (typeof HTTP_STATUS_CODES)[HTTP_STATUS_CODES_TYPE]
  ) {}
}
