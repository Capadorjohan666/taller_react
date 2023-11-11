"use client"
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/registration.css';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    petName: '',
    petType: '',
    appointmentDate: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    console.log('Datos del formulario:', formData);

    // Marcamos el formulario como enviado
    setIsSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <div className="registration">
        <h2>Registro de Pacientes</h2>
        {isSubmitted ? (
          <div className="confirmation">
            <h3>¡Gracias por registrarte!</h3>
            <p>Resumen de la información:</p>
            <p>Nombre del Dueño: {formData.ownerName}</p>
            <p>Correo Electrónico: {formData.email}</p>
            <p>Nombre de la Mascota: {formData.petName}</p>
            <p>Tipo de Mascota: {formData.petType}</p>
            <p>Fecha de la Cita: {formData.appointmentDate}</p>
            <button onClick={() => setIsSubmitted(false)}>Editar</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre del Dueño:</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Correo Electrónico:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Nombre de la Mascota:</label>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Tipo de Mascota:</label>
              <select
                name="petType"
                value={formData.petType}
                onChange={handleFormChange}
                required
              >
                <option value="">Seleccionar tipo</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label>Fecha de la Cita:</label>
              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleFormChange}
                required
              />
            </div>
            <button type="submit">Registrarse</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Registration;
