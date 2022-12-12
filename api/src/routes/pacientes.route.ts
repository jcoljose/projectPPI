import { Router } from 'express';

import { obterPaciente, obterTodosPacientes } from '../controllers/pacientes.controller';

export const router = Router();

router.get('/pacientes', obterTodosPacientes);
router.get('/pacientes/:cpf', obterPaciente);