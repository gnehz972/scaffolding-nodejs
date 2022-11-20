export interface ErrorResponse {
  errorCode?: string;
  message?: string;
  path?: string;
  timestamp: string;
}

export enum ErrorCode {
  VALIDATION_ERROR = "01",
}
