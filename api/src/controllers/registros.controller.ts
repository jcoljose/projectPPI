import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const registrarPaciente = async (req: Request, res: Response) => {
    console.log(req.body)
}