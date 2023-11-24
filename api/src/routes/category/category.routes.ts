import { Router } from 'express'
import CategoryController from '../../controllers/category/category.controller'

const router = Router()

// Criar uma categoria
router.post('/categories', CategoryController.createCategory);

// Obter todas as categorias
router.get('/categories', CategoryController.getAllCategories);

// Obter uma categoria por ID
router.get('/categories/:id', CategoryController.getCategoryById);

// Atualizar uma categoria por ID
router.put('/categories/:id', CategoryController.updateCategory);

// Excluir uma categoria por ID
router.delete('/categories/:id', CategoryController.deleteCategory);

export default router;