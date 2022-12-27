import { Router } from 'express';

import { mostrarPerfil } from '../controllers/perfil.controller'
import { perfilUpdate } from '../controllers/perfil.controller';

export const router = Router();

router.get('/mostrarPerfil/:ls', mostrarPerfil);
router.patch('/perfilUp/:ls', perfilUpdate);