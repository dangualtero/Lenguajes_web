import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MapContainer from './MapContainer';
import LocationInfo from './LocationInfo';
import '../stylesubi/location.css';
import brunchBg from '../img/fondo2.png';

const Location = () => {
  const navigate = useNavigate();

 
  const restaurantLocation = {
    lat: 2.93992, 
    lng: -75.27988 
  };

  const restaurantInfo = {
    name: 'Lume Brunch',
    address: 'Carrera 16 # 28-45, Barrio Altico, Neiva, Huila',
    phone: '+57 300 536 3680',
    email: 'contacto@lumebrunch.com',
    schedule: {
      weekdays: 'Lunes - Viernes: 7:00 AM - 8:00 PM',
      weekend: 'Sábados - Domingos: 8:00 AM - 9:00 PM'
    }
  };

  return (
    <div className="location-page">
      <Navbar />
      <main 
        className="location-main"
        style={{
          backgroundImage: `url(${brunchBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          position: 'relative'
        }}
      >

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 245, 240, 0.90)',
          zIndex: 0
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }} className="location-container">
          <h1 className="location-title">📍 Nuestra Ubicación</h1>
          <p className="location-subtitle">Visítanos y disfruta de la mejor experiencia brunch</p>

          <div className="location-grid">
            <MapContainer location={restaurantLocation} name={restaurantInfo.name} />
            <LocationInfo info={restaurantInfo} />
          </div>

          <button 
            className="back-to-menu-button"
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

export default Location;