import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const jwtSenha = '123'

export const loginValidate = async (req: Request, res: Response) => {
    const { email, senha } = req.body
    const isLogin = await prisma.paciente.findFirst({
        where: {
            email: email
        }
    })

    if (isLogin == null) {throw new Error('Email ou senha Inválidos\n')}
    else {
        const verifySenha = await bcrypt.compare(senha, isLogin.senha)

        if (verifySenha) {
            const token = jwt.sign({email: isLogin.email}, jwtSenha, {expiresIn: '1h'})
            return res.json({token: token})
        }
        else {throw new Error ('Email ou senha Inválidos\n')}
    }
    
}