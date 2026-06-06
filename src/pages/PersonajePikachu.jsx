import { requestFormReset } from "react-dom";
import userpersonajepikachu from "../Hooks/UserPersonajepikachu";
import "../pages/PersonajePikachu.css";





function Personajepikachu() {
    const personajepikachu = userpersonajepikachu([ 25, 26, 27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 24, 29, 30]);

    if (personajepikachu.length === 0) {
        return <h2>Cargando personajes de Pikachu...</h2>;
    }

    return (
        <div className="personajepikachu">
            {personajepikachu.map((personajepika) => (
                <div key={personajepika.id}>
                    <img src={personajepika.sprites.front_default} alt={personajepika.name} />

                    <h2>Nombre: {personajepika.name}</h2>

                    <ul className="info-personajepikachu">
                        <li><b>ID:</b> {personajepika.id}</li>
                        <li><b>Altura:</b> {personajepika.height}</li>
                        <li><b>Peso:</b> {personajepika.weight}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Personajepikachu;