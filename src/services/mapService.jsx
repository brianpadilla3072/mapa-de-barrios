import L from 'leaflet';

const MapService = {
  flyToLocation: (map, location, icon) => {
    map.flyTo([location.latitude, location.longitude], 16);
    L.marker([location.latitude, location.longitude], { icon: icon }).addTo(map);
  },

  createIcon: (iconUrl, iconSize) => {
    return L.icon({
      iconUrl: iconUrl,
      iconSize: iconSize,
      iconAnchor: [iconSize[0] / 2, iconSize[1]],
      popupAnchor: [0, -iconSize[1]]
    });
  },
  createPopupContent: (title, description) => {
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
};

export default MapService;
