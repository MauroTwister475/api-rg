import { Router } from 'express'
import { MemberController } from '../controllers/MemberController'

export const membersRouter = Router()

membersRouter.post('/', new MemberController().create)
membersRouter.get('/', new MemberController().index)
membersRouter.delete('/:id', new MemberController().delete)
