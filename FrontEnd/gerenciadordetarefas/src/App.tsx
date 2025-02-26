import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar.tsx"

// Reutilizando navbar em outras paginas

function App() {

  return (
    <div className="App">
    <Navbar />
    <h1>Pagina base inicial</h1>
    <Outlet />    {/*Utilizado para reutilizar estruturas das rotas em outras paginas*/}
    </div>
  );
}

export default App