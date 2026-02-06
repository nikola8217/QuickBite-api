import express from 'express';
import { createUserController } from '../factories/UserControllerFactory';
import { validateRequest } from '@quickbiteapp/shared';
import { createUserRules } from './httpValidator/CreateUserValidator';

const router = express.Router();

const userController = createUserController();

router.route('/').post(
    createUserRules, 
    validateRequest, 
    userController.create
);

const userRouter = router;

export { userRouter };