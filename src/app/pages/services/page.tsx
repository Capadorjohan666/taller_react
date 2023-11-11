"use client"
import React from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/services.css';

const Services: React.FC = () => {
  return (
    <div>
    <Navbar />
    <div className="services">
      <h2>Nuestros Servicios</h2>
      <ul className="service-list">
        <li>
          <div className="service-item">
            <h3>Atención médica</h3>
            <p>Ofrecemos atención médica de calidad para mantener a tus mascotas saludables.</p>
          </div>
        </li>
        <li>
          <div className="service-item">
            <h3>Cirugía</h3>
            <p>Realizamos cirugías seguras y efectivas para abordar diversas necesidades de salud.</p>
          </div>
        </li>
        <li>
          <div className="service-item">
            <h3>Vacunas y prevención</h3>
            <p>Proveemos vacunas y medidas de prevención para proteger a tus mascotas contra enfermedades.</p>
          </div>
        </li>
        <li>
          <div className="service-item">
            <h3>Laboratorio clínico</h3>
            <p>Contamos con un laboratorio clínico para análisis y diagnóstico preciso.</p>
          </div>
        </li>
        <li>
          <div className="service-item">
            <h3>Radiología</h3>
            <p>Utilizamos tecnología de radiología para obtener imágenes detalladas en diagnósticos.</p>
          </div>
        </li>
        <li>
          <div className="service-item">
            <h3>Odontología</h3>
            <p>Brindamos servicios odontológicos para mantener la salud bucal de tus mascotas.</p>
          </div>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Services;

