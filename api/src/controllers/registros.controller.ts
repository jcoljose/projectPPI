import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export const registrarPaciente = async (req: Request, res: Response) => {
    const { cpf, email, senha, rSenha, nomeCompleto, telefone, dataNascimento, sexo } = req.body
    const dataDeNascimento = new Date(dataNascimento)

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

    if (emailExists !== null || cpfExists !== null) {return res.json({
        message: 'Email ou CPF informado já existe'
    })}
    if (senha !== rSenha) {return res.json({
        message: 'As senhas estão diferentes'
    })}
    
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

    return res.json({
        message: 'Usuário registrado com sucesso!',
        value: true
    })
}