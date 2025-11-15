import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Lume Brunch</h1>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            Inicio
          </a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>
            Menú
          </a>
          <a href="#ubicacion" onClick={() => setMenuOpen(false)}>
            Ubicación
          </a>
          <a href="#user" onClick={() => setMenuOpen(false)}>
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