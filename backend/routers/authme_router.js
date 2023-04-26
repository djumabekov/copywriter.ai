import express from 'express';
import cors from 'cors';
import { getMe } from '../controllers/UserController.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = express.Router();
router.use(express.json());
router.use(cors());

router.get('/auth/me', checkAuth, getMe);

export { router };
