import { Request, Response, NextFunction } from 'express';
import redisClient from '../config/redis.config';
import {
  SuccessMsgResponse,
  SuccessResponse,
} from '../helpers/response.helper';

const cacheMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const key =
    `${req.originalUrl}.${JSON.stringify(req.body)}` ||
    `${req.url}.${JSON.stringify(req.body)}`;
  console.log(key);

  try {
    const cachedData = await redisClient.get(key);
    if (cachedData) {
      return SuccessResponse(res, parseInt(cachedData));
    } else {
      // Continue with the next middleware/route handler
      next();
    }
  } catch (error) {
    console.error('Error checking cache:', error);
    next();
  }
};

export default cacheMiddleware;
