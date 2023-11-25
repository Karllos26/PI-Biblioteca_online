import { Router } from 'express'
import booksRouter from './book/book.routes'
import categoryRouter from './category/category.routes'
import userRouter from './user/user.routes'


const routes = Router()

routes.use('/books', booksRouter)
routes.use('/categories', categoryRouter)
routes.use('/user', userRouter)

export default routes