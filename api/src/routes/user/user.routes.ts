import { Router } from 'express'
import UserController from '../../controllers/user/user.controller'


const router = Router();

// Criar um usuário
router.post('/users', UserController.createUser);

// Obter todos os usuários
router.get('/users', UserController.getAllUsers);

// Obter um usuário por ID
router.get('/users/:id', UserController.getUserById);

// Atualizar um usuário por ID
router.put('/users/:id', UserController.updateUser);

// Excluir um usuário por ID
router.delete('/users/:id', UserController.deleteUser);

export default router;