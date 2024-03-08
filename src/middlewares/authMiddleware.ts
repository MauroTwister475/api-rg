import { NextFunction, Request, Response } from 'express'
import { UnauthorizedError } from '../helpers/api-erros'
import { UserRepository } from '../repositories/UserRepository'
import jwt from 'jsonwebtoken'

type JwtPayload = {
	id: string
}

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { authorization } = req.headers

	if (!authorization) {
		throw new UnauthorizedError('Usuário não autorizado')
	}

	const token = authorization.split(' ')[1]

	const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

	const user = await UserRepository.findOneBy({ id })

	if (!user) {
		throw new UnauthorizedError('Usuário não autorizado')
	}

	const { password: _, ...loggedUser } = user

	req.user = loggedUser

	next()
}
