const URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

const RUTA_IMG = 'https://image.tmdb.org/t/p/w1280';

const URL_BUSQUEDA = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';


const contenedor = document.querySelector(".contenedor");

const buscador = document.getElementById('buscador');
const formulario = document.getElementById('formulario');


// Función para obtener todos los datos de las peliculas
async function getPeliculas(url) {
    const res = await fetch(url);
    const data = await res.json();

    // Llamada a la función para mostrar los resultados
    mostrarPeliculas(data.results);
}

// Llamada a la función para obtener la información de la pelicula y mostrarlas
getPeliculas(URL);

// Función para mostrar los datos dentro del ccontenedor
function mostrarPeliculas(datos) {
    contenedor.innerHTML = "";

    datos.forEach((dato) => {
        const { title, poster_path, vote_average, overview } = dato

        const pelicula = document.createElement("div");
        pelicula.classList.add("pelicula");

        pelicula.innerHTML =
            `<img src="${RUTA_IMG + poster_path}" alt="${title}" />
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


// Función para asignar una clase u otra dependiendo de la puntuación de cada película
function colorValoracion(votos) {
    if (votos >= 8) {
        return 'verde';
    } else if (votos >= 5) {
        return 'naranja';
    } else {
        return 'rojo';
    }
}

// Se añade un escuchador a formulario para obtener el dato introducido y buscarlo con al función getPeliculas
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let dato = buscador.value;

    if (dato && dato !== '') {
        getPeliculas(URL_BUSQUEDA + dato);
    }
})
