import { Router } from 'express'
import CategoryController from '../../controllers/category/category.controller'

const categoryRouter = Router()

// Criar uma categoria
categoryRouter.post('/', CategoryController.createCategory);

// Obter todas as categorias
categoryRouter.get('/', CategoryController.getAllCategories);

// Obter uma categoria por ID
categoryRouter.get('/:id', CategoryController.getCategoryById);

// Atualizar uma categoria por ID
categoryRouter.put('/:id', CategoryController.updateCategory);

// Excluir uma categoria por ID
categoryRouter.delete('/:id', CategoryController.deleteCategory);

export default categoryRouter;