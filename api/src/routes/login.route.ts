import { Router } from 'express';

import { loginValidate } from '../controllers/login.controller';

export const router = Router();

router.post('/login', loginValidate);