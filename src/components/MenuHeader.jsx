import React from 'react';
import "../styles/menuHeader.css";

const MenuHeader = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="menu-header" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem',
      gap: '2rem'
    }}>
      {/* Espacio vacío izquierdo para balance */}
      <div style={{ flex: 1 }}></div>
      
      {/* Título centrado */}
      <div className="menu-title-section" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h1 className="menu-title">Menú Lume Brunch</h1>
        <p className="menu-subtitle">Descubre nuestros deliciosos platillos artesanales</p>
      </div>
      
      {/* Búsqueda a la derecha */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <div className="search-bar" style={{ 
          maxWidth: '280px',
          width: '280px',
          padding: '0.5rem 1rem',
          margin: '0'
        }}>
          <span className="search-icon" style={{ fontSize: '1rem' }}>🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{ fontSize: '0.85rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;