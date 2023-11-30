import { Router } from 'express'
import UserController from '../../controllers/user/user.controller'


const userRouter = Router();

// Criar um usuário
userRouter.post('/register', UserController.createUser);

// Obter todos os usuários
userRouter.get('/all', UserController.getAllUsers);

// Obter um usuário por ID
userRouter.get('/:id', UserController.getUserById);

// Atualizar um usuário por ID
userRouter.put('/:id', UserController.updateUser);

// Excluir um usuário por ID
userRouter.delete('/:id', UserController.deleteUser);

userRouter.post('/login', UserController.loginUser);
export default userRouter;