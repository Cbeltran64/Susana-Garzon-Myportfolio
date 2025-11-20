/**
 * Datos de navegación y proyectos.
 * Cada sección contiene una lista de elementos con su slug y título.  Estos
 * objetos se utilizan para construir el menú desplegable y las rutas.
 */
export const navData = [
  {
    id: 'ux-ui',
    title: 'Diseño UX/UI',
    description: 'En esta sección encontrarás una recopilación de piezas diseñadas para espacios físicos y comunicación visual impresa. Desde murales hasta señalética y elementos de gran formato, cada diseño fue pensado para captar la atención, comunicar con claridad y reforzar la identidad visual de las marcas en contextos reales. \n Estas piezas son una muestra del diseño llevado más allá de la pantalla, adaptado a entornos comerciales, vitrinas, puntos de venta y espacios institucionales.',
    path: '/ux-ui',
    items: [
      { slug: 'sistema-de-landings', title: 'Sistema de Landings', images: '../images/Diseño-UX-UI/Sistema-de-Landings/Diseño UX UI-Sistema de Landings.jpg' },
      { slug: 'work-with-us', title: 'Work With US', images: '../images/Diseño-UX-UI/Work-With-US/Diseño UX UI-Work With US.jpg' },
      { slug: 'medical-films-solutions', title: 'Medical Films Solutions', images: '../images/Diseño-UX-UI/Medical-Films-Solutions/Diseño UX UI-Medical Films Solutions.jpg' },
      { slug: 'becapp', title: 'BecApp' , images: '../images/Diseño-UX-UI/BecApp/Diseño UX UI-BecApp.jpg'}
    ]
  },
  {
    id: 'redes-sociales',
    title: 'Redes Sociales',
    description: 'En esta sección encontrarás una recopilación de piezas diseñadas para espacios físicos y comunicación visual impresa. Desde murales hasta señalética y elementos de gran formato, cada diseño fue pensado para captar la atención, comunicar con claridad y reforzar la identidad visual de las marcas en contextos reales.Estas piezas son una muestra del diseño llevado más allá de la pantalla, adaptado a entornos comerciales, vitrinas, puntos de venta y espacios institucionales.',
    path: '/redes-sociales',
    items: [
      { slug: 'corre-la-serie-corre-sopo', title: 'Corre la Serie – Corre Sopó', images: '../images/Redes-sociales/Corre-la-Serie/RedesSociales-CorreSopo.jpg'},
      { slug: 'merrell-actividades', title: 'Merrell Actividades', images: '../images/Redes-sociales/Merrell-Actividades/MerrellActividades-01.jpg' },
      { slug: 'injoy-app', title: 'InJoy App', images: '../images/Redes-sociales/InJoy-App/InJoyApp-01.png' },
      { slug: 'lucro-app', title: 'Lucro App', images: '../images/Redes-sociales/Lucro-App/LucroApp-01.jpg' },
      { slug: 'newbody-redes', title: 'NewBody', images: '../images/Redes-sociales/NewBody/NewBody-01.jpg' }
    ]
  },
  {
    id: 'impresion',
    title: 'Diseño para impresión',
    description: 'En esta sección encontrarás una recopilación de piezas diseñadas para espacios físicos y comunicación visual impresa. Desde murales hasta señalética y elementos de gran formato, cada diseño fue pensado para captar la atención, comunicar con claridad y reforzar la identidad visual de las marcas en contextos reales. Estas piezas son una muestra del diseño llevado más allá de la pantalla, adaptado a entornos comerciales, vitrinas, puntos de venta y espacios institucionales.',
    path: '/impresion',
    items: [
      { slug: 'merrell-impresion', title: 'Merrell', images: '../images/Diseño-impresión/Merrell/Merrell-01.jpg'},
      { slug: 'newbody-impresion', title: 'NewBody', images: '../images/Diseño-impresión/NewBody/NewBody-01.png' }
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
    description:
      'Lo que comenzó como una landing puntual se convirtió en un sistema UX/UI escalable para gestionar más de 10 colecciones de telas en distintos mercados. Este proyecto transformó la experiencia de solicitud de muestras en Spradling Group, combinando storytelling, estructura modular, visuales impactantes y foco comercial. Cada landing fue diseñada para adaptarse a su colección, su audiencia y su contexto, sin perder consistencia ni eficiencia.',
    images: ["../images/Diseño-UX-UI/Sistema-de-Landings/Diseño UX UI-Sistema de Landings.jpg","../images/Diseño-UX-UI/Sistema-de-Landings/Sistema-de-Landings-1.png","../images/Diseño-UX-UI/Sistema-de-Landings/Sistema-de-Landings-2.png","../images/Diseño-UX-UI/Sistema-de-Landings/Sistema-de-Landings-3.png","../images/Diseño-UX-UI/Sistema-de-Landings/Sistema-de-Landings-4.png","../images/Diseño-UX-UI/Sistema-de-Landings/Sistema-de-Landings-5.png","../images/Diseño-UX-UI/Sistema-de-Landings/Sistema-de-Landings-6.png","../images/Diseño-UX-UI/Sistema-de-Landings/Sistema-de-Landings-8.png"],
    links: [],
    figmaLinks: [
      {
        title: "Valencia ™ Biosense Landing Page prototipo",
        embedUrl: "https://embed.figma.com/proto/NdmbY1BBazWnpSQUYs2arc/Valencia-BioSense?page-id=1071%3A8062&node-id=1071-8063&viewport=-185%2C390%2C0.11&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1071%3A8063&embed-host=share",
        directUrl: "https://www.figma.com/proto/NdmbY1BBazWnpSQUYs2arc/Valencia-BioSense?page-id=1071%3A8062&node-id=1071-8063&viewport=-185%2C390%2C0.11&t=etnrkqBNx8wDfIBG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1071%3A8063",
        linkSate: "https://valenciabiosense.spradling.eu/es",
        botonNameFigma: "Valencia Biosense Prototipo",
        botonNameSite: "Landing page Valencia Biosense"
      },
      {
        title: "Kizuna USA mini site prototipo",
        embedUrl: "https://embed.figma.com/proto/bfaLlIlH4g5xtTfFewhu8o/Kizuna-USA?page-id=2%3A3&node-id=2-4&viewport=672%2C112%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A4&embed-host=share",
        directUrl: "https://www.figma.com/proto/bfaLlIlH4g5xtTfFewhu8o/Kizuna-USA?page-id=2%3A3&node-id=2-4&viewport=672%2C112%2C0.15&t=6hO06Q2o2DdUKQTQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A4",
        linkSate: "https://new-landing.spradling.group/en-us/kizuna",
        botonNameFigma: "Kizuna Protoitpo",
        botonNameSite: "Kizuna Sitio web"
      },
      {
        title: "Vestige Landing Page prototipo",
        embedUrl: "https://embed.figma.com/proto/R9Sy4QCN46YCl007MWs0jB/Vestige-Landing-Page?page-id=0%3A1&node-id=128-1230&p=f&viewport=-1624%2C1%2C0.2&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3&embed-host=share",
        directUrl: "https://acortar.link/jyGUR2",
        linkSate: "https://vestige.spradling.eu/es",
        botonNameFigma: "Vestige Protoitpo",
        botonNameSite: "Vestige Landing page"
      },
      {
        title: "Quickship mini site prototipo",
        embedUrl: "https://embed.figma.com/proto/D6hBjmFaY2mEPXJ2hLWBA0/Quickship?page-id=1%3A3&node-id=1-4&viewport=137%2C211%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4&embed-host=share",
        directUrl: "https://www.figma.com/p",
        linkSate: "https://new-landing.spradlin",
        botonNameFigma: "Quickship prototipo",
        botonNameSite: "Quickship Sitio web"
      }
    ],
  },
  'work-with-us': {
    title: 'Work With US',
    description:
      'Work With Us es el portal oficial de empleo para Proquinal, miembro de Spradling Group, creado para conectar talento con oportunidades reales en sus plantas de Colombia y Costa Rica. Este proyecto UX/UI fue diseñado desde cero para fortalecer la presencia digital del área de Recursos Humanos, permitiendo a los candidatos conocer los beneficios, cultura y valores de cada sede, y postularse directamente sin intermediarios. A través de un diseño accesible, cálido y humano, logramos transformar el proceso de postulación en una experiencia informada, transparente y centrada en las personas.',
    images: ["../images/Diseño-UX-UI/Work-With-US/Diseño UX UI-Work With US.jpg","../images/Diseño-UX-UI/Work-With-US/Work-With-US-1.png","../images/Diseño-UX-UI/Work-With-US/Work-With-US-2.png","../images/Diseño-UX-UI/Work-With-US/Work-With-US-3.png","../images/Diseño-UX-UI/Work-With-US/Work-With-US-4.png","../images/Diseño-UX-UI/Work-With-US/Work-With-US-5.png","../images/Diseño-UX-UI/Work-With-US/Work-With-US-6.png","../images/Diseño-UX-UI/Work-With-US/Work-With-US-7.png","../images/Diseño-UX-UI/Work-With-US/Work-With-US-8.png",],
    links: [],
    figmaLinks: [
      {
        title: "Work With US",
        embedUrl: "",
        directUrl: "https://acortar.link/g2xzoH",
        linkSate: "https://vacantes.spradling.group/es",
        botonNameFigma: "Ver prototipo en Figma",
        botonNameSite: "Explorar el portal Work WIth Us"
      }
    ]
  },
  'medical-films-solutions': {
    title: 'Medical Films Solutions',
    description:
      'En este proyecto desarrollé una landing page estratégica para el lanzamiento de Medical Films Solutions, una nueva división de Spradling enfocada en el sector médico. A partir de un reto sin precedentes —crear presencia digital en una industria completamente nueva y sin marca previa— diseñé una solución UX/UI funcional, limpia y confiable, adaptada a los estándares del sector salud. Este caso de estudio muestra cómo el diseño puede ser clave para abrir nuevas oportunidades de negocio, incluso en contextos inciertos y con tiempos reducidos.',
    images: ["../images/Diseño-UX-UI/Medical-Films-Solutions/Diseño UX UI-Medical Films Solutions.jpg","../images/Diseño-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-1.png","../images/Diseño-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-2.png","../images/Diseño-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-3.png","../images/Diseño-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-4.png","../images/Diseño-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-5.png","../images/Diseño-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-6.png","../images/Diseño-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-7.png","../images/Diseño-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-8.png","../images/Diseño-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-9.png","../images/Diseño-UX-UI/Medical-Films-Solutions/Medical-Films-Solutions-10.png"],
    links: [],
    figmaLinks: [
      {
        title: "Valencia ™ Biosense Landing Page prototipo",
        embedUrl: "https://embed.figma.com/proto/MLGqjCbux9ab93lAWvXTc5/Medical-Devices-%F0%9F%9F%A1?page-id=0%3A1&node-id=232-2694&embed-host=share",
        directUrl: "https://acortar.link/hcTLCA",
        linkSate: "https://healthcaresolutions.spradling.group/",
        botonNameFigma: "Ver prototipo",
        botonNameSite: "Ver Landing page"
      }
    ]
  },
  'becapp': {
    title: 'BecApp',
    description:
      'BaeAapp es una aplicación móvil diseñada para facilitar el acceso a oportunidades educativas reales. Nació de una necesidad común: encontrar becas claras, aplicables y filtradas según el perfil de cada usuario, sin perderse entre portales dispersos ni información confusa. Este proyecto fue desarrollado end-to-end, desde la investigación hasta el diseño UI final, y reúne en un solo lugar todo lo necesario para que más personas puedan estudiar lo que quieren, donde quieren. Aquí te cuento cómo el diseño UX/UI puede ser una herramienta poderosa para democratizar el acceso a la educación.',
    images: ["../images/Diseño-UX-UI/BecApp/Diseño UX UI-BecApp.jpg","../images/Diseño-UX-UI/BecApp/BecApp-01.jpg","../images/Diseño-UX-UI/BecApp/BecApp-02.jpg","../images/Diseño-UX-UI/BecApp/BecApp-03.jpg","../images/Diseño-UX-UI/BecApp/BecApp-04.jpg","../images/Diseño-UX-UI/BecApp/BecApp-05.jpg","../images/Diseño-UX-UI/BecApp/BecApp-06.jpg","../images/Diseño-UX-UI/BecApp/BecApp-07.jpg","../images/Diseño-UX-UI/BecApp/BecApp-08.jpg","../images/Diseño-UX-UI/BecApp/BecApp-09.jpg","../images/Diseño-UX-UI/BecApp/BecApp-10.jpg","../images/Diseño-UX-UI/BecApp/BecApp-11.jpg","../images/Diseño-UX-UI/BecApp/BecApp-12.jpg","../images/Diseño-UX-UI/BecApp/BecApp-13.jpg","../images/Diseño-UX-UI/BecApp/BecApp-14.jpg","../images/Diseño-UX-UI/BecApp/BecApp-15.jpg","../images/Diseño-UX-UI/BecApp/BecApp-16.jpg","../images/Diseño-UX-UI/BecApp/BecApp-17.jpg","../images/Diseño-UX-UI/BecApp/BecApp-18.jpg"],
    links: []
    ,
    figmaLinks: [
      {
        title: "Valencia ™ Biosense Landing Page prototipo",
        embedUrl: "https://embed.figma.com/proto/PjCjnfn6ZsgpCHt7Io185K/App-Becas-WIreframes-Coderhouse?page-id=0%3A1&node-id=792-4042&p=f&viewport=-221%2C306%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=792%3A4042&show-proto-sidebar=1&embed-host=share",
        directUrl: "https://acortar.link/aLFJNA",
        linkSate: "https://valenciabiosense.spradling.eu/es",
        botonNameFigma: "Ver prototipo",
        botonNameSite: ""
      }
    ]
  },
  'corre-la-serie-corre-sopo': {
    title: 'Corre la Serie – Corre Sopó',
    description:
      'Diseño gráfico integral para evento de trail running nocturno en Sopó. Realicé desde la identidad visual completa (logo, tipografía, medallas, merchandising) hasta el contenido digital: post, historias, video, y anuncios en Instagram. Objetivo: mantener informada a la comunidad y motivar la inscripción.',
    images: ["../images/Redes-sociales/Corre-la-Serie/RedesSociales-CorreSopo.jpg","../images/Redes-sociales/Corre-la-Serie/CarreraSopo-01.png","../images/Redes-sociales/Corre-la-Serie/CarreraSopo-02.png","../images/Redes-sociales/Corre-la-Serie/CarreraSopo-03.png","../images/Redes-sociales/Corre-la-Serie/CarreraSopo-04.png","../images/Redes-sociales/Corre-la-Serie/CarreraSopo-05.jpg"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  },
  'merrell-actividades': {
    title: 'Merrell Actividades',
    description: 'Campañas visuales para caminatas, campamentos y eventos de marca como el Merrell Trail Tour. Se diseñaron múltiples piezas para Instagram según cada actividad, promoviendo la inscripción a través de visuales consistentes e informativos. 📍 IG – @merrell_colombia',
    images: ["../images/Redes-sociales/Merrell-Actividades/MerrellActividades-01.jpg","../images/Redes-sociales/Merrell-Actividades/MerrellActividades-02.png","../images/Redes-sociales/Merrell-Actividades/MerrellActividades-03.png","../images/Redes-sociales/Merrell-Actividades/MerrellActividades-04.png","../images/Redes-sociales/Merrell-Actividades/MerrellActividades-05.png","../images/Redes-sociales/Merrell-Actividades/MerrellActividades-06.png"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  },
  'injoy-app': {
    title: 'InJoy App',
    description:
      'Campaña conceptual para el lanzamiento de una app que permite a los empleados gestionar su nómina desde el celular. Se definió el objetivo de comunicación, tono visual y estilo de contenido. Incluye storytelling, post, carruseles, historias y diseño publicitario adaptable a plataformas sociales.📍 Simulado',
    images: ["../images/Redes-sociales/InJoy-App/InJoyApp-01.png","../images/Redes-sociales/InJoy-App/InJoyApp-02.png","../images/Redes-sociales/InJoy-App/InJoyApp-03.png","../images/Redes-sociales/InJoy-App/InJoyApp-04.png","../images/Redes-sociales/InJoy-App/InJoyApp-05.png","../images/Redes-sociales/InJoy-App/InJoyApp-06.png","../images/Redes-sociales/InJoy-App/InJoyApp-07.png","../images/Redes-sociales/InJoy-App/InJoyApp-08.png","../images/Redes-sociales/InJoy-App/InJoyApp-09.png","../images/Redes-sociales/InJoy-App/InJoyApp-10.png","../images/Redes-sociales/InJoy-App/InJoyApp-11.png","../images/Redes-sociales/InJoy-App/InJoyApp-12.png","../images/Redes-sociales/InJoy-App/InJoyApp-13.png","../images/Redes-sociales/InJoy-App/InJoyApp-14.png"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  },
  'lucro-app': {
    title: 'Lucro App',
    description:
      'Diseño de campaña visual para anunciar promociones navideñas de una app de recompensas. Se crearon posts y carruseles informativos para Facebook, Instagram y LinkedIn, mostrando beneficios, tareas y premios disponibles para los usuarios. 📍 Simulado',
    images: ["../images/Redes-sociales/Lucro-App/LucroApp-01.jpg","../images/Redes-sociales/Lucro-App/LucroApp-02.png","../images/Redes-sociales/Lucro-App/LucroApp-03.png","../images/Redes-sociales/Lucro-App/LucroApp-04.png"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  },
  'newbody-redes': {
    title: 'NewBody',
    description: 'Campañas promocionales para Facebook e Instagram enfocadas en destacar tratamientos estéticos no invasivos. El objetivo era posicionar la marca, mostrar beneficios reales y activar el deseo de probar los servicios. 📍 FB + IG',
    images: ["../images/Redes-sociales/NewBody/NewBody-01.jpg","../images/Redes-sociales/NewBody/NewBody-02.png","../images/Redes-sociales/NewBody/NewBody-03.png"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  },
  'merrell-impresion': {
    title: 'Merrell (Impresión)',
    description: 'Diseño de materiales impresos para apoyar las actividades comerciales y de marca de Merrell. Se desarrolló un calendario físico de actividades y eventos, pensado para comunicar de manera clara y atractiva en entornos de tienda.',
    images: ["../images/Diseño-impresión/Merrell/Merrell-01.jpg","../images/Diseño-impresión/Merrell/Merrell-02.png","../images/Diseño-impresión/Merrell/Merrell-03.png"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
  },
  'newbody-impresion': {
    title: 'NewBody (Impresión)',
    description: 'Proyecto de diseño visual aplicado a entornos físicos para el centro estético NewBody. Se desarrollaron murales informativos, carteles promocionales y señalética interna, con el objetivo de educar al cliente sobre los tratamientos y mejorar la experiencia en punto de contacto.',
    images: ["../images/Diseño-impresión/NewBody/NewBody-01.png","../images/Diseño-impresión/NewBody/NewBody-02.png","../images/Diseño-impresión/NewBody/NewBody-03.png","../images/Diseño-impresión/NewBody/NewBody-04.png","../images/Diseño-impresión/NewBody/NewBody-05.png","../images/Diseño-impresión/NewBody/NewBody-06.jpg","../images/Diseño-impresión/NewBody/NewBody-07.jpg","../images/Diseño-impresión/NewBody/NewBody-08.jpg"],
    figmaLinks: [
      {
        title: "",
        embedUrl: "",
        directUrl: "",
        linkSate: "",
        botonNameFigma: "",
        botonNameSite: ""
      }
    ]
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