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

  
}