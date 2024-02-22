import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/globalContext'; // Asegúrate de importar el contexto correcto

const LocationComponent = () => {
  const { setLocalization } = useContext(GlobalContext); // Obtén la ubicación y la función para establecer la ubicación desde el contexto
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: 'bg-white',
    color: 'text-sky-500',
  });

  const getLocation = async () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000, // Tiempo máximo de espera en milisegundos (5 segundos en este caso)
      maximumAge: 0 // Descarta cualquier caché anterior de ubicación
    };
  
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
  
      const newLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
  
      setLocalization(newLocation); // Establece la ubicación en el contexto
      localStorage.setItem('myLocalization', JSON.stringify(newLocation)); // Guarda la ubicación en localStorage
      setButtonStyle({
        backgroundColor: 'bg-sky-500',
        color: 'text-white',
      });
  
      console.log(newLocation);
    } catch (error) {
      console.error('Error al obtener la ubicación del navegador:', error);
    }
  };
  

  return (
    <div className="absolute top-0 right-0 mt-16 mr-2 bg-opacity-90 rounded-lg z-10">
      <button onClick={getLocation} className={`px-4 py-2 rounded-full shadow-md ${buttonStyle.backgroundColor} ${buttonStyle.color}`}>
        *
      </button>
    </div>
  );
};

export default LocationComponent;
