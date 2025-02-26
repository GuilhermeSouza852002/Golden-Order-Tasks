import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/home/home.tsx'
import Sobre from './pages/sobre/sobre.tsx'
import ErrorPage from './routes/errorPage.tsx'

// Configurando Rotas
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

// Reutilização de rotas com children
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/sobre",
        element: <Sobre />,
      },
    ]
  },
]);
  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
