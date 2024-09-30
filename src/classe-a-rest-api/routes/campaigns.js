import express from 'express';

import verifyToken from '../middleware.js';
import CampaignController from '../controllers/campaigns.js';

 /**
 * @swagger
 * tags:
 *   name: Campaigns
 *   description: The campaigns controller of the API
 * paths:
 *   /campaigns:
 *     get:
 *       summary: Lists all the campaigns
 *       tags: [Campaigns]
 *       responses:
 *         200:
 *           description: The list of the campaigns
 */

const router = express.Router();

router.get('/', verifyToken, CampaignController.getAllCampaigns);

export default router;
