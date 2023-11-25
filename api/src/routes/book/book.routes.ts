import { Router } from 'express'
import BookController from '../../controllers/book/book.controller'

const booksRouter = Router()

booksRouter.post('/', BookController.register);
booksRouter.get('/', BookController.getAllBooks);
booksRouter.get('/:id', BookController.getBookById);
booksRouter.get('/category/:category', BookController.getBooksByCategory);
booksRouter.get('/name/:name', BookController.getBooksByName);
booksRouter.delete('/:id', BookController.deleteBook);
booksRouter.put('/:id', BookController.updateBook);


export default booksRouter