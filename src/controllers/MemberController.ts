import { Request, Response } from 'express'
import { BadRequestError } from '../helpers/api-erros'
import { MemberRepository } from '../repositories/MemberRepository'

export class MemberController {
	async create(req: Request, res: Response) {
		const { name } = req.body

		const MemberExists = await MemberRepository.findOneBy({ name })

		if (MemberExists) {
			throw new BadRequestError(`${name} já foi cadastrado!`)
		} 

		const newMember = MemberRepository.create({
			name
		})

		await MemberRepository.save(newMember)

		return res.status(201).json(newMember)
	}

	async index( req: Request, res: Response){
		const member = await MemberRepository.find()

		return res.status(200).json(member)
	}

	async delete(req: Request, res: Response){
		const id = req.params
		await MemberRepository.delete(id)

		return res.status(200).json({res: 'Member delete sucessufly!'})
	}

}
