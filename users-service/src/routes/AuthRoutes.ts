import express from 'express';
import { createAuthController } from '../factories/AuthControllerFactory';
import { validateRequest } from '@quickbiteapp/shared';
import { loginUserRules } from './httpValidator/LoginUserValidator';

const router = express.Router();

const authController = createAuthController();

router.route('/login').post(
    loginUserRules, 
    validateRequest, 
    authController.login
);

const authRouter = router;

export { authRouter };