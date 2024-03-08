import { Router } from 'express'
import { VotosFavorController } from '../controllers/VotosFavorController'

export const votosfavorRoutes = Router()

votosfavorRoutes.post('/', new VotosFavorController().create)
votosfavorRoutes.get('/', new VotosFavorController().index)
