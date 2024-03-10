import { Request, Response } from 'express'
import { VotosFavorRepository } from '../repositories/VotosFavorRepository'
export class VotosFavorController{
    async create(req: Request, res: Response){
        const { agree } = req.body

        const newVotoFavor = VotosFavorRepository.create({
            members: agree
        })

        await VotosFavorRepository.save(newVotoFavor)

        res.status(201).json(newVotoFavor)
    }

    async index (req: Request, res: Response){
        const id = await VotosFavorRepository.createQueryBuilder('votosfavor').orderBy('votosfavor.id', 'DESC').getOne()

        return res.status(200).json(id)
    }
}