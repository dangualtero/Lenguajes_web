import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import '../stylesubi/mapContainer.css';

const MapContainer = ({ location, name }) => {
  const [showInfo, setShowInfo] = useState(false);

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '1rem'
  };

  const center = {
    lat: location.lat,
    lng: location.lng
  };

  // Reemplaza con tu API Key de Google Maps
  const GOOGLE_MAPS_API_KEY = 'AIzaSyAYowbaf_KjLnPgKNPZrgi3HUotdHz2MZk';

  const mapOptions = {
    styles: [
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [{ color: '#fef7f0' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#d88c8c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ffffff' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#ffffff' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9b5f5f' }]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#ffe6e6' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9b5f5f' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#f3c2c2' }]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#d88c8c' }]
      }
    ],
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true
  };

  const markerIcon = {
    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    fillColor: '#d88c8c',
    fillOpacity: 1,
    strokeColor: '#c27070',
    strokeWeight: 2,
    scale: 2,
    anchor: { x: 12, y: 24 }
  };

  return (
    <div className="map-wrapper">
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
          options={mapOptions}
        >
          <Marker 
            position={center}
            icon={markerIcon}
            onClick={() => setShowInfo(!showInfo)}
          />
          
          {showInfo && (
            <InfoWindow
              position={center}
              onCloseClick={() => setShowInfo(false)}
            >
              <div style={{ 
                padding: '10px', 
                textAlign: 'center',
                fontFamily: '"Baloo 2", sans-serif'
              }}>
                <h3 style={{ 
                  color: '#d88c8c', 
                  margin: '0 0 5px 0',
                  fontSize: '1.2rem'
                }}>
                  {name}
                </h3>
                <p style={{ 
                  color: '#9b5f5f', 
                  margin: 0,
                  fontSize: '0.9rem'
                }}>
                  ¡Visítanos! 🍽️
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;