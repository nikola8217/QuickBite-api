import { body } from 'express-validator';
import { Role } from '../../entities/enums/Role';
import { Status } from '../../entities/enums/Status';

export const createUserRules = [
    body('name')
        .notEmpty()
        .withMessage('Name is required'),

    body('email')
        .isEmail()
        .withMessage('Invalid email')
        .normalizeEmail(),

    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),

    body('role')
        .optional()
        .isIn([Role.CUSTOMER, Role.RESTAURANT_ADMIN, Role.DELIVERY, Role.SUPER_ADMIN])
        .withMessage('Role must be Customer, RestaurantAdmin, Delivery or SuperAdmin'),

    body('status')
        .optional()
        .isIn([Status.ACTIVE, Status.PENDING])
        .withMessage('Status must be Active or Pending'),
];