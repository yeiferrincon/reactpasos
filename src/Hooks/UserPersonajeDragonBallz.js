import { useState, useEffect } from "react";


function usePersonajeDragonBallz(ids) {
    const [personajeDragonBallz, setpersonajeDragonBallz] = useState([]);

    useEffect(() => {
        const obtener = async () => {
            const data = await Promise.all(
                ids.map(async (id) => {
                    const respuesta = await fetch(
                        `https://dragonball-api.com/api/characters/${id}`
                    );
                    return respuesta.json();
                })
            );
        setpersonajeDragonBallz(data);
    };
    obtener();
},  [ids]);

return personajeDragonBallz;

}

export default usePersonajeDragonBallz;