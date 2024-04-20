import { Router } from 'express'
import ReportController from '../controllers/ReportController'

export const reportRoutes = Router()

reportRoutes.post('/', ReportController.create)
reportRoutes.get('/view-recents', ReportController.index)
reportRoutes.get('/recents', ReportController.getRecents)
reportRoutes.get('/countreports', ReportController.CountReport)
reportRoutes.get('/view-report/:id', ReportController.findOne)
reportRoutes.put('/update/:id', ReportController.update)
reportRoutes.delete('/:id', ReportController.delete)