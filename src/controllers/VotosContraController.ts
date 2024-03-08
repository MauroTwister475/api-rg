import { Request, Response} from 'express'
import { VotosContraRepository } from '../repositories/VotosContraRepository'

export class VotosContraController{
    async create(req: Request, res: Response){
    
        const { members } = req.body

        const newVotoContra = VotosContraRepository.create({
            members
        })
        await VotosContraRepository.save(newVotoContra)
        
        return res.status(201).json(newVotoContra)
        
    }

    async index(req: Request, res: Response){
        const id = await VotosContraRepository.createQueryBuilder('votoscontra').orderBy('votoscontra.id', 'ASC').getOne()

        return res.status(200).json(id)
    }
}
