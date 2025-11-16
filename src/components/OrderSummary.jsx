import React from 'react';
import '../styles/orderSummary.css';

const OrderSummary = ({ items, total }) => {
  return (
    <div className="order-summary">
      <h2 className="summary-title"> Resumen del Pedido</h2>
      
      <div className="summary-items">
        {items.map((item) => (
          <div key={item.id} className="summary-item">
            <img 
              src={item.image} 
              alt={item.name}
              className="summary-item-image"
            />
            <div className="summary-item-info">
              <p className="summary-item-name">{item.name}</p>
              <p className="summary-item-quantity">Cantidad: {item.quantity}</p>
            </div>
            <p className="summary-item-price">
              ${(item.price * item.quantity).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <div className="summary-total">
        <div className="summary-total-row">
          <span>Subtotal:</span>
          <span>${total.toLocaleString()}</span>
        </div>
        <div className="summary-total-row">
          <span>Domicilio:</span>
          <span>$7.000</span>
        </div>
        <div className="summary-total-row summary-total-final">
          <span>Total:</span>
          <span>${(total + 5000).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;