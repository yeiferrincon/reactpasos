import { useState, useEffect } from "react";







function usePersonaje(ids) {
  const [personajes, setPersonaje] = useState([]);

  useEffect(() => {
    const obtenerPersonaje = async () => {
      const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(",")}`);
      const data = await respuesta.json();
      setPersonaje(Array.isArray(data) ? data : [data]);
    };

    obtenerPersonaje();
  }, [ids]);

  return personajes;
}

export default usePersonaje;