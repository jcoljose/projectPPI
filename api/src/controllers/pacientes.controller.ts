import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const obterTodosPacientes = async (req: Request, res: Response) => {
    const pacientes = await prisma.paciente.findMany({
        include: {
            consulta: true
        }
    })
    return res.json(pacientes);
}

export const obterPaciente = async (req: Request, res: Response) => {
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