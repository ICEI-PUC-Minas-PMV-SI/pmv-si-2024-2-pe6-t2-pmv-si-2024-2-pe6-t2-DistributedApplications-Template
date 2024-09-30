import express from 'express';

import verifyToken from '../middleware.js';
import ClientController from '../controllers/clients.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     client:
 *       type: object
 *       required:
 *         - id
 *         - companyName
 *         - contactInfo
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the client
 *         companyName:
 *           type: string
 *           description: The company name of the client
 *         contactInfo:
 *           type: string
 *           description: The client contact infos
 *         userId:
 *           type: string
 *           description: the client registered user id 
 *         contractUrl:
 *           type: string
 *           description: the url of the contract 
 *         planId:
 *           type: string
 *           description: the id of the plan contracted by the client
 *       example:
 *         id: q5w4d4qd6w4q6wd465qdw
 *         companyName: Enigma
 *         contactInfo: alan.turing@sga.pucminas.br
 *         userId: Lx2gPf5q5fhDoBtAf5j2KCemKkv2
 *         contractUrl: https://someurl.com/some-file.pdf
 *         planId: basic-plan-instagram
 */

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
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/client'
 *     post:
 *       security:
 *         - cookieAuth: []
 *       summary: Create a new client
 *       tags: [Clients]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/client'
 *       responses:
 *         200:
 *           description: The created client.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/client'
 *         500:
 *           description: Some server error
 *   /clients/{id}:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Get the client by id
 *       tags: [Clients]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The client id
 *       responses:
 *         200:
 *           description: The client response by id
 *           contens:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/client'
 *         404:
 *           description: The client was not found
 *     patch:
 *       security:
 *          - cookieAuth: []
 *       summary: Update the client by the id
 *       tags: [Clients]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The client id
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/client'
 *       responses:
 *         200:
 *           description: The client was updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/client'
 *         404:
 *           description: The client was not found
 *         500:
 *           description: Some error happened
 *     delete:
 *       security:
 *         - cookieAuth: []
 *       summary: Remove the client by id
 *       tags: [Clients]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The client id
 *  
 *       responses:
 *         200:
 *           description: The client was deleted
 *         404:
 *           description: The client was not found
 */

const router = express.Router();

router.get('/:id', verifyToken, ClientController.getClient);

router.post('/', verifyToken, ClientController.addClient);

router.patch('/:id', verifyToken, ClientController.updateClient);

router.delete('/:id', verifyToken, ClientController.deleteClient);

router.get('/', verifyToken, ClientController.getAllClients);

export default router;
