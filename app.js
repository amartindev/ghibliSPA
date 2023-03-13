function mostrarPelicula(indice) {
    fetch('database.json')
      .then(response => response.json())
      .then(data => {
        // Obtener la película correspondiente al índice proporcionado
        const pelicula = data.peliculas[indice];
  
        // Crear una variable para almacenar el contenido HTML
        let content = '';
  
        // Agregar los datos de la película al contenido HTML
        content += `
          <div class="pelicula">
            <div class="nombres">
                <h1 class="titulo">${pelicula.nombre_espanol}</h1>
                <h2 class="subtitulo">${pelicula.nombre_japones}</h2>
                <h3 class="year">(${pelicula.year})</h3>
            </div>
            <div class="imagen-personaje">
                <img src="${pelicula.imagen_personaje}" alt="${pelicula.nombre_espanol}">
            </div>
            <div class="descripcion">
                <p>${pelicula.descripcion}</p>
            </div>
          </div>
        `;
  
        // Agregar el contenido HTML a la página web
        document.querySelector('#container-pelicula').innerHTML = content;
        document.querySelector('#fondo-glass').innerHTML ='<div class="fondo-glass"></div>'
        // Establecer la imagen de fondo de la página
        document.body.style.backgroundImage = `url(${pelicula.imagen_fondo})`;
      })
      .catch(error => console.error(error));
  }
  let index = 0;
  // Llamar a la función para mostrar la primera película
  mostrarPelicula(index);
  
  function atras() {
    index--;
    if (index < 0) {
        index = 9;
    }
    mostrarPelicula(index);
  }
  
  function adelante() {
    index++;
    if (index > 9 ) {
        index = 0;
    }
    mostrarPelicula(index);
  }