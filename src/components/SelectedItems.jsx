import React from 'react';
import "../styles/selectedItem.css";

const SelectedItems = ({ selectedItems, onRemove, total }) => {
  if (selectedItems.length === 0) return null;
  
  return (
    <div className="cart-panel">
      <div className="cart-header">
        <h3 className="cart-title">Tu Pedido</h3>
        <span className="cart-count">{selectedItems.length} items</span>
      </div>
      
      <div className="cart-items">
        {selectedItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img 
              src={item.image} 
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">${item.price.toLocaleString()}</p>
            </div>
            <button
              className="remove-button"
              onClick={() => onRemove(item.id)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-footer">
        <div className="cart-total">
          <span className="cart-total-label">Total:</span>
          <span className="cart-total-amount">${total.toLocaleString()}</span>
        </div>
        <button className="order-button">🛒 Ordenar Ahora</button>
      </div>
    </div>
  );
};

export default SelectedItems;