import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { authMiddleware } from '../middlewares/authMiddleware'

export const userRoutes = Router()

userRoutes.post('/', new UserController().create)
userRoutes.post('/login', new UserController().login)

userRoutes.use(authMiddleware)

userRoutes.get('/profile', new UserController().getProfile)
