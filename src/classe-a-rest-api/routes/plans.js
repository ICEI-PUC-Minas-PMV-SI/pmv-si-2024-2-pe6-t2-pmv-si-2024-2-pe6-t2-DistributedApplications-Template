import express from 'express';

import verifyToken from '../middleware.js';
import PlansController from '../controllers/plans.js';

 /**
 * @swagger
 * tags:
 *   name: Plans
 *   description: The plans controller of the API
 * paths:
 *   /plans:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Lists all the plans
 *       tags: [Plans]
 *       responses:
 *         200:
 *           description: The list of the plans
 */

const router = express.Router();

router.get('/', verifyToken, PlansController.getAllPlans);

export default router;
