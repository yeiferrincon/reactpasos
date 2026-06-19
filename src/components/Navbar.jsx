import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="navbar">
            <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                <span className="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <span className="menu-text">Menú</span>
            </button>
            
            <Link to="/">Home</Link>
            <Link to="/quienessomos">Quienes Somos</Link>
            <Link to="/formulario">Formulario</Link>
            <Link to="/personaje">Personajes RickandMorty</Link>
            <Link to="/personajePikachu">Personajes Pokemon</Link>
            <Link to="/personajedragonBallz">Personajes Dragon Ball Z</Link>
            
            <div className={`menu-dropdown ${isOpen ? 'show' : ''}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/quienessomos" onClick={() => setIsOpen(false)}>Quienes Somos</Link>
                <Link to="/formulario" onClick={() => setIsOpen(false)}>Formulario</Link>
                <Link to="/personaje" onClick={() => setIsOpen(false)}>Personajes RickandMorty</Link>
                <Link to="/personajePikachu" onClick={() => setIsOpen(false)}>Personajes Pokemon</Link>
                <Link to="/personajedragonBallz" onClick={() => setIsOpen(false)}>Personajes Dragon Ball Z</Link>
            </div>
        </nav>
    )
}

export default Navbar;