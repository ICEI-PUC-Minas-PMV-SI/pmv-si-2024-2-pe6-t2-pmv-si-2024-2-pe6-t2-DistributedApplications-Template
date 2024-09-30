import express from 'express';

import verifyToken from '../middleware.js';
import PostCreativeController from '../controllers/postCreatives.js';

 /**
 * @swagger
 * tags:
 *   name: PostCreatives
 *   description: The postCreatives controller of the API
 * paths:
 *   /post-creatives:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Lists all the postCreatives
 *       tags: [PostCreatives]
 *       responses:
 *         200:
 *           description: The list of the postCreatives
*/

const router = express.Router();

router.get('/', verifyToken, PostCreativeController.getAllPostCreatives);

export default router;
