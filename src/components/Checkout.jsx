import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';
import PaymentSuccess from './PaymentSuccess';
import '../styles/checkout.css';
import brunchBg from '../img/fondo2.png'; // Importar el fondo

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedItems, total } = location.state || { selectedItems: [], total: 0 };
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (selectedItems.length === 0) {
    navigate('/');
    return null;
  }

  const handleSubmitOrder = (formData) => {
   
    const orderNum = `LUME-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(orderNum);
    setShowSuccess(true);
  };

  if (showSuccess) {
    return <PaymentSuccess orderNumber={orderNumber} />;
  }

  return (
    <div className="checkout-page">
      <Navbar />
      <main className="checkout-main" style={{
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

        <div style={{ position: 'relative', zIndex: 1 }} className="checkout-container">
          <h1 className="checkout-title">Finalizar Compra</h1>
          
          <div className="checkout-grid">
            <CheckoutForm onSubmit={handleSubmitOrder} />
            <OrderSummary items={selectedItems} total={total} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;