import express from 'express';
import { createUserController } from '../factories/UserControllerFactory';
import { validateRequest } from '@quickbiteapp/shared';
import { createUserRules } from './httpValidator/CreateUserValidator';
import { requireAuth } from '@quickbiteapp/shared';
import { requireSuperAdmin } from '@quickbiteapp/shared';

const router = express.Router();

const userController = createUserController();

router.route('/').post(
    createUserRules, 
    validateRequest, 
    userController.create
);

router.route('/').get(
    requireAuth,
    requireSuperAdmin,
    userController.getAll
);

router.route('/:id').get(
    requireAuth,
    requireSuperAdmin,
    userController.getById
);

router.route('/:id').delete(
    requireAuth,
    requireSuperAdmin,
    userController.delete
);

const userRouter = router;

export { userRouter };