import { Request, Response } from 'express';
import { mathService } from '../services'; // Import your math service
import {
  SuccessResponse,
  InternalErrorResponse,
} from '../helpers/response.helper';
import redisClient from '../config/redis.config';
import { REDIS_OPTIONS } from '../constants';

class MathController {
  async calculateFactorial(req: Request, res: Response) {
    try {
      const { number } = req.body;
      const result = await mathService.calculateFactorial(parseInt(number));

      try {
        // Save data to cache
        const key =
          `${req.originalUrl}.${JSON.stringify(req.body)}` ||
          `${req.url}.${JSON.stringify(req.body)}`;
        redisClient.set(key, result, REDIS_OPTIONS);
      } catch (e: any) {
        console.error('Failed to save request to Redis', e.message);
      }

      return SuccessResponse(
        res,
        result,
        `The factorial of ${number} has been calculated successfully.`
      );
    } catch (error: any) {
      return InternalErrorResponse(res, error.message);
    }
  }
}

export const mathController = new MathController(); // Instantiate your math service
