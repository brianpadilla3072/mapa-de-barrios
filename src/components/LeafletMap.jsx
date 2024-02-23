// LeafletMap.js

import React, { useContext, useEffect, useRef, useState } from 'react';
import 'react-leaflet-markercluster/dist/styles.min.css';

import 'leaflet/dist/leaflet.css';
import '../components/css/global.css';
import { GlobalContext } from '../../context/globalContext';
import { MapContainer, TileLayer, Marker,Circle, Popup, ZoomControl } from 'react-leaflet';
import MapService from '../services/mapService';
import CharchJSON from '../markers/charchMarkers';
import ChurchMarkerIcon from '../assets/Church.webp'; 
import MyLocationMarkerIcon from '../assets/mylocation.png'; 

const LeafletMap = () => {
  const { getLocalization } = useContext(GlobalContext);
  const mapRef = useRef(null);
  const markerLocationRef = useRef(null);
  const circleLocationRef = useRef(null);
  

  const [ubicacionActual, setUbicacionActual] = useState(null);
  const charchMarkers = CharchJSON().features;

  const churchMarkerIcon = MapService.createIcon(ChurchMarkerIcon, [30, 30]);
  const miLocationIcon = MapService.createIcon(MyLocationMarkerIcon, [40, 40]);

  useEffect(() => {
    const fetchLocalization = async () => {
      const location = await getLocalization();
      setUbicacionActual(location);

      if (mapRef.current && location) {
        MapService.flyToLocation(mapRef.current, location, miLocationIcon);
      }
    };

    fetchLocalization();
  }, [getLocalization]);

  return (
    <MapContainer
      id='map'
      ref={mapRef}
      center={[-38.7183177, -62.2663478]}
      zoom={13}
      style={{ height: "100vh", width: "100vw" }}
      maxZoom={100}
      minZoom={0}
      zoomControl={false}
      position="bottomright"
      tolerance={0.5}
    >
      <TileLayer  
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" />
      
      {ubicacionActual && <>
      <Circle center={[ubicacionActual.latitude, ubicacionActual.longitude]} radius={500} // Radio en metros
        pathOptions={{ color: 'orange', fillColor: 'orange', fillOpacity: 0.1 }} // Opciones de estilo
        ref={circleLocationRef}
      />
      <Marker position={[ubicacionActual.latitude, ubicacionActual.longitude]} icon={miLocationIcon} ref={markerLocationRef}>
        <Popup>Tu ubicación actual</Popup>
      </Marker>
    </>}

      {charchMarkers.map((charch, index) => (
        <Marker key={index} position={[charch.geometry.coordinates[1], charch.geometry.coordinates[0]]} icon={churchMarkerIcon}>
          <Popup>{/* Usar el servicio Popup para generar el contenido */}
            {MapService.createPopupContent(charch.properties.name, charch.properties.description)}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
