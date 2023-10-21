
import Home from '../pages/home/index.tsx'
import {createBrowserRouter } from 'react-router-dom'
import Sobre from '../pages/sobre/index.tsx'
import NotFound from '../pages/not-found/index.tsx'
import Tarefas from '../pages/tarefas/index.tsx'
import Apresentacao from '../pages/apresentacao/index.tsx'


const router = createBrowserRouter([
  {path: '/', element: <Home/>, errorElement: <NotFound/>},
  {path: '/sobre', element: <Sobre/>},
  {path: '/apresentacao', element: <Apresentacao/>},
  {path: '/tarefas', element: <Tarefas/>},
 

])

export default router