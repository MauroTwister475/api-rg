import { Request, Response } from "express"
import { ReportRepository } from "../repositories/ReportRepository"
import { BadRequestError } from "../helpers/api-erros"

export default new class  ReporController{
    async create(req: Request, res: Response){
        const { theme, title, point, reference, atribuition, cod_document, Angola_participation, decision, summary, meeting_number, comment, create_at, votoscontra, votosfavor, votosemabstencao, author, tendencies } = req.body
        
        const newReport = ReportRepository.create({
            theme,
            title,
            point,
            reference,
            atribuition,
            cod_document,
            Angola_participation,
            decision,
            summary,
            meeting_number,
            comment,
            create_at,
            votoscontra,
            votosfavor,
            votosemabstencao, 
            author,
            tendencies,
        })

        await ReportRepository.save(newReport)

        return res.status(201).json(newReport)
    }

    async index(req: Request, res: Response){
        const recents_reports = await ReportRepository.find()

        return res.status(200).json(recents_reports)
    }

    async getRecents(req: Request, res: Response){
        const recents_reports = await ReportRepository.createQueryBuilder().limit(5).getRawMany()

        return res.status(200).json(recents_reports)
    }
    
    async CountReport(req: Request, res: Response){
        const count = await ReportRepository.count()

        return res.status(200).json(count)
    }

    async findOne(req: Request, res: Response){
        const id = req.params

        const report = await ReportRepository.findOneBy(id)

        return res.status(200).json(report)
    }
    async delete(req: Request, res: Response){
        const id = req.params
        const report = await ReportRepository.delete(id)

        if(!report){
            throw new BadRequestError('Professor não encontrado!')
        }

        return res.status(200).json({ message: 'Relatório apagado com sucesso!'})
    }
}
