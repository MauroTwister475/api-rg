import { Router } from 'express'
import ReportController from '../controllers/ReportController'

export const reportRoutes = Router()

reportRoutes.post('/', ReportController.create)
reportRoutes.get('/view-recents', ReportController.index)
reportRoutes.get('/view-report/:id', ReportController.findOne)
reportRoutes.delete('/:id', ReportController.delete)