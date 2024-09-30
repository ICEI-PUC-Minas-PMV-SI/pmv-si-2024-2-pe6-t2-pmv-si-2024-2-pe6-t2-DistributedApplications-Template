import express from 'express';

import verifyToken from '../middleware.js';
import PaymentController from '../controllers/payments.js';

 /**
 * @swagger
 * tags:
 *   name: Payments
 *   description: The payments controller of the API
 * paths:
 *   /payments:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Lists all the payments
 *       tags: [Payments]
 *       responses:
 *         200:
 *           description: The list of the payments
 */

const router = express.Router();

router.get('/', verifyToken, PaymentController.getAllPayments);

export default router;
