import React, { useState } from 'react';

/**
 * Página de contacto con un formulario simple.  Al enviar el formulario se
 * muestra un mensaje de agradecimiento y se reinician los campos.  No envía
 * datos a ningún servidor; es solo para demostrar la estructura visual.
 */
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se podría enviar la información a un servicio de backend.
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <h1 className="contact__title">Contacto</h1>
      <p className="contact__intro">Diseñemos algo increíble juntos.</p>
      {submitted && (
        <p className="contact__thanks">
          ¡Gracias! Tu mensaje ha sido recibido, te responderé a la mayor brevedad.
        </p>
      )}
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__field">
          <label htmlFor="name">Nombre *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact__field">
          <label htmlFor="email">E‑mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact__field">
          <label htmlFor="message">Mensaje *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="contact__submit">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactPage;