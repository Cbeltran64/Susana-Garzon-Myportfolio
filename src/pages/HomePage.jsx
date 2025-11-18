import React from 'react';
import { Link } from 'react-router-dom';
import { navData } from '../data/projects';

/**
 * Página de inicio del portafolio.  Muestra una breve introducción y un
 * listado de secciones principales con botones para explorarlas.  Incluye
 * también un enlace directo a la página de contacto.
 */
const HomePage = () => {
  return (
    <section className="home">
      <h1 className="home__title">Bienvenido al portafolio de Susana Garzón</h1>
      <p className="home__intro">
        Descubre proyectos de UX/UI, campañas para redes sociales y diseños para
        impresión.
      </p>
      <div className="home__grid">
        {navData.map((section) => (
          <div key={section.id} className="home__card">
            <h2 className="home__card-title">{section.title}</h2>
            <Link to={section.path} className="home__button">
              Explorar
            </Link>
          </div>
        ))}
        {/* Tarjeta de contacto */}
        <div key="contacto" className="home__card">
          <h2 className="home__card-title">Contacto</h2>
          <Link to="/contacto" className="home__button">
            Escríbeme
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;