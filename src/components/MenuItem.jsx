import React from 'react';
import "../styles/menuItem.css"; 

const MenuItem = ({ item, onSelect, isSelected }) => {
  return (
    <div 
      className={`menu-item ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(item)}
    >
      <div className="menu-item-image-container">
        <img 
          src={item.image} 
          alt={item.name}
          className="menu-item-image"
        />
        <div className="menu-item-overlay" />
        
        
        {item.popular && (
          <div className="popular-badge">
            <span>⭐</span>
            <span>Popular</span>
          </div>
        )}
        
        {isSelected && (
          <div className="selected-heart">❤️</div>
        )}
        
        <div className="price-badge">
          <span>${item.price.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="menu-item-content">
        <span className="category-tag">{item.category}</span>
        <h3 className="menu-item-name">{item.name}</h3>
        <p className="menu-item-description">{item.description}</p>
        
        <div className="menu-item-tags">
          {(item.tags || []).map((tag, index) => (
         <span key={index} className="tag">#{tag}</span>
        ))}
        </div>
        
        <button 
          className={`add-button ${isSelected ? 'selected' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(item);
          }}
        >
          {isSelected ? '✓ Agregado' : '+ Agregar al pedido'}
        </button>
      </div>
    </div>
  );
};

export default MenuItem;