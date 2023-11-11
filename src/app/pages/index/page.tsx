import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';


const Home: React.FC = () => {
  return (
    <div>
       <Navbar />
      {/* Encabezado */}
      <header>
        <h1>Clínica Veterinaria Moderna</h1>
        <p>Tu mejor amigo merece lo mejor.</p>
      </header>

      {/* Sección de Servicios */}
      <section>
        <h2>Nuestros Servicios</h2>
        <ul>
          <li>Atención médica</li>
          <li>Cirugía</li>
          <li>Vacunas y prevención</li>
          <li>Laboratorio clínico</li>
        </ul>
      </section>

      {/* Sección de Testimonios */}
      <section>
        <h2>Testimonios</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"La clínica veterinaria moderna me ha brindado un excelente servicio para mi mascota."</p>
            <p>- Juan Pérez</p>
          </div>
          <div className="testimonial">
            <p>"El equipo de la clínica es muy profesional y amigable. Siempre cuidan de mi perro como si fuera de la familia."</p>
            <p>- María López</p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
