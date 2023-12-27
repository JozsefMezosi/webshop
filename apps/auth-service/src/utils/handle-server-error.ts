import { NextFunction, Response, Request } from "express";
import { logger } from "logger";
import { ApiError } from "../model/api-error";
import { HTTP_STATUS_CODES } from "@common/http-status-codes";

export const handleServerError = (
  error: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars -- if the next prop is not present then express doesn't recognize this as a middleware
  next: NextFunction
) => {
  res
    .status(
      error instanceof ApiError
        ? error.statusCode
        : HTTP_STATUS_CODES["Internal Server Error"]
    )
    .json({ error: error.message.replaceAll('"', "'") });
  logger.error(error);
};
