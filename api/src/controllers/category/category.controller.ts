import { Request, Response } from 'express';
import { validate } from 'class-validator';
import Category from '../../models/Category';

export default class CategoryController {
  static async createCategory(req: Request, res: Response) {
    try {
      const { name } = req.body;

      const category = new Category();
      category.name = name;

      const errors = await validate(category);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      await category.save();

      return res.status(201).json(category);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await Category.find();
      return res.json(categories);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getCategoryById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await Category.findOneBy({id: Number(id)});

      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }

      return res.json(category);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async updateCategory(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const category = await Category.findOneBy({id: Number(id)});

      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }

      category.name = name;

      const errors = await validate(category);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      await Category.update(id,category);

      return res.json(category);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async deleteCategory(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedCategory = await Category.delete(id);

      if (deletedCategory.affected === 0) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }

      return res.json({ message: 'Categoria excluída com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}
