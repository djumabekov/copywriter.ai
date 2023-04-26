import express from 'express';
import cors from 'cors';
import { register, login, getMe } from '../controllers/UserController.js';
import { handleValidationErrors } from '../utils/handleValidationErrors.js';
import { loginValidation } from '../validations.js';

const router = express.Router();
router.use(express.json());
router.use(cors());

router.post('/auth/login', loginValidation, handleValidationErrors, login);

export { router };
