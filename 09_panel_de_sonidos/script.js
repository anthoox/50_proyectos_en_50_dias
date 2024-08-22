// Array con cada uno de los sonidos que se usarán
const sonidos = ['aplausos', 'boo', 'jadeo', 'ta-da', 'victoria', 'error'];
// Selección del botón pausa
const pausa = document.getElementById('pausa');

// pausa captura el evento clic y llama a la función stopSonidos
pausa.addEventListener('click', stopSonidos);

/* 
Por cada sonido del array, se crea un elemento button con la clase boton. Además
almacenamos el nombre de cada sonido en la variable nombreSonido donde se pasa la 
primera letra a mayúsculas y se concatena con el texto de sonido desde la posición
1 para añadir fmalmente el nombre dentro del elemento btn
*/
sonidos.forEach(sonido =>{
    const btn = document.createElement('button');
    btn.classList.add('boton');
    let nombreSonido = sonido.charAt(0).toUpperCase() + sonido.slice(1);
    btn.innerText = nombreSonido;

    // A cada boton se le la función stopSonidos 
    btn.addEventListener('click',() => {
        stopSonidos();
        // Se da play al elemento con el id seleccinado
        document.getElementById(sonido).play();
    })
    
    // Dentro del elemento con la clase botones, se añaden los elementos btn
    document.querySelector('.botones').appendChild(btn);
})

// Función que seleccionara todos los sonidos y los pausara y devolvera al principio
function stopSonidos(){
    sonidos.forEach(sonido => {
        const cntSonido = document.getElementById(sonido);
        cntSonido.pause();
        cntSonido.currentTime = 0;
    })
}