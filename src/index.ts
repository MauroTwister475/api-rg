import 'express-async-errors'
import express from 'express'
import { AppDataSource } from './data-source'
import cors from 'cors'
import { routes } from './routers/index.routes'

AppDataSource.initialize().then(() => {
	const app = express()

	app.use(express.json())
	app.use(cors())
	app.use(routes)


	return app.listen(process.env.PORT, () => console.log(`Server runing in ${process.env.PORT}🔥`))
})
