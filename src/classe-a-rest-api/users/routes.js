import express from 'express';

import verifyToken from '../middleware.js';
import UserController from './controller.js';

const router = express.Router();

router.get('/:id', verifyToken, UserController.getUser);

router.post('/', verifyToken, UserController.addUser);

router.patch('/:id', verifyToken, UserController.updateUser);

router.delete('/:id', verifyToken, UserController.deleteUser);

router.get('/', verifyToken, UserController.getAllUsers);

export default router;
