import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_PASS = '$2a$10$MIjpU/xsQwbfT13.HPvu8.z.0l8FbTTEXN8ZJsG.Vp.5oF1Zr/lIC'
const prisma = new PrismaClient();

export const loginValidate = async (req: Request, res: Response) => {
    const { email, senha } = req.body

    const isLogin = await prisma.paciente.findFirst({
        where: {
            email: email
        }
    })

    if (isLogin == null) {return res.json({
        message: 'Email ou senha Inválidos'
    })}
    else {
        const verifySenha = await bcrypt.compare(senha, isLogin.senha)

        if (!verifySenha) {return res.json({message: 'Email ou senha Inválidos'})}
        else {
            const token = jwt.sign({cpf: isLogin.cpf}, JWT_PASS, {expiresIn: '1h'})
            return res.json({message: 'Logado com Sucesso!', value: true, token: token})
        }     
    }
}