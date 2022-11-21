import { Router } from "express";
import { obterTodosMedicos, obterMedico } from "../controllers/medicos";

const router = Router();

router.get('/medicos', obterTodosMedicos)
router.get('/medicos/:crm', obterMedico)

export{router}