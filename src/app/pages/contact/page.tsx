"use client"

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor

    // Simulación de éxito (deberás ajustarlo según tu lógica real)
    setIsSubmitted(true);
  };

  return (
    <section className="contact">
      <Navbar />
      <div className="container">
        <h2>Contacto</h2>
        <p>¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte. Contáctanos a través del formulario a continuación:</p>

        {isSubmitted ? (
          <div className="confirmation">
            <p>Tu mensaje ha sido enviado con éxito. Gracias por ponerte en contacto con nosotros.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required onChange={handleFormChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required onChange={handleFormChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" required rows={4} onChange={handleFormChange} />
            </div>
            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
