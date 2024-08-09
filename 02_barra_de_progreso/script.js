// Obtener referencias a los elementos HTML con los IDs 'progreso', 'siguiente' y 'anterior'
const progreso = document.getElementById('progreso');
const next = document.getElementById('siguiente');
const prev = document.getElementById('anterior');

// Obtener todas las celdas (elementos con la clase 'celda')
const circulos = document.querySelectorAll('.celda');

// Inicializar una variable para seguir el estado actual (comienza en 1)
let activoActual = 1;

// Agregar un evento al botón 'siguiente' para aumentar el progreso
next.addEventListener('click', () => {
    // Incrementar el estado actual
    activoActual++;

    // Si el estado actual supera la cantidad de celdas, ajustarlo al máximo permitido
    if (activoActual > circulos.length) {
        activoActual = circulos.length;
    }

    // Actualizar la interfaz después del cambio de estado
    actualizar();
});

// Agregar un evento al botón 'anterior' para disminuir el progreso
prev.addEventListener('click', () => {
    // Disminuir el estado actual
    activoActual--;

    // Si el estado actual es menor a 1, ajustarlo al mínimo permitido
    if (activoActual < 1) {
        activoActual = 1;
    }

    // Actualizar la interfaz después del cambio de estado
    actualizar();
});

// Función para actualizar la interfaz visual según el estado actual
function actualizar() {
    // Recorrer cada celda y actualizar su clase según el estado actual
    circulos.forEach((circulo, index) => {
        console.log(activoActual); // Imprimir el estado actual en la consola para depuración

        // Si el índice de la celda es menor que el estado actual, agregar la clase 'activo'
        if (index < activoActual) {
            circulo.classList.add('activo');
        } else {
            // De lo contrario, remover la clase 'activo'
            circulo.classList.remove('activo');
        }
    });

    // Contar cuántas celdas tienen la clase 'activo'
    const activos = document.querySelectorAll('.activo');

    // Actualizar el ancho de la barra de progreso en función del número de celdas activas
    progreso.style.width = ((activos.length - 1) / (circulos.length - 1)) * 100 + "%";

    // Habilitar o deshabilitar los botones 'anterior' y 'siguiente' según el estado actual
    if (activoActual === 1) {
        prev.disabled = true; // Deshabilitar el botón 'anterior' si estamos en la primera celda
    } else if (activoActual === circulos.length) {
        next.disabled = true; // Deshabilitar el botón 'siguiente' si estamos en la última celda
    } else {
        // Habilitar ambos botones en otros casos
        prev.disabled = false;
        next.disabled = false;
    }
}
