import { Request, Response } from 'express'
import { VotosEmAbstencaoRepository } from '../repositories/VotosEmAbstencaoRepository'

export class VotosEmAbstencaoController{

    async create(req: Request, res: Response){
        const { members } = req.body

        const newVotoEmAbstencao = VotosEmAbstencaoRepository.create({
            members
        })

        await VotosEmAbstencaoRepository.save(newVotoEmAbstencao)

        return res.status(201).json(newVotoEmAbstencao)
    }

    async index(req: Request, res: Response){
        const id = await VotosEmAbstencaoRepository.createQueryBuilder('votosemabstencao').orderBy('votosemabstencao.id', 'ASC').getOne()

        return res.status(200).json(id)
    }
}