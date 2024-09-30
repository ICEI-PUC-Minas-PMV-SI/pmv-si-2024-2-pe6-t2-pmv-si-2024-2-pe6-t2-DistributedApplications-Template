import express from 'express';

import AuthenticationController from "../controllers/authentication.js";


/**
 * @swagger
 * components:
 *   schemas:
 *     Authentication:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The user email
 *         password:
 *           type: string
 *           description: the user password
 *       example:
 *         email: alan.turing@sga.pucminas.br
 *         password: eixo6@2024
 *
 * tags:
 *   name: Authentication
 *   description: The authentication controller of the API
 * /signup:
 *   post:
 *     summary: Create a new user credentials to access the system
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Authentication'
 *     responses:
 *       200:
 *         description: The created user Id.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Authentication'
 *       500:
 *         description: Some server error
 * /login:
 *   post:
 *     summary: Logs an existing user into the system
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Authentication'
 *     security: []
 *     responses:
 *       200:
 *         description: The session ID is returned in a cookie named `access_token`. You need to include this cookie in subsequent requests.
 *         headers:
 *           Set-Cookie:
 *            schema:
 *             type: string
 *             example: access_token=abcde12345; Path=/; HttpOnly 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Authentication'
 *       500:
 *         description: Some server error
 * /logout:
 *   post:
 *     summary: Logs the user out of the system
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: The successful message of logout.
 *       500:
 *         description: Some server error
 *
 * /forgot-password:
 *   post:
 *     summary: Send an email to the requested user to reset its password
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: The successful message of reset password.
 *       500:
 *         description: Some server error
 */

const router = express.Router();

router.post(
  "/signup",
  AuthenticationController.register
);

router.post(
  "/login",
  AuthenticationController.login
);

router.post(
  "/logout",
  AuthenticationController.logout
);

router.post(
  "/forgot-password",
  AuthenticationController.resetPassword
);

export default router;