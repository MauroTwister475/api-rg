import { Router } from 'express'
import { userRoutes } from './user.routes'
import { authMiddleware } from '../middlewares/authMiddleware'
import { membersRouter } from './members.routes'
import { votosfavorRoutes } from './votosfavor.routes'
import { votoscontraRoutes } from './votoscontra.routes'
import { votosabstencaoRoutes } from './votosabstencao.routes'
import { reportRoutes } from './report.routes'

export const routes = Router()

routes.use('/user', userRoutes)
//routes.use(authMiddleware)
routes.use('/members', membersRouter)
routes.use('/votosfavor', votosfavorRoutes)
routes.use('/votoscontra', votoscontraRoutes)
routes.use('/votosabstencao', votosabstencaoRoutes)
routes.use('/report', reportRoutes)
