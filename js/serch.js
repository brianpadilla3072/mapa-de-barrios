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
    if (s.properties.name == segmento) {
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

function Sugerencias(buscarBarrios, url) {
  // funcion buscador recibe dosparametros el que se enviay donde se envia
  $.ajax({
    url: url, //rutade pedido
    type: "POST", //TIPO DE METODO
    data: { buscarBarrios }, // valora a enviar;
    success: function (response) {
      const consultas = JSON.parse(response); // convertimos el string que viene de la base de datos en JSON
      let template;
      consultas.forEach((consultas) => {
        // SEPARA LAS CONSULTAS
        arrayBarrioDataList.push(new barrio(consultas.ID, consultas.NAME)); // agregamos al objetoutilizando la funcion

        template += `<option value="${consultas.NAME}" class="${consultas.ID}"></option>`;
      });
      $("#buscar").html(template);
    },
  });
}

/*
 *Funcion solicita el evento keyup
 *keyCode => Enter
 */
function something(event) {
  var mapPath = document.getElementsByTagName("path");
  //Evento del input llamado del html
  if (event.keyCode == 13) {
    //verificamosque el evento sea igual a enter
    arrayBarrioDataList.forEach((i) => {
      //recorremos el objeto
      if (i.barrio == $("#buscarBarrios").val()) {
        // por cada iteracion verificamos que sea igualal valor del imput
        Array.from(mapPath).forEach((path) => path.remove());
        mostrarMapa(i.barrio);

        por(barrioActual);
      }
    });
  }
}

var mark = marcadores();

function ubicarMarcador(coordenadas,typeC, name, description,typeD) {
  let t =  {"features": [
    {
      "geometry": {
          "coordinates": [ coordenadas
          ],
          "type": typeC
      },
      "properties": {
          "description": description,
          "name": name
      },
      "type": typeD
  },
  ]};
  console.log(t);
  l.geoJson(t).addTo(map);
}
function por(poly) {
  //publicar segmentos
  let t = "";
  mark.features.forEach((i) => {
    // por cada fila del objeto feature del archivo marcadores
    let polygon = L.polygon(poly.features[0].geometry.coordinates); //coordinadas dentro del objeto
    let m = L.marker(i.geometry.coordinates); //coordenadas dentro delmarcador
    if (polygon.contains(m.getLatLng())) {
      //verificamos si elmarcador esta dentro del poligono
      t += `<li class="${poly.features[0].properties.name} ml-3" onclick="ubicarMarcador(${i.geometry.coordinates},${i.geometry.type},${i.properties.name},${i.properties.description}, ${i.type})">
                   <h3>${i.properties.name}</h3> 
                    <p>${i.properties.description}</p>
                </li>`;
    }
  });
  $("#contenido ul").html(t);
}
$(document).ready(function () {
  Sugerencias($("#buscarBarrios").val(), "bd/main.php");
});
