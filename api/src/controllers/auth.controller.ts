import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const authValidate = async (req: Request, res: Response) => {
    const { authorization } = req.headers
    console.log(authorization)
    return res.json(true)
}