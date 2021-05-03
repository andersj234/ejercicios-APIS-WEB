let parrafo = ""
fetch("https://randomuser.me/api/").then(function recogeRespuesta(respuesta){
    return respuesta.json();
}).then(function recibeRespuesta(datos){
    for(let i = 0; i <datos.results.length; i++){
       parrafo += `
       <div class="card" id="planeta${i}">
         <img src="${datos.results[i].picture.large}" alt="imagen de ${datos.results[i].picture}" />
           <div class="container">
             <h1>${datos.results[i].name.title} ${datos.results[i].name.first} ${datos.results[i].name.last}</h1>
             <p>email: ${datos.results[i].email}</p>
             <p>Nombre de la calle: ${datos.results[i].location.street.name}</p>
             <p>numero de la calle: ${datos.results[i].location.street.number}</p>
             <p>Ciudad: ${datos.results[i].location.city}</p>
             <p>Estado: ${datos.results[i].location.state}</p>
             <p>Pais: ${datos.results[i].location.country}</p>
             <p>Codigo postal: ${datos.results[i].location.postcode}</p>
           </div>
       </div>
       `;
    }
    document.getElementById("div").innerHTML = parrafo
}) 