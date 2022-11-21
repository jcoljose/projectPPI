import { Router } from "express";
import { obterTodosPacientes, obterPaciente } from "../controllers/pacientes";

const router = Router();

router.get('/pacientes', obterTodosPacientes);
router.get('/pacientes/:cpf', obterPaciente);

export{router}