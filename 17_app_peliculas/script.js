const URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const rutaImagen = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const contenedor = document.querySelector(".contenedor");



// Función para obtener todos los datos de las peliculas
async function getPeliculas(url) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    mostrarPeliculas(data.results);
}
getPeliculas(URL);

// Función para mostrar los datos dentro del ccontenedor
function mostrarPeliculas(datos) {
    contenedor.innerHTML = "";

    datos.forEach((dato) => {
        const { title, poster_path, vote_average, overview } = dato

        const pelicula = document.createElement("div");
        pelicula.classList.add("pelicula");

        pelicula.innerHTML =
            `<img src="${rutaImagen + poster_path}" alt="${title}" />
                <div class="informacion">
                    <h3>${title}</h3>
                    <span class="${colorValoracion(vote_average)}">${vote_average}</span>
                </div>
                <div class="descripcion">
                    <h3>${title}</h3>
                    <p>${overview}</p>
                </div>`;

        contenedor.appendChild(pelicula)
    });
}

function colorValoracion(votos){
    if(votos >= 8){
        return 'verde';
    }else if(votos >=5){
        return 'naranja';
    }else{
        return 'rojo';

    }
}