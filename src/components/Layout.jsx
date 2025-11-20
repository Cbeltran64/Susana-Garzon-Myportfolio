import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Componente de diseño que incluye el encabezado y pie de página.
 * Recibe como prop el contenido (children) que se mostrará entre ambos.
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default Layout;