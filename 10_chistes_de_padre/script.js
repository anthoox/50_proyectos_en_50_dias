// Selección del elemento que contendrá el chiste
const cntChiste = document.getElementById('chiste');
// Selección del botón 
const btn = document.querySelector('button');
// Se añade escuchador de evento a btn para llamar a la función generadorBromas
btn.addEventListener('click', generadorBromas)

/*
Función que se conecta a la API icanhazdadjoke para obtener y mostrar una broma
*/
function generadorBromas() {
    // Configuración de la cabecera para la solicitud, especificando que se aceptará una respuesta en formato JSON
    const config = {
        headers: { "Accept": "application/json" }
    };

    // Se establece la conexión con la API usando fetch, añadiendo la URL de la API y la configuración de la cabecera
    fetch("https://icanhazdadjoke.com/", config)
        // Se obtiene el resultado de la promesa, se convierte a formato JSON
        .then(res => res.json())
        // Se maneja el resultado de la promesa resuelta, y se actualiza el contenido del elemento cntChiste con la broma obtenida
        .then(data => cntChiste.innerText = data.joke)
        // Se captura cualquier error que ocurra durante la solicitud y se muestra en la consola
        .catch(error => console.error('Error:', error));
}
