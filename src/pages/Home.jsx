import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="home-card">
        <h1>Prueba</h1>

        <p>
          Esta es una página de práctica desarrollada con{" "}
          <b>React, JavaScript y CSS</b>. Su propósito es aprender y poner en
          práctica los conceptos fundamentales de React, incluyendo el uso de
          componentes y <b>Hooks</b> como
          <b> useState, useEffect y otros.</b>
        </p>

        <p>
          El objetivo principal es construir una aplicación desde cero,
          comprendiendo el funcionamiento de cada herramienta utilizada y
          analizando los errores que pueden surgir durante el proceso de
          desarrollo para aprender a resolverlos de manera adecuada.
        </p>
      </section>

      <section className="pestaña-card">
        <h2>Pestañas de la página</h2>

        <ul>
          <li>
            <b>Home:</b> página principal donde se encuentra esta información.
          </li>
          <li>
            <b>Quiénes Somos:</b> una breve descripción de quienes somos.
          </li>
          <li>
            <b>Formulario:</b> diligenciamiento de un breve formulario.
          </li>
          <li>
            <b>Personajes rickandmorty:</b> uso de la API de Rick and Morty.
          </li>
          <li>
            <b>Personajes Pokémon:</b> uso de la API de Pokémon.
          </li>
          <li>
            <b>Perosnajes Dragon Ball z:</b> Uso de API de Dragon Ball z.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
