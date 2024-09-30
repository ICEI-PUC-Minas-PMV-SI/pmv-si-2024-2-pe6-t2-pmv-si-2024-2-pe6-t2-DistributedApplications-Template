import express from 'express';

import verifyToken from '../middleware.js';
import SocialCredentialsController from '../controllers/socialCredentials.js';

 /**
 * @swagger
 * tags:
 *   name: SocialCredentials
 *   description: The socialCredentials controller of the API
 * paths:
 *   /social-credentials:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Lists all the socialCredentials
 *       tags: [SocialCredentials]
 *       responses:
 *         200:
 *           description: The list of the socialCredentials
 */

const router = express.Router();

router.get('/', verifyToken, SocialCredentialsController.getAllSocialCredentials);

export default router;
