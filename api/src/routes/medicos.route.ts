import { Router } from 'express';

import { obterMedico, obterTodosMedicos } from '../controllers/medicos.controller';

export const router = Router();

router.get('/medicos', obterTodosMedicos);
router.get('/medicos/:crm', obterMedico);