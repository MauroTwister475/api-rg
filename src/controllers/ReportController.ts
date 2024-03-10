import { Request, Response } from "express"
import { ReportRepository } from "../repositories/ReportRepository"

export default new class  ReporController{
    async create(req: Request, res: Response){
        const { theme, title, point, reference, atribuition, cod_document, Angola_participation, decision, summary, meeting_number, comment, create_at, votoscontra, votosfavor, votosemabstencao} = req.body
        
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
        })

        await ReportRepository.save(newReport)

        return res.status(201).json(newReport)
    }

    async index(req: Request, res: Response){
        const recents_reports = await ReportRepository.find()

        return res.status(200).json(recents_reports)
    }

    async findOne(req: Request, res: Response){
        const id = req.params

        const report = await ReportRepository.findOneBy(id)

        return res.status(200).json(report)
    }

}
