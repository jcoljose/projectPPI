import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const obterTodosPacientes = async (req: Request, res: Response) => {
    const pacientes = await prisma.paciente.findMany({
        include: {
            consulta: true
        }
    })
    return res.json(pacientes);
}

const obterPaciente = async (req: Request, res: Response) => {
    const cpf = req.params.cpf;
    const pacientes = await prisma.paciente.findMany({
        include: {
            consulta: true
        },
        where: {
            cpf: cpf
        }
    })
    return res.json(pacientes);
}

export {obterTodosPacientes, obterPaciente}