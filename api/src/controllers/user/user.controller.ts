import { Request, Response } from 'express';
import { validate } from 'class-validator';
import User from '../../models/User';

export default class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const { name, email, photoUrl, password, type } = req.body;

      const user = new User();
      user.name = name;
      user.email = email;
      user.photoUrl = photoUrl;
      user.password = password;
      user.type = type;

      const errors = await validate(user);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      await user.save();

      return res.status(201).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {

      const { id } = req.params;
      const user = await User.findOneBy({id: Number(id)});

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email, photoUrl, password, type } = req.body;

      const user = await User.findOneBy({id: Number(id)});

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      user.name = name;
      user.email = email;
      user.photoUrl = photoUrl;
      user.password = password;
      user.type = type;

      const errors = await validate(user);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      await User.update(id, user);

      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedUser = await User.delete(id);

      if (deletedUser.affected === 0) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      return res.json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}
