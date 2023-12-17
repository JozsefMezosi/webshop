import { NextFunction, Request, Response } from "express";
import { logger } from "logger";

export const logRequestInfo = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  logger.info(`Request info: url: ${req.url}, method: ${req.method}`);

  next();
};
