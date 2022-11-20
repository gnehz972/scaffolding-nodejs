import { NextFunction, Request, Response } from "express";
import { ErrorCode, ErrorResponse } from "./exception/error-response";
import { BusinessException } from "./exception/business-exception";
import { ApplicationException } from "./exception/application-exception";
import { ValidateError } from "@tsoa/runtime";
import { logger } from "../util/logger";

type GlobalException = (BusinessException & ApplicationException & Error) | ValidateError;

export const handleGlobalException = (
  exception: GlobalException,
  request: Request,
  response: Response<ErrorResponse>,
  next: NextFunction
) => {
  logger.error(exception, "Error happen!");
  const status = exception.status || 500;
  if (exception instanceof ValidateError) {
    let errorMsg = exception.message;
    if (!errorMsg && exception.fields) {
      errorMsg = Object.values(exception.fields)[0].message ?? "";
    }
    response.status(status).send({
      timestamp: new Date().toISOString(),
      message: errorMsg,
      errorCode: ErrorCode.VALIDATION_ERROR,
    });
  } else {
    response.status(status).send({
      timestamp: new Date().toISOString(),
      path: request.path,
      message: exception.message,
      errorCode: exception.errorCode,
    });
  }
  next();
};
