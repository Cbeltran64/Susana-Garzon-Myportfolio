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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Diseñadora UX/UI,</h1>
          <h2 className="text-4xl font-bold text-blue-600 mb-8">Creadora de experiencias digitales</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Mis experiencias digitales basadas en investigación, usabilidad y diseño visual. Cada proyecto combina
            estrategia, creatividad y validación con usuarios.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
              Ver portafolio
            </button>
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors">
              Descargar CV
            </button>
          </div>
        </div>
      </section>

      {/* Mi Expertise Section */}
      <section className="bg-black py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Mi Expertise</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Servicios que ofrezco para llevar tus proyectos al siguiente nivel
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎯", title: "Estrategia y Dirección UX", desc: "Definición de estrategia de diseño" },
              { icon: "✏️", title: "Branding e Identidad Visual", desc: "Creación de identidades visuales" },
              { icon: "📱", title: "Diseño de Producto Digital", desc: "Desarrollo de interfaces y UX" },
              { icon: "🎨", title: "Diseño Visual y Prototipado", desc: "Creación y validación de diseños" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Sobre mí</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-400 to-blue-400 h-96 rounded-lg"></div>
            <div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Soy una diseñadora UX/UI apasionada por crear experiencias digitales significativas. Mi enfoque combina
                investigación profunda, principios de usabilidad y diseño visual cautivador.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Con años de experiencia trabajando con startups y empresas establecidas, he aprendido que el diseño real
                es invisible—funciona porque entiende a los usuarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">¿Trabajamos juntos?</h2>
          <p className="text-blue-100 mb-12 text-lg leading-relaxed">
            Estoy disponible para nuevos proyectos. Envíame un mensaje y conectemos para crear algo increíble juntos.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Tu email"
              className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500"
            />
            <textarea
              placeholder="Tu mensaje"
              rows={4}
              className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500"
            ></textarea>
            <button className="w-full px-6 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-blue-50 transition-colors">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;