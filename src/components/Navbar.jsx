import { Link } from "react-router-dom";
import "../components/Navbar.css"

function Navbar() {
    return(
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/quienessomos">Quienes Somos</Link>
            <Link to="/formulario">Formulario</Link>
            <Link to="/personaje">Personajes RickandMorty</Link>
            <Link to="/personajePikachu">Personajes Pokemon</Link>
            <Link to="/personajedragonBallz">Personajes Dragon Ball Z</Link>
        </nav>
    )
}

export default Navbar;