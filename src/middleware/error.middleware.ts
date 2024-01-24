import { Request, Response, NextFunction } from 'express';
import { InternalErrorResponse } from '../helpers/response.helper';

export default (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = `${error.name}: ${error.message}`;
  console.log(message);

  console.log(error.stack);
  return InternalErrorResponse(res, error.message);
};
