import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Paginas antes do login
import App from './App.tsx'
import Home from './pages/home/home.tsx'
import Sobre from './pages/sobre/sobre.tsx'
import Login from './pages/login/login.tsx'
import Cadastro from './pages/cadastro/cadastro.tsx'

// Paginas pós login
import HomeLogado from './pages/usuarioLogado/homeLogado/homeLogado.tsx'

// Erros
import ErrorPage from './routes/errorPage.tsx'

// Configurando Rotas padrão
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/sobre",
//     element: <Sobre />,
//   },
// ]);

// Configurando Rotas com children
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
    ]
  },
  {
    path: "/homeLogado",
    element: <HomeLogado />,
  },
]);
  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
