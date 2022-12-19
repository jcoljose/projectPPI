import { Router } from 'express';

import { authValidate } from '../controllers/auth.controller';

export const router = Router();

router.get('/auth', authValidate);