
import Home from '../pages/home/index.tsx'
import {createBrowserRouter } from 'react-router-dom'
import Sobre from '../pages/sobre/index.tsx'
import NotFound from '../pages/not-found/index.tsx'
import Apresentacao from '../pages/apresentacao/index.tsx'
import CategoriasHome from '../pages/categoriasPage/index.tsx'
import LayoutPesquisa from '../pages/pesquisa/index.tsx'
import CadastroPage from '../pages/cadastro/index.tsx'
import LoginPage from '../pages/login/index.tsx'
import LayoutPerfil from '../pages/perfil/index.tsx'



const router = createBrowserRouter([
  {path: '/', element: <Home/>, errorElement: <NotFound/>},
  {path: '/sobre', element: <Sobre/>},
  {path: '/apresentacao', element: <Apresentacao/>},
  {path:'/categoria/:nomeCategoria', element: <CategoriasHome/>},
  {path: '/pesquisa', element: <LayoutPesquisa/>},
  {path: '/usuarios', element: <CadastroPage/>},
  {path: '/login', element: <LoginPage/>},
  {path: '/perfil', element: <LayoutPerfil/>},
])

export default router