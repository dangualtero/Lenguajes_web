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

      <div style={{ flex: 1 }}></div>
      

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

      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <div className="search-bar" style={{ 
          maxWidth: '280px',
          width: '280px',
          padding: '0.5rem 1rem',
          margin: '0'
        }}>
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