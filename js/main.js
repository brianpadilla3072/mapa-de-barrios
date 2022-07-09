
function cambiarUbicacion(ibi){
let ubicacion = ibi.split(",");
  map.flyTo(ubicacion);
}
let map = L.map('map', {
    maxZoom: 100, 
    minZoom: 0,
    zoomControl: false // add this line
}).setView([-38.7183177,-62.2663478],11.5)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



//redefine zoom position 
L.control.zoom({
    position: 'bottomright'
}).addTo(map);

//cambiar marcador
var Icono = L.icon({
    iconUrl: "img/casa.png",
    iconSize: [40, 40],
    iconAnchor: [15, 40],
    shadowUrl: "",
    shadowSize: [35, 50],
    shadowAnchor: [0, 55],
    popupAnchor: [0, -40]
    });

// capa marcadores
/*var Augusta_Emerita = L.marker([-38.7183177, -62.2663478], {
    title: "Augusta Emerita",
    draggable:true,
    opacity: 0.75,
    icon: Icono
    }).bindPopup("<i>Bahia Blanca/i>")
    .addTo(map);*/
  
  



/*// agregamos capa en GeoJson
L.geoJson(barrios()).addTo(map);


L.geoJson(marcadores()).addTo(map);*/


/** 
let dato = document.getElementById('select-location')//le decimos que nos traigael valor de set location
dato.addEventListener('change',function(e){//al cambiar me va a ejecutar una funcion
  let cordenadas = e.target.value.split(",");// separa las cordenadas resividas por la opcion 
  map.flyTo(cordenadas,50);//conde va a viajar  el zoom
}) */

