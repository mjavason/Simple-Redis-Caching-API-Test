/**
 * @swagger
 * tags:
 *   - name: Math Formulas
 *     description: Endpoints for various math formulas
 */

/**
 * @swagger
 * paths:
 *   /math/factorial-calculation:
 *     post:
 *       summary: Calculate factorial
 *       description: |
 *         This endpoint allows you to calculate the factorial of a given number.
 *       tags:
 *         - Math Formulas
 *       requestBody:
 *         description: Number for factorial calculation
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 number:
 *                   type: integer
 *                   description: Number for factorial calculation
 *               required:
 *                 - number
 *       responses:
 *         '200':
 *           description: Successfully calculated the factorial
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   result:
 *                     type: integer
 *                     description: Factorial result
 *         '400':
 *           description: Bad request, please provide a valid number
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 */
