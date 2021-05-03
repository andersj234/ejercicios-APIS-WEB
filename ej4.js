let parrafo2 = ""

fetch("https://swapi.dev/api/planets/")
  .then(function recogeRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function recibeRespuesta(datos) {
    let parrafo = "";
    for (let i = 0; i < datos.results.length; i++) {
      parrafo += `<option value="${datos.results[i].name}">${datos.results[i].name}</option>`;
    }
    document.getElementById(
      "planeta1"
    ).innerHTML = `<select id="planetas" onchange="cogePersonajes()">${parrafo}</select>`;
  });

function cogePersonajes() {
  let seleccion = document.getElementById("planetas").value;
  
  fetch("https://swapi.dev/api/planets/")
    .then(function recogeRespuesta(respuesta) {
      return respuesta.json();
    })
    .then(function recibeRespuesta(datos) {
      for (let i = 0; i < datos.results.length; i++) {
        if (datos.results[i].name === seleccion) {
          for (let j = 0; j < datos.results[i].residents.length; j++) {
            fetch(datos.results[i].residents[j])
              .then(function recogeRespuesta(respuesta) {
                return respuesta.json();
              })
              .then(function recibeRespuesta(datos) {
                parrafo2 += `<p>${datos.name}</p>`;
              });
          }
          console.log(parrafo2)
          document.getElementById("planeta2").innerHTML = parrafo2;
        }
      }
    });
}

//https://developers.google.com/books/ api para usar en la pagina web sobre libros
