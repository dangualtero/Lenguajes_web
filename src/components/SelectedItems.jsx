import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/selectedItem.css";

const SelectedItems = ({ selectedItems, onRemove, onUpdateQuantity, total, totalItems }) => {
  const navigate = useNavigate();
  
  if (selectedItems.length === 0) return null;
  
  const handleCheckout = () => {
    navigate('/checkout', { state: { selectedItems, total } });
  };
  
  return (
    <div className="cart-panel">
      <div className="cart-header">
        <h3 className="cart-title">Tu Pedido</h3>
        <span className="cart-count">{totalItems} items</span>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => onUpdateQuantity(item.id, -1)}
                  className="quantity-button"
                >
                  -
                </button>
                <span className="quantity-text">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, 1)}
                  className="quantity-button"
                >
                  +
                </button>
              </div>
              <p className="cart-item-price">${(item.price * item.quantity).toLocaleString()}</p>
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
        <button className="order-button" onClick={handleCheckout}>
           Ordenar Ahora
        </button>
      </div>
    </div>
  );
};

export default SelectedItems;