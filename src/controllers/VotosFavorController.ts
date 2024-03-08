import { Request, Response } from 'express'
import { VotosFavorRepository } from '../repositories/VotosFavorRepository'
export class VotosFavorController{
    async create(req: Request, res: Response){
        const { members } = req.body

        const newVotoFavor = VotosFavorRepository.create({
            members
        })

        await VotosFavorRepository.save(newVotoFavor)

        res.status(201).json(newVotoFavor)
    }

    async index (req: Request, res: Response){
        const id = await VotosFavorRepository.createQueryBuilder('votosfavor').orderBy('votosfavor.id', 'ASC').getOne()

        return res.status(200).json(id)
    }
}