import { Router } from 'express'
import BookController from '../../controllers/book/book.controller'

const router = Router()

router.post('/books', BookController.register);
router.get('/books', BookController.getAllBooks);
router.get('/books/:id', BookController.getBookById);
router.get('/books/category/:category', BookController.getBooksByCategory);
router.get('/books/name/:name', BookController.getBooksByName);
router.delete('/books/:id', BookController.deleteBook);
router.put('/books/:id', BookController.updateBook);


export default router