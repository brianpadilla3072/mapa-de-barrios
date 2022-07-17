let arrayBarrioDataList = []; //objeto iniciado
var barrioActual;

function barrio(id, barrio) {
  // molde del objeto
  this.id = id;
  this.barrio = barrio;
}
function mostrarMapa(segmento) {
  //PUBLICA EL SEGMESTO CORRESPONDIENTE
  let jason = barrios(); //GUARDA LA INFORMACION DE LOS SEGMENTOS

  jason.features.forEach((s) => {
    //RECORREMOS EL OBJETO
    if (s.properties.name.toLocaleLowerCase() == segmento.toLowerCase()) {
      // VERIFICAMOS QUE EL NOMBRE SEA IGUAL AL INGRESADO EN EL IMPUT
      function geo() {
        //objeto del segmento selecionado
        // FUNCION QUE RETORNA UN UN TEMPLATE CON LAS VARIABLES DEL OBJETO QUE PASO LA CONDICION
        let barrio = {
          //teplate
          features: [
            {
              geometry: {
                coordinates: s.geometry.coordinates,
                type: s.geometry.type,
              },
              properties: {
                name: s.properties.name,
              },
              type: s.type,
            },
          ],
        };
        return barrio;
      }
      barrioActual = geo();
      L.geoJson(geo()).bindPopup(`<i>name/i>`).addTo(map); //PUBLICAMOS UN TEMPLATE CON EL GEOJSON DEL SEGMENTo
    }
  });
}

function Sugerencias(buscarBarrios) {
  // funcion buscador recibe dosparametros el que se enviay donde se envia
  let b = barrios();
  let t = '';
    b.features.forEach((consultas) => {
        // SEPARA LAS CONSULTAS
       // agregamos al objetoutilizando la funcion
      if(consultas.properties.name.toLowerCase().includes(buscarBarrios.toLowerCase())){
        
        t += `<option value="${consultas.properties.name}" class="${consultas.properties.name}"></option>`;
        $("#buscar").html(t);
      }
    });
  
}

/*
 *Funcion solicita el evento keyup
 *keyCode => Enter
 */
function something(event) {
  var mapPath = document.getElementsByTagName("path");
  let b = barrios();
  let r = $('#buscarBarrios').val();
  //Evento del input llamado del html
  if (event.keyCode == 13) {
    //verificamosque el evento sea igual a enter
    b.features.forEach((i) => {
      //recorremos el objeto
      if (i.properties.name.toLowerCase().includes(r.toLowerCase())) {
        // por cada iteracion verificamos que sea igualal valor del imput
        Array.from(mapPath).forEach((path) => path.remove());
        //Array.from(marklist).forEach((ml) => L.mark(ml).remove());
        map.flyTo([-38.7183177,-62.2663478],13);

        if (marklist.length >= 0)
          marklist.forEach((m) => m.marks.remove());
        marklist = [];


        mostrarMapa(i.properties.name);

        por(i.geometry.coordinates);
      }
    });
  }
}

var mark = marcadores();
var marklist = [];
var marks;


function ubicarMarcador(titulo,descripcion) {
  mark.features.forEach((n)=> { 
    let latlng = [n.geometry.coordinates[1], n.geometry.coordinates[0]];
    let name = n.properties.name.toLowerCase();


    let mlc = () => { //Funcion que retorna un booleano
      var a = true;
      marklist.forEach((m) => { // por cada elemento
       // console.log(m.latlng[0] == latlng[0] && m.latlng[1] == latlng[1]) // compara ambas lat & lng
        if(m.latlng[0] == latlng[0] && m.latlng[1] == latlng[1])
          a = false; // al estar marcado le impide el acceso
      });
      return a;
    }

      if( name == titulo.toLowerCase() && mlc()) {
        marks = L.marker(latlng, {
          title: titulo,
          draggable:false,
          opacity: 0.75
          }).bindPopup(`<i> ${titulo} </i> <p> ${descripcion} </p>`)
          .addTo(map);
          map.flyTo(latlng, 16);
        marklist.push({latlng, marks});
      }
      
  })
 
}
function por(poly) {
  //publicar segmentos
  let t = "";
  mark.features.forEach((i) => {
    // por cada fila del objeto feature del archivo marcadores
    let polygon = L.polygon(poly); //coordinadas dentro del objeto
    let m = L.marker(i.geometry.coordinates); //coordenadas dentro delmarcador
    if (polygon.contains(m.getLatLng())) {
      let name = i.properties.name; 
      let description = i.properties.description; 
      t += `<div id="opcionMarker" class="col-auto ${poly} " onclick="ubicarMarcador('${name}','${description}')">
                   <div>
                      <h3>${i.properties.name}</h3> 
                      <p>${i.properties.description}</p>
                   </div>
                    <p class="line"></p>
                </div>`;
    }
  });
  $("#contenido").html(t);
}
$(document).ready(function () {
 
  Sugerencias($('#buscarBarrios').val());


  
});
