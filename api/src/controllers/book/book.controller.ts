import { Request, Response } from 'express'
import Book from '../../models/Book'

export default class BookController {
  static async register (req: Request, res: Response) {
    const { heading, imageUrl, description, href, category, rating} = req.body

    if (!heading || !href || !category || !imageUrl) {
      return res.status(400).json({ error: 'Campos obrigatórios, não foram enviados' })
    }

    const book = new Book()
    book.heading = heading 
    book.imageUrl = imageUrl
    book.description = description
    book.href = href
    book.category = category
    book.rating = rating
    await book.save()

    return res.status(201).json(book)
  }

  static async getAllBooks(req: Request, res: Response) {
    try {
      const books = await Book.find();
      return res.json(books);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getBookById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const book = await Book.findOneBy({id: Number(id)});

      if (!book) {
        return res.status(404).json({ error: 'Livro não encontrado' });
      }

      return res.json(book);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getBooksByCategory(req: Request, res: Response) {
    try {
      const { category } = req.params;
      const books = await Book.findBy({ category: category });
  
      return res.json(books);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getBooksByName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const books = await  Book.findBy({ heading: name });
  
      return res.json(books);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async deleteBook(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedBook = await Book.delete(id);

      if (!deletedBook) {
        return res.status(404).json({ error: 'Livro não encontrado' });
      }

      return res.json(deletedBook);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async updateBook(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { heading, imageUrl, description, href, category, rating } = req.body;

      const updatedBook = await Book.update(
        { id: Number(id) },
        { heading, imageUrl, description, href, category, rating }
      );

      if (!updatedBook) {
        return res.status(404).json({ error: 'Livro não encontrado' });
      }

      return res.json(updatedBook);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}