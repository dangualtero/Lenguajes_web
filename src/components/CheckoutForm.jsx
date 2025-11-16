import React, { useState } from 'react';
import '../styles/checkoutForm.css';
import nequiImg from '../img/nequi.jpg'; 
import bancolombiaImg from '../img/bancolombia.jpg';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'efectivo',
    transferType: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Si eligió transferencia, redirigir a la app correspondiente
    if (formData.paymentMethod === 'transferencia') {
      if (formData.transferType === 'nequi') {
        // Deep link para Nequi
        window.location.href = 'nequi://';
        // Fallback a la Play Store si no tiene la app
        setTimeout(() => {

        }, 1500);
      } else if (formData.transferType === 'bancolombia') {
        // Deep link para Bancolombia
        window.location.href = 'bancolombia://';
        // Fallback a la Play Store si no tiene la app
        setTimeout(() => {
        
        }, 1500);
      }
    }
    
    onSubmit(formData);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <h2 className="form-section-title">Información de Entrega</h2>
        
        <div className="form-group">
          <label className="form-label">Nombre completo *</label>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Ej: Angeles Bonilla"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Teléfono *</label>
          <input
            type="tel"
            name="phone"
            className="form-input"
            placeholder="Ej: 300 123 4567"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Dirección de entrega *</label>
          <textarea
            name="address"
            className="form-textarea"
            placeholder="Ej: Calle 10 #20-30"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>
      </div>

      <div className="form-section">
        <h2 className="form-section-title">Método de Pago</h2>
        
        <div className="payment-methods">
          <label className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              value="efectivo"
              checked={formData.paymentMethod === 'efectivo'}
              onChange={handleChange}
            />
            <div className="payment-card">
              <span className="payment-text">Efectivo</span>
            </div>
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              value="transferencia"
              checked={formData.paymentMethod === 'transferencia'}
              onChange={handleChange}
            />
            <div className="payment-card">
              <span className="payment-text">Transferencia</span>
            </div>
          </label>
        </div>

        {/* Opciones de transferencia */}
        {formData.paymentMethod === 'transferencia' && (
          <div className="transfer-options">
            <p className="transfer-label">Selecciona tu método de transferencia:</p>
            <div className="transfer-methods">
              <label className="transfer-option">
                <input
                  type="radio"
                  name="transferType"
                  value="nequi"
                  checked={formData.transferType === 'nequi'}
                  onChange={handleChange}
                  required
                />
                <div className="transfer-card">
                  <div className="transfer-logo nequi-logo">
                    <span>
                      <img src={nequiImg} alt="Nequi Logo" className="nequi-image" />
                    </span>
                  </div>
                  <span className="transfer-name">Nequi</span>
                </div>
              </label>

              <label className="transfer-option">
                <input
                  type="radio"
                  name="transferType"
                  value="bancolombia"
                  checked={formData.transferType === 'bancolombia'}
                  onChange={handleChange}
                  required
                />
                <div className="transfer-card">
                  <div className="transfer-logo bancolombia-logo">
                    <span>
                      <img src={bancolombiaImg} alt="Bancolombia Logo" className="bancolombia-image" />
                    </span>
                  </div>
                  <span className="transfer-name">Bancolombia</span>
                </div>
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="form-section">
        <h2 className="form-section-title"> Notas Adicionales</h2>
        
        <div className="form-group">
          <textarea
            name="notes"
            className="form-textarea"
            placeholder="Ej: Sin cebolla, entrega después de las 2pm..."
            value={formData.notes}
            onChange={handleChange}
            rows="3"
          />
        </div>
      </div>

      <button type="submit" className="submit-button">
        Confirmar Pedido
      </button>
    </form>
  );
};

export default CheckoutForm;