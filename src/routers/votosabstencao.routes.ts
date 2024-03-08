import { Router } from 'express'
import { VotosEmAbstencaoController } from '../controllers/VotosEmAbstencaoController'

export const votosabstencaoRoutes = Router ()

votosabstencaoRoutes.post('/', new VotosEmAbstencaoController().create)
votosabstencaoRoutes.get('/', new VotosEmAbstencaoController().index)
