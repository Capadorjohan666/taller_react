import Link from 'next/link';
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link href="/pages/index">Inicio</Link>
        </li>
        <li>
          <Link href="/pages/services">Servicios</Link>
        </li>
        <li>
          <Link href="/pages/registration">Registro</Link>
        </li>
        <li>
          <Link href="/pages/contact">Contacto</Link>
        </li>
        {/* Agregar más enlaces según tus necesidades */}
      </ul>
    </nav>
  );
};

export default Navbar;
