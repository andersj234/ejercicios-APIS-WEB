let parrafo =""
fetch("https://rickandmortyapi.com/api/character/").then(function recogeInformacion(respuesta){
    return respuesta.json()
}).then(function recibeInformacion(datos){
    for(let i =0; i <datos.results.length; i++){
      parrafo +=`<div class="card" id ="personaje">
    <img src="${datos.results[i].image}" alt ="imagen de ${datos.results[i].image}" />
        <div class"container">
            <h1>${datos.results[i].name}</h1>
        </div>
    </div>`
    }
    document.getElementById("div").innerHTML = parrafo
})