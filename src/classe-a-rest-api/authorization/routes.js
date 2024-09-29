import express from 'express';

import AuthorizationController from "./controller.js";

const router = express.Router();

router.post(
  "/signup",
  AuthorizationController.register
);

router.post(
  "/login",
  AuthorizationController.login
);

router.post(
  "/logout",
  AuthorizationController.logout
);

router.post(
  "/forgot-password",
  AuthorizationController.resetPassword
);

export default router;