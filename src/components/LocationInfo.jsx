import React from 'react';
import '../stylesubi/locationInfo.css';
import whatsappImg from '../redesIMG/whatsapp.jpg';
import facebookImg from '../redesIMG/facebook.jpg';
import instagramImg from '../redesIMG/instagram.jpg'; 
import telefonoImg from '../redesIMG/telefono.jpg';
import emailImg from '../redesIMG/gmail.jpg';

const LocationInfo = ({ info }) => {
  const handleDirections = () => {
    // Abrir Google Maps con las direcciones
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.address)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${info.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${info.email}`;
  };

  const handleWhatsApp = () => {
    const phoneNumber = info.phone.replace(3005363680, '');
    const message = encodeURIComponent('¡Hola! Me gustaría hacer una reservación en Lume Brunch');
    window.open(`https://wa.me/${+573005363680}?text=${message}`, '_blank');
  };

  const handleFacebook = () => {
    window.open('https://www.facebook.com/tuPaginaAqui', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/tuInstagramAqui', '_blank');
  };

 return (
    <div className="location-info">
      <div className="info-section">
        <h2 className="info-title"> Dirección</h2>
        <p className="info-text">{info.address}</p>
        <button className="info-button" onClick={handleDirections}>
           Cómo llegar
        </button>
      </div>

      <div className="info-section">
        <h2 className="info-title"> Contacto</h2>
        <p className="info-text">{info.phone}</p>
        <p className="info-text">{info.email}</p>
        <div className="contact-buttons">
          <button className="contact-icon-button" onClick={handleCall}>
            <img src={telefonoImg} alt="Teléfono" className="contact-icon" />
            <span>Llamar</span>
          </button>
          <button className="contact-icon-button" onClick={handleEmail}>
            <img src={emailImg} alt="Email" className="contact-icon" />
            <span>Email</span>
          </button>
        </div>
      </div>

      <div className="info-section">
        <h2 className="info-title"> Horarios</h2>
        <p className="info-text schedule">{info.schedule.weekdays}</p>
        <p className="info-text schedule">{info.schedule.weekend}</p>
      </div>

      <div className="info-section social-section">
        <h2 className="info-title"> Síguenos</h2>
        <div className="social-links">
          <button className="social-icon-button facebook-link" onClick={handleFacebook}>
            <img src={facebookImg} alt="Facebook" className="social-icon" />
            <span>Facebook</span>
          </button>
          <button className="social-icon-button instagram-link" onClick={handleInstagram}>
            <img src={instagramImg} alt="Instagram" className="social-icon" />
            <span>Instagram</span>
          </button>
          <button className="social-icon-button whatsapp-link" onClick={handleWhatsApp}>
            <img src={whatsappImg} alt="WhatsApp" className="social-icon" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;