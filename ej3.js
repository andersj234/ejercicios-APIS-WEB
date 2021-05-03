

let boton = document.getElementById("botonasa");

boton.addEventListener('click',function(){
  let anyos = document.getElementById('año').value; 
  let meses = document.getElementById('mes').value;
  let dias = document.getElementById('dia').value;


  fetch('https://api.nasa.gov/planetary/apod?api_key=D3DXIkIc7Qp7K69CYLDGIiU0aJow6hJbSgO8f36f&date='+anyos+'-'+meses+'-'+dias)
      .then(function recogeRespuesta(respuesta){
        return respuesta.json()  
      })
       .then(function(myJson){
        let div = document.createElement('div');
        document.getElementById('NASA').appendChild(div);
        let titulo = document.createElement('p');
        titulo.innerHTML=myJson.title;
        div.appendChild(titulo);
        let imagen = document.createElement('img'); 
        imagen.setAttribute('class','imagen');
        imagen.setAttribute('src',myJson.hdurl);
        div.appendChild(imagen);
    })
     
})

/*.then(function recibeInformacion(datos){
         document.getElementById('div').innerHTML = `<div>
         <p>${datos.date}</p>
         <p>${datos.title}</p>
         <img src="${datos.url}" alt ="${datos.url}"/>
         <p>${datos.explanation}</p>
         </div>`
        //esta es la opcion de clase le falta mas claro es que lo he sacado fuera de la otra manera
      })*/