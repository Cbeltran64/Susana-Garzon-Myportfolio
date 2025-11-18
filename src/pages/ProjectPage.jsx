import React from 'react';
import { useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';

/**
 * Página de detalle de proyecto.  Obtiene el slug de la URL y busca los
 * detalles en la base de datos.  En caso de no encontrar el proyecto,
 * muestra un mensaje.  Las imágenes y enlaces se podrían renderizar en
 * componentes separados cuando existan datos disponibles.
 */
const ProjectPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  if (!project) {
    return (
      <section>
        <h1>Proyecto no encontrado</h1>
        <p>No se encontraron datos para el proyecto solicitado.</p>
      </section>
    );
  }
  return (
    <section className="project">
      <h1 className="project__title">{project.title}</h1>
      {project.year && <p className="project__year">Año: {project.year}</p>}
      <p className="project__description">{project.description}</p>
      {/* Aquí podrían añadirse componentes para mostrar enlaces externos y galerías de imágenes */}
      {project.links && project.links.length > 0 && (
        <div className="project__links">
          <h3>Enlaces:</h3>
          <ul>
            {project.links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {project.images && project.images.length > 0 && (
        <div className="project__gallery">
          {project.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${project.title} screenshot ${index + 1}`}
              className="project__image"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectPage;