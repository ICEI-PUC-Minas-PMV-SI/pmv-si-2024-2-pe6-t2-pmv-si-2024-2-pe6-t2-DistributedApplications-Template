import express from 'express';

import verifyToken from '../middleware.js';
import ClientController from '../controllers/clients.js';

 /**
 * @swagger
 * tags:
 *   name: Clients
 *   description: The clients controller of the API
 * paths:
 *   /clients:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Lists all the clients
 *       tags: [Clients]
 *       responses:
 *         200:
 *           description: The list of the clients
 */

const router = express.Router();

router.get('/', verifyToken, ClientController.getAllClients);

export default router;
