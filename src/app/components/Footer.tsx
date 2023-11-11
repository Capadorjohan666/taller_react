import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="Veterinary Clinic" />
            <h3>Veterinary Clinic</h3>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/services">Servicios</a>
              </li>
              <li>
                <a href="/contact">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <p>Contáctanos:</p>
            <p>Email: info@veterinaryclinic.com</p>
            <p>Teléfono: +1 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
