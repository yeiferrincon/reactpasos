import { useState } from "react";
import "./Formulario.css";

function Formulario() {
  const [datos, setDatos] = useState(null);

  const manejarEnvio = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setDatos({
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      email: formData.get("email"),
      edad: formData.get("edad"),
      peso: formData.get("peso"),
      genero: formData.get("genero"),
    });
  };

  return (
    <div className="formulario">
      <h1>Formulario</h1>

      <form onSubmit={manejarEnvio}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" placeholder="Ingrese su nombre" />
        </div>

        <div>
          <label>Apellido:</label>
          <input type="text" name="apellido" placeholder="Ingrese su apellido" />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" placeholder="ejemplo@correo.com" />
        </div>

        <div>
          <label>Edad:</label>
          <input type="number" name="edad" placeholder="Ingrese su edad" />
        </div>

        <div>
          <label>Peso:</label>
          <input type="number" step="0.01" name="peso" placeholder="Ingrese su peso en kg" />
        </div>

        <div>
          <label>Género:</label>
          <select name="genero">
            <option value="">Seleccione su género</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="O">Otro</option>
          </select>
        </div>

        <button type="submit">Enviar</button>
      </form>

      {datos && (
        <div className="resultado">
          <h2>Datos Registrados</h2>

          <p><strong>Nombre:</strong> {datos.nombre}</p>
          <p><strong>Apellido:</strong> {datos.apellido}</p>
          <p><strong>Email:</strong> {datos.email}</p>
          <p><strong>Edad:</strong> {datos.edad}</p>
          <p><strong>Peso:</strong> {datos.peso}</p>
          <p><strong>Género:</strong> {datos.genero}</p>
        </div>
      )}
    </div>
  );
}

export default Formulario;  