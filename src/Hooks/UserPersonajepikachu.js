import { useState, useEffect } from "react";

function usePersonajepikachu(ids) {
    const [personajepikachu, setpersonajepikachu] = useState([]);

    useEffect(() => {
        const obtener = async () => {
            const data = await Promise.all(
                ids.map(async (id) => {
                    const respuesta = await fetch(
                        `https://pokeapi.co/api/v2/pokemon/${id}`
                    );
                    return respuesta.json();
                })
            );

            setpersonajepikachu(data);
        };

        obtener();
    }, [ids]);

    return personajepikachu;
}

export default usePersonajepikachu;