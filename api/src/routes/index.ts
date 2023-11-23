import { Router } from 'express'
import bookRoutes from './book/book.routes'

const routes = Router()

routes.use('/book', bookRoutes)

export default routes