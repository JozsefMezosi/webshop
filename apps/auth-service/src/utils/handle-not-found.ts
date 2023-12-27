import { NextFunction, Request, Response } from "express";
import { logger } from "logger";
import { ApiError } from "../model/api-error";
import { HTTP_STATUS_CODES } from "@common/http-status-codes";

export const handleNotFound = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  logger.info(`Requested page not found ${req.url}`);
  next(
    new ApiError("Requested page not found!", HTTP_STATUS_CODES["Not Found"])
  );
};
