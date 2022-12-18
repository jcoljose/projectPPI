import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export const registrarPaciente = async (req: Request, res: Response) => {
    const { cpf, email, senha, nomeCompleto, telefone, dataDeNascimento, sexo } = req.body
    const emailExists = await prisma.paciente.findFirst({
        where: {
            email: email
        }
    })
    const cpfExists = await prisma.paciente.findFirst({
        where: {
            cpf: cpf
        }
    })

    try {
        if (emailExists !== null) {
            throw ('Email cadastrado já existe!')
        }
    } catch (error) {
        res.json(error)
    }
    
    try {
        if (cpfExists !== null) {
            throw ('CPF cadastrado já existe!')
        }
    } catch (error) {
        res.json(error)
    }
    
    const hashSenha = await bcrypt.hash(senha, 10)

    const newUser = await prisma.paciente.create({
        data: {
            cpf: cpf,
            email: email,
            senha: hashSenha, 
            nomeCompleto: nomeCompleto,
            telefone: telefone,
            dataDeNascimento: dataDeNascimento,
            sexo: sexo
        }
    })
    return res.json(newUser)

}