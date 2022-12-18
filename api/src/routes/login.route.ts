import { Router } from 'express';

import { loginValidate } from '../controllers/login.controller';

export const router = Router();

router.get('/login', loginValidate);