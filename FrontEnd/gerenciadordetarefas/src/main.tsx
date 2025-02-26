import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Paginas
import App from './App.tsx'
import Home from './pages/home/home.tsx'
import Sobre from './pages/sobre/sobre.tsx'
import Login from './pages/login/login.tsx'
import Cadastro from './pages/cadastro/cadastro.tsx'

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
]);
  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
