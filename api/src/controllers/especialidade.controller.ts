import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const mostrarEspecialidades = async (req: Request, res: Response) => {
    const especialidades = await prisma.especialidade.findMany()
    return res.json(especialidades)
}