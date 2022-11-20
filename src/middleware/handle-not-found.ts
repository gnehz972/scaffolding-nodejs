import { Request, Response } from "express";
import { ErrorResponse } from "./exception/error-response";
import { logger } from "../util/logger";

export const handleNotFound = (request: Request, response: Response<ErrorResponse>) => {
  logger.error(`404 Error! Request path ${request.path}`);
  response.status(404).send({
    message: "Not Found",
    timestamp: new Date().toISOString(),
    path: request.path,
  });
};
