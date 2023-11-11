import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <img src="/logo.png" alt="Veterinary Clinic" />
            <h1>Veterinary Clinic</h1>
          </div>
          <nav className="header-nav">
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/services">Servicios</Link>
              </li>
              <li>
                <Link href="/contact">Contacto</Link>
              </li>
              <li>
                <Link href="/registration">Registro</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
