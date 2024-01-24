import express from 'express';
const router = express.Router();
import mathRoute from './math.route';

router.use('/math', mathRoute);

export default router;
