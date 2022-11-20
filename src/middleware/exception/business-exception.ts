import { ErrorCode } from "./error-response";

export class BusinessException extends Error {
  errorCode?: ErrorCode;
  status: number;

  constructor(message: string, errorCode?: ErrorCode) {
    super(message);
    this.errorCode = errorCode;
    this.status = 400;
  }
}
