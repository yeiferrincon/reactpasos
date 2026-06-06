import usePersonaje from "../Hooks/UserPersonaje"
import "../pages/Personaje.css"

function Personaje() {
    const personajes = usePersonaje([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    
    if (personajes.length === 0){
        return <h2>Cargando...</h2>
    }

    return(
        <div className="personajes">
            {personajes.map((personaje)=>(
                <div key={personaje.id}>
            
                    <img 
                        src={personaje.image}
                        alt={personaje.name}
                        />

                        <h2>Nombre: {personaje.name}</h2>
                        <ul className="info-personaje">
                        <li><b>Estado:</b> {personaje.status}</li>
                        <li><b>Origen:</b> {personaje.origin.name}</li>
                        <li><b>Id:</b> {personaje.id}</li>
                        </ul>        
                </div>
            ))}
        </div>
    );
}

export default Personaje;