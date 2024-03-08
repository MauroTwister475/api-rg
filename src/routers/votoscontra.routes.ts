import { Router } from 'express'
import { VotosContraController } from '../controllers/VotosContraController'

export const votoscontraRoutes = Router()


votoscontraRoutes.post('/', new VotosContraController().create)
votoscontraRoutes.get('/', new VotosContraController().index)