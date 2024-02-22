import React, { createContext, useState, useEffect, useContext } from 'react';

// Creamos el contexto
const GlobalContext = createContext();

// Creamos un componente de proveedor que envolverá a nuestra aplicación
const MyContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  // Obtener la ubicación actual del navegador cuando el componente se monte por primera vez
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const newLocation = { latitude, longitude };
            setLocation(newLocation); // Establece la ubicación en el estado
            try {
              localStorage.setItem('myLocalization', JSON.stringify(newLocation)); // Guarda la ubicación en el localStorage
            } catch (error) {
              console.error('Error al guardar la ubicación en localStorage:', error);
            }
          },
          (error) => {
            console.error('Error al obtener la ubicación del navegador:', error);
          }
        );
      } else {
        console.error('La geolocalización no está disponible en este navegador.');
      }
    };
    

    getLocation();
  }, []);

  // Cualquier lógica que desees implementar para manipular los datos
 
  const setLocalization = (newLocation) => {
    try {
      setLocation(newLocation);
    } catch (error) {
      console.error('Error al establecer la ubicación:', error);
    }
  }
  const getLocalization = () => {
    try {
      return location
    } catch (error) {
      console.error('Error ');
    }
  }

  return (
    <GlobalContext.Provider value={{ getLocalization, setLocalization, location}}>
      {children}
    </GlobalContext.Provider>
  );
};

// Creamos un hook personalizado para acceder al contexto
const useGlobalContext = () => useContext(GlobalContext);

export { MyContextProvider, useGlobalContext, GlobalContext }; // También exportamos GlobalContext
