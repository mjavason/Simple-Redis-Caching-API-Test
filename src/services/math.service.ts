import { MESSAGES } from '../constants';
import { calculateFactorial } from '../helpers/math.helper';
import { factorial } from '../utils/factorial';

class MathService {
  async calculateFactorial(number: number) {
    return await factorial(number);
  }
}

export const mathService = new MathService();
