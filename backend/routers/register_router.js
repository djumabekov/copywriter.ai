import express from 'express';
import cors from 'cors';
import { register, login, getMe } from '../controllers/UserController.js';
import { handleValidationErrors } from '../utils/handleValidationErrors.js';
import { registerValidation } from '../validations.js';

const router = express.Router();
router.use(express.json());
router.use(cors());

router.post('/auth/register', registerValidation, handleValidationErrors, register);

export { router };
