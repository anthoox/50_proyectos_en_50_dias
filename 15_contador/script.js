/*
Hay 3 contadores y creamos un array con otros 3 valores como objetivos.
Un objetivo para cada contador ayudará a especificar el contador usando el index del array
*/

// Se lanza el evento al cargar la ventana
window.addEventListener('load', () => {
    // Array de número de visitantes de cada red
    const objetivos = [1200, 800, 11500];

    // Selección de los elementos que mostrarán el número de visitantes
    const contadores = document.querySelectorAll('h2');

    // Por cada objetivo y usando su index
    objetivos.forEach((objetivo, index) => {
        // Inicio de contador a 0
        let contador = 0;

        // Incremento para acelerar el contador en base al objetivo actual entre 100. Para que todos los contadores cargue a la vez
        const incremento = Math.ceil(objetivo / 100);

        // Intervalo que se repite cada 20ms 
        const interval = setInterval(() => {
            // Contador actual se suma con el incremento
            contador += incremento;

            // Si el contador es mayor que objetivo, se detiene para no pasar el objetivo
            if (contador > objetivo){
                contador = objetivo; 
            }
            
            // Se añade al elemento especificando el index
            contadores[index].innerText = contador;

            // Si el contador es igual o mayor al objetivo se detiene el setInterval 
            if (contador >= objetivo) {
                clearInterval(interval);
            }

        }, 20);
    })
})

