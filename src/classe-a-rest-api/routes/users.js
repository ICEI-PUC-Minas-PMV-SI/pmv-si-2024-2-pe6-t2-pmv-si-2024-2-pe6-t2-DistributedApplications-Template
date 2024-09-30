import express from 'express';

import verifyToken from '../middleware.js';
import UserController from '../controllers/users.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - email
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The user email
 *         role:
 *           type: string
 *           description: the permission rule of the user
 *       example:
 *         id: Lx2gPf5q5fhDoBtAf5j2KCemKkv2
 *         name: Alan Turing
 *         email: alan.turing@sga.pucminas.br
 *         role: Admin
 */

 /**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users controller of the API
 * paths:
 *   /users:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Lists all the users
 *       tags: [Users]
 *       responses:
 *         200:
 *           description: The list of the users
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *     post:
 *       security:
 *         - cookieAuth: []
 *       summary: Create a new user
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         200:
 *           description: The created user.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         500:
 *           description: Some server error
 *   /users/{id}:
 *     get:
 *       security:
 *         - cookieAuth: []
 *       summary: Get the user by id
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The user id
 *       responses:
 *         200:
 *           description: The user response by id
 *           contens:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         404:
 *           description: The user was not found
 *     patch:
 *       security:
 *          - cookieAuth: []
 *       summary: Update the user by the id
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The user id
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         200:
 *           description: The user was updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         404:
 *           description: The user was not found
 *         500:
 *           description: Some error happened
 *     delete:
 *       security:
 *         - cookieAuth: []
 *       summary: Remove the user by id
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The user id
 *  
 *       responses:
 *         200:
 *           description: The user was deleted
 *         404:
 *           description: The user was not found
 */

const router = express.Router();

router.get('/:id', verifyToken, UserController.getUser);

router.post('/', verifyToken, UserController.addUser);

router.patch('/:id', verifyToken, UserController.updateUser);

router.delete('/:id', verifyToken, UserController.deleteUser);

router.get('/', verifyToken, UserController.getAllUsers);

export default router;
