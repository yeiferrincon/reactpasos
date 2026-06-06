import "./QuienesSomos.css";
import equipoImg from "../img/quienessomos.png"

function QuienesSomos() {
  return (
    <div className="QuienesSomos">
      <section className="QuienesSomos-card">
        <h1>Quienes Somos</h1>

        <p>
          Somos jóvenes estudiantes de <b>Programación Full Stack</b> con
          interés en aprender, desarrollar y mejorar nuestras habilidades en la
          creación de aplicaciones web modernas.
        </p>
        <p>
          Buscamos construir interfaces <b>Frontend</b> aplicando buenas
          prácticas de desarrollo, diseño y experiencia de usuario. Asimismo,
          nos interesa fortalecer la lógica de programación en el{" "}
          <b>Backend,</b> implementando correctamente estructuras de control,
          reglas de negocio, condiciones y ciclos.
        </p>
        <p>
          Nuestro objetivo es adquirir experiencia en la integración de
          tecnologías, conectando aplicaciones con <b>APIs,</b> servicios
          externos y <b>bases de datos,</b> para desarrollar soluciones
          completas y funcionales.
        </p>
      </section>
      <section className="imagen-card">
        <h2>IMAGEN</h2>
        <img src={equipoImg} alt="Equipo de trabajo" className="img-nosotros" />
      </section>
    </div>
  );
}

export default QuienesSomos;
