import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const obterTodosMedicos = async (req: Request, res: Response) => {
    const medicos = await prisma.medico.findMany({
        include: {
            diasAtendimento: true,
            horariosAtendimento: true,
            consulta: false
        }
    })
    
    return res.json(medicos);
}

export const obterMedico = async (req: Request, res: Response) => {
    const crm = req.params.crm;
    const medicos = await prisma.medico.findMany({
        include: {
            diasAtendimento: true,
            horariosAtendimento: true,
            consulta: false
        },
        where: {
            crm: crm
        }
    })
    
    return res.json(medicos);
}