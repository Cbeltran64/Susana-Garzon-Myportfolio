import React from 'react';
import { Link } from 'react-router-dom';
import { getSectionById } from '../data/projects';

/**
 * Página para mostrar una lista de proyectos dentro de una sección.  Recibe
 * sectionId como prop y obtiene la información a partir de la base de datos
 * (navData).  Si la sección no existe, muestra un mensaje de error.
 */
const SectionPage = ({ sectionId }) => {
  const section = getSectionById(sectionId);
  if (!section) {
    return (
      <section>
        <h1>Sección no encontrada</h1>
        <p>No existe la sección solicitada.</p>
      </section>
    );
  }
  return (
    <section className="section">
      <h1 className="section__title">{section.title}</h1>
      <div className="section__grid">
        {section.items.map((item) => (
          <div key={item.slug} className="section__card">
            <h2 className="section__card-title">{item.title}</h2>
            <Link
              to={`${section.path}/${item.slug}`}
              className="section__button"
            >
              Ver proyecto
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionPage;