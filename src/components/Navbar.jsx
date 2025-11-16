import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path, hash = '') => {
    setMenuOpen(false);
    
    if (path === '/') {
      navigate('/');
      // Si hay hash, scroll después de navegar
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 
          className="logo" 
          onClick={() => handleNavigation('/')}
          style={{ cursor: 'pointer' }}
        >
          Lume Brunch
        </h1>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a onClick={() => handleNavigation('/', '#inicio')}>
            Inicio
          </a>
          <a onClick={() => handleNavigation('/', '#menu')}>
            Menú
          </a>
          <a onClick={() => handleNavigation('/location')}>
            Ubicación
          </a>
          <a onClick={() => handleNavigation('/', '#user')}>
            Iniciar sesión <i className="bi bi-person"></i>
          </a>
        </nav>

        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;