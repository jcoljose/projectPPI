import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_PASS = '$2a$10$MIjpU/xsQwbfT13.HPvu8.z.0l8FbTTEXN8ZJsG.Vp.5oF1Zr/lIC'
const prisma = new PrismaClient()

const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']

type JwtPayload = {
    cpf: string
}

export const mostrarMedicos = async (req: Request, res: Response) => {
    let { dataConsulta, especialidade } = req.body

    especialidade = +especialidade
    dataConsulta = new Date(dataConsulta)

    if (dataConsulta < new Date()) {return res.json({message: 'Escolha uma data que ainda não passou', value: false})}

    let medicos = await prisma.medico.findMany({
        where: {
            especialidadeId: especialidade
        },
        include: {
            especialidade: true,
            diasAtendimento: true,
            horariosAtendimento: true
        }
    })

    const dataSolicitada = await prisma.consulta.findMany({
        where: {
            dataConsulta: dataConsulta,
            medico: {
                especialidadeId: especialidade
            }
        },
        include: {
            medico: true
        }
    })

    medicos = medicos.filter(e => {
        let dias = e.diasAtendimento.filter(i => {
            if (i.id == dataConsulta.getDay() + 1) {return i}
        })
        if (dias.length > 0) {return e}
    })
    console.log(medicos)
    return medicos !== null ? res.json(medicos) : res.json('Nenhum médico encontrado')
}