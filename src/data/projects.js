/**
 * Datos de navegación y proyectos.
 * Cada sección contiene una lista de elementos con su slug y título.  Estos
 * objetos se utilizan para construir el menú desplegable y las rutas.
 */
export const navData = [
  {
    id: 'ux-ui',
    title: 'Diseño UX/UI',
    path: '/ux-ui',
    items: [
      { slug: 'sistema-de-landings', title: 'Sistema de Landings' },
      { slug: 'work-with-us', title: 'Work With US' },
      { slug: 'medical-films-solutions', title: 'Medical Films Solutions' },
      { slug: 'becapp', title: 'BecApp' }
    ]
  },
  {
    id: 'redes-sociales',
    title: 'Redes Sociales',
    path: '/redes-sociales',
    items: [
      { slug: 'corre-la-serie-corre-sopo', title: 'Corre la Serie – Corre Sopó' },
      { slug: 'merrell-actividades', title: 'Merrell Actividades' },
      { slug: 'injoy-app', title: 'InJoy App' },
      { slug: 'lucro-app', title: 'Lucro App' },
      { slug: 'newbody-redes', title: 'NewBody' }
    ]
  },
  {
    id: 'impresion',
    title: 'Diseño para impresión',
    path: '/impresion',
    items: [
      { slug: 'merrell-impresion', title: 'Merrell' },
      { slug: 'newbody-impresion', title: 'NewBody' }
    ]
  }
];

/**
 * Detalles de cada proyecto.  Aquí se incluyen títulos, descripciones y
 * se podrían añadir imágenes y enlaces.  Para simplificar, las descripciones
 * son cortas; en una aplicación real pueden importarse textos completos.
 */
export const projectDetails = {
  'sistema-de-landings': {
    title: 'Sistema de Landings',
    year: 2025,
    description:
      'Lo que comenzó como una landing puntual se convirtió en un sistema escalable para gestionar más de 10 colecciones de telas. El proyecto combina storytelling, estructura modular y visuales impactantes para Spradling Group.',
    images: [],
    links: []
  },
  'work-with-us': {
    title: 'Work With US',
    year: 2025,
    description:
      'Portal oficial de empleo para Proquinal diseñado para conectar talento con oportunidades reales en Colombia y Costa Rica. El proyecto se centró en la experiencia del candidato y la cultura de la empresa.',
    images: [],
    links: []
  },
  'medical-films-solutions': {
    title: 'Medical Films Solutions',
    year: 2025,
    description:
      'Landing page estratégica para el lanzamiento de una división médica. Incluye diseño funcional, limpio y adaptado a los estándares del sector salud.',
    images: [],
    links: []
  },
  becapp: {
    title: 'BecApp',
    year: 2023,
    description:
      'Aplicación móvil diseñada para facilitar el acceso a oportunidades educativas, desde la investigación hasta el diseño UI final.',
    images: [],
    links: []
  },
  'corre-la-serie-corre-sopo': {
    title: 'Corre la Serie – Corre Sopó',
    year: 2025,
    description:
      'Diseño gráfico integral para evento de trail running nocturno en Sopó. Incluye identidad visual, contenidos para redes y merchandising.',
    images: [],
    links: []
  },
  'merrell-actividades': {
    title: 'Merrell Actividades',
    year: 2025,
    description:
      'Campañas visuales para caminatas, campamentos y eventos de marca como el Merrell Trail Tour. Se diseñaron múltiples piezas para Instagram.',
    images: [],
    links: []
  },
  'injoy-app': {
    title: 'InJoy App',
    year: 2025,
    description:
      'Campaña conceptual para el lanzamiento de una app de gestión de nómina. Incluye storytelling, post, carruseles e historias para redes.',
    images: [],
    links: []
  },
  'lucro-app': {
    title: 'Lucro App',
    year: 2025,
    description:
      'Diseño de campaña visual para anunciar promociones navideñas de una app de recompensas. Se crearon posts y carruseles informativos.',
    images: [],
    links: []
  },
  'newbody-redes': {
    title: 'NewBody',
    year: 2025,
    description:
      'Campañas promocionales para Facebook e Instagram enfocadas en destacar tratamientos estéticos no invasivos.',
    images: [],
    links: []
  },
  'merrell-impresion': {
    title: 'Merrell (Impresión)',
    year: 2025,
    description:
      'Diseño de materiales impresos para apoyar las actividades comerciales de Merrell. Se desarrolló un calendario físico de actividades y eventos.',
    images: [],
    links: []
  },
  'newbody-impresion': {
    title: 'NewBody (Impresión)',
    year: 2025,
    description:
      'Diseño visual aplicado a entornos físicos para el centro estético NewBody. Incluye murales informativos, carteles promocionales y señalética.',
    images: [],
    links: []
  }
};

/**
 * Devuelve una sección por su id.
 * @param {string} id Identificador de la sección
 */
export function getSectionById(id) {
  return navData.find((section) => section.id === id);
}

/**
 * Devuelve los detalles de un proyecto por su slug.
 * @param {string} slug Slug del proyecto
 */
export function getProjectBySlug(slug) {
  return projectDetails[slug];
}