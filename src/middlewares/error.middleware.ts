import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';

export const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  const message = err.status ? err.message : 'Lỗi hệ thống nội bộ, vui lòng thử lại sau';

  res.status(statusCode).json({
    success: false,
    message: message,
  });
};