import { Router } from 'express'
import CategoryController from '../../controllers/category/category.controller'

const taskRoutes = Router()

taskRoutes.post('/', CategoryController.store)

export default taskRoutes