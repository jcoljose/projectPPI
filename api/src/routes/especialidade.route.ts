import { Router } from 'express';

import { mostrarEspecialidades } from '../controllers/especialidade.controller';

export const router = Router();

router.get('/especialidade', mostrarEspecialidades);