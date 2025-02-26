// bibliotecas
import { useState } from "react";
import { Link, NavLink } from "react-router-dom"

// css
import './navbar.css'

// imagens
import LogoInicio from "../assets/home/elden-ring-logo.jpg";

// Template navbar

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/" className="title">
            <div className="logonavbar">
            <img src={LogoInicio} alt="Logo" title="Logo do inicio da pagina"/>
            </div>
            
            <span>Golden Order Tasks</span>
                
            </Link>

            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
            
                <li>
                    <NavLink to="/sobre">Sobre</NavLink>
                </li>

                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>

                <li>
                    <NavLink to="/cadastro">Cadastro</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar