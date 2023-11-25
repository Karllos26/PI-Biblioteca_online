import { Router } from 'express'
import UserController from '../../controllers/user/user.controller'


const userRouter = Router();

// Criar um usuário
userRouter.post('/', UserController.createUser);

// Obter todos os usuários
userRouter.get('/', UserController.getAllUsers);

// Obter um usuário por ID
userRouter.get('/:id', UserController.getUserById);

// Atualizar um usuário por ID
userRouter.put('/:id', UserController.updateUser);

// Excluir um usuário por ID
userRouter.delete('/:id', UserController.deleteUser);

export default userRouter;