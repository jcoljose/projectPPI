import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_PASS = '$2a$10$MIjpU/xsQwbfT13.HPvu8.z.0l8FbTTEXN8ZJsG.Vp.5oF1Zr/lIC'
const prisma = new PrismaClient()

type JwtPayload = {
    cpf: string
}

export const mostrarPerfil = async (req: Request, res: Response) => {
    const token = req.params.ls
    try {
        const { cpf } = jwt.verify(token, JWT_PASS) as JwtPayload
        const perfil = await prisma.paciente.findFirst({
            where: {
                cpf: cpf
            }
        })
    
        return perfil !== null ? res.json({
            cpf: perfil.cpf,
            nomeCompleto: perfil.nomeCompleto,
            telefone: perfil.telefone,
            dataDeNascimento: perfil.dataDeNascimento,
            altura: perfil.altura,
            peso: perfil.peso,
            sexo: perfil.sexo,
            value: true
        }) : res.json({
            message: 'Sessão Expirada',
            value: false
        })
    } catch (error) {
        return res.json({
            message: 'Sessão Expirada',
            value: false
        })
    }
}

export const perfilUpdate = async (req: Request, res: Response) => {
    const token = req.params.ls
    let { telefone, sexo, altura, peso } = req.body

    try {
        const { cpf } = jwt.verify(token, JWT_PASS) as JwtPayload

        if (telefone != null) {
            const telefoneUp = await prisma.paciente.update({
                where: {
                    cpf: cpf
                },
                data: {
                    telefone: telefone
                }
            })
        }

        if (sexo != null) {
            const sexoUp = await prisma.paciente.update({
                where: {
                    cpf: cpf
                },
                data: {
                    sexo: sexo
                }
            })
        }

        if (altura != null) {
            altura = (altura / 100).toFixed(2)
            const alturaUp = await prisma.paciente.update({
                where: {
                    cpf: cpf
                },
                data: {
                    altura: altura
                }
            })
        }

        if (peso != null) {
            peso = peso.toFixed(3)
            const pesoUp = await prisma.paciente.update({
                where: {
                    cpf: cpf
                },
                data: {
                    peso: peso
                }
            })
        }

        return res.json({message: 'Perfil atualizado com Sucesso', value: true})
    } catch (error) {
        return res.json({value: false})
    }
}