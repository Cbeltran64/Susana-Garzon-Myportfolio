"use client"

import { useState } from "react"
import { navData } from "../data/navData.ts"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveSubmenu(null)
  }

  const toggleSubmenu = (sectionId) => {
    if (activeSubmenu === sectionId) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(sectionId)
    }
  }

  const handleNavClick = (path) => {
    if (path.includes("#")) {
      const sectionId = path.replace("/#", "")
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.location.href = path
    }
    closeMenu()
  }

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <button className="header__logo" onClick={() => handleNavClick("/")} title="Ir a inicio">
          <img src="/logo.svg" alt="Susana Garzón UX/UI Designer" className="logo-image" />
        </button>

        {/* Botón del menú hamburguesa */}
        <button
          className={`header__toggle ${isMenuOpen ? "header__toggle--active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
          <ul className="navbar__list">
            {/* Mapear items del navData */}
            {navData.map((item) => (
              <li key={item.id} className="navbar__item">
                <div className="navbar__link-container">
                  <button className="navbar__link" onClick={() => handleNavClick(item.path)}>
                    {item.title}
                  </button>
                  {item.items && item.items.length > 0 && (
                    <button
                      className="navbar__submenu-toggle"
                      onClick={() => toggleSubmenu(item.id)}
                      aria-label="Toggle submenu"
                    >
                      <span>{activeSubmenu === item.id ? "−" : "▾"}</span>
                    </button>
                  )}
                </div>

                {/* Submenú del Portafolio */}
                {item.items && item.items.length > 0 && (
                  <ul className={`submenu ${activeSubmenu === item.id ? "submenu--open" : ""}`}>
                    {item.items.map((subitem) => (
                      <li key={subitem.slug} className="submenu__item">
                        <button className="submenu__link" onClick={() => handleNavClick(`/${subitem.slug}`)}>
                          {subitem.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
