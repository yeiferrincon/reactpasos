import userpersonajedragonballz from "../Hooks/UserPersonajeDragonBallz";
import "../pages/PersonajeDragonBallz.css";






function PersonajeDragonBallZ() {
    const personajedragonballz = userpersonajedragonballz([ 1, 2, 3,10,38, 65, 66, 68, 44, 39, 33, 35, 34, 22, 23,  4, 5, 6, 7, 8, 9,  11, 12, 13, 14, 15,]);

    if(personajedragonballz.length === 0) {
        return <h2>Cargando personajes de Dragon Ball Z... </h2>;
    }

    return (
        <div className="personajedragonballz">
            {personajedragonballz.map((personajedragonball) => (
                <div key={personajedragonball.id}>
                    <div className="imagen-container">
                    <img src={personajedragonball.image} 
                    alt={personajedragonball.name} />
                    </div>
                    <h2>Nombre: {personajedragonball.name}</h2>

                    <ul className="info-personajedragonballz">
                        <li><b>ID: </b> {personajedragonball.id}</li>
                        <li><b>Raza: </b>{personajedragonball.race}</li>
                        <li><b>Nivel de Poder:</b>{personajedragonball.ki}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default PersonajeDragonBallZ;