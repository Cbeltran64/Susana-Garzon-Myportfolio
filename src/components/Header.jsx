import React from 'react';
import { Link } from 'react-router-dom';
import { navData } from '../data/projects';
import './Header.css';

/**
 * Encabezado de la aplicación que muestra un menú horizontal con categorías y
 * subcategorías.  El menú es desplegable: al pasar el cursor sobre una
 * categoría se muestran sus proyectos.  La estructura de datos se toma de
 * navData.  El enlace "Contacto" se sitúa al final para mayor claridad.
 */
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* Marca o logo que enlaza a la página de inicio */}
        <Link to="/" className="header__logo">
          Susana Garzón
        </Link>
        <nav className="navbar">
          <ul className="navbar__list">
            {navData.map((section) => (
              <li key={section.id} className="navbar__item">
                <Link to={section.path} className="navbar__link">
                  {section.title}
                </Link>
                {/* Submenú de proyectos */}
                {section.items && section.items.length > 0 && (
                  <ul className="submenu">
                    {section.items.map((item) => (
                      <li key={item.slug} className="submenu__item">
                        <Link
                          to={`${section.path}/${item.slug}`}
                          className="submenu__link"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {/* Item de contacto fuera de la lista de secciones */}
            <li className="navbar__item">
              <Link to="/contacto" className="navbar__link">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;