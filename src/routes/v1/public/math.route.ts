import { Router } from 'express';
import { mathController } from '../../../controllers';
import { validateBodyDTO } from '../../../middleware/body.validation.middleware';
import { FactorialCalculationDto } from '../../../validation/math.validation';

const router = Router();

router.post(
  '/factorial-calculation',
  validateBodyDTO(FactorialCalculationDto),
  mathController.calculateFactorial
);

export default router;
