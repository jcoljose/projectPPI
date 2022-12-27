import { Router } from 'express';

import { mostrarMedicos } from '../controllers/consulta.controller';

export const router = Router();

router.post('/medicos', mostrarMedicos);