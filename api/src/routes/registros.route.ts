import { Router } from 'express';

import { registrar } from '../controllers/registros.controller';

export const router = Router();

router.post('/registrar', registrar);