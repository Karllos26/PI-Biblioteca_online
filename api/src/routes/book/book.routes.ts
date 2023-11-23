import { Router } from 'express'
import BookController from '../../controllers/book/book.controller'

const taskRoutes = Router()

taskRoutes.post('/', BookController.register)
taskRoutes.get('/', BookController.list)


export default taskRoutes