import { Router } from 'express';

import { registrarPaciente } from '../controllers/registros.controller';

export const router = Router();

router.post('/registrar', registrarPaciente);