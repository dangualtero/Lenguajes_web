import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/paymentSuccess.css';
import brunchBg from '../img/fondo2.png'; // Importar el fondo

const PaymentSuccess = ({ orderNumber }) => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <Navbar />
      <main className="success-main" style={{
        backgroundImage: `url(${brunchBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}>
        {/* Overlay semi-transparente */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 245, 240, 0.90)',
          zIndex: 0
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }} className="success-container">
          <div className="success-icon">✓</div>
          <h1 className="success-title">¡Compra Exitosa!</h1>
          <p className="success-message">Tu pedido ha sido confirmado</p>
          
          <div className="order-number-box">
            <p className="order-number-label">Número de Pedido</p>
            <p className="order-number">#{orderNumber}</p>
          </div>

          <button 
            className="back-button"
            onClick={() => navigate('/')}
          >
           Volver al Menú
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;