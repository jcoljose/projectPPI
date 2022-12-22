import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const jwtSenha = '$2a$10$MIjpU/xsQwbfT13.HPvu8.z.0l8FbTTEXN8ZJsG.Vp.5oF1Zr/lIC'
const prisma = new PrismaClient()

type JwtPayload = {
    cpf: string
}

export const authValidate = async (req: Request, res: Response) => {
    const token = req.params.ls
    try {
        const { cpf } = jwt.verify(token, jwtSenha) as JwtPayload
        const cpfValid = await prisma.paciente.findFirst({
            where: {
                cpf: cpf
            }
        })

        return cpfValid !== null ? res.json({
            cpf: cpfValid.cpf,
            nomeCompleto: cpfValid.nomeCompleto,
            telefone: cpfValid.telefone,
            dataDeNascimento: cpfValid.dataDeNascimento,
            value: true
        }) : res.json({value: false})
    } catch (error) {
        return res.json({value: false})
    }
}