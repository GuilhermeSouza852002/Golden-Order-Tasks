import { Outlet } from "react-router-dom";

import Navbar from "../../components/navbar.tsx"

function Home() {

  return (
    <div className="Home">
    <Navbar />
    <h1>Home</h1>
    <Outlet />    {/*Utilizado para reutilizar estruturas das rotas em outras paginas*/}
    </div>
  );
}

export default Home
