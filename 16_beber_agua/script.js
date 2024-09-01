// Selección de todos los elementos con la clase vaso
const vasos = document.querySelectorAll('.vaso');

// Selección de elemento span que contiene el texto de agua restante
const valorAguaRestante = document.querySelector('.agua-restante span');

// Selección de las secciones agua acumulada y restante
const aguaAcumulada = document.querySelector('.agua-acumulada');
const aguaRestante = document.querySelector('.agua-restante')

// Se añade a cada elemento vaso un escuchador de evento para lanzar las funciones
vasos.forEach((vaso, index) => {
    vaso.addEventListener('click', () => {


        if (!vaso.classList.contains('vaso-completo')) {
            rellenar(index);

        } else {
            vaciar(index)
        }

        vasoGrande(vasos)
    })
})

// Funcion para rellenar los vasos vaciandolos antes
function rellenar(index) {
    vasos.forEach(vaso => {
        // Se borra la clase de todos los elementos
        vaso.classList.remove('vaso-completo')
    })

    // Bucle for para añadir la clase vaso-completo hasta el vaso clicado
    for (let i = index; i >= 0; i--) {
        vasos[i].classList.add('vaso-completo')
    }

}

// Función para vaciar los vasos
function vaciar(index) {
    // Si el index es 7
    if (index === 7) {
        vasos[index].classList.toggle('vaso-completo')
    }
    // Si tiene un elemento a continuación
    if (vasos[index].nextElementSibling) {
        // Si el elemento contiguo tiene la clase vaso-completo
        if (vasos[index].nextElementSibling.classList.contains('vaso-completo')) {
            // Bucle for descendente a partir de la longitud del array -1 para comprobar si tiene la clase y eliminarla
            for (let i = (vasos.length - 1); i >= (index + 1); i--) {
                if (vasos[i].classList.contains('vaso-completo')) {
                    vasos[i].classList.remove('vaso-completo')
                }
            }
        } else {
            // Elimina la clase vaso completo del elemento actual
            vasos[index].classList.remove('vaso-completo')
        }
    }

}

// Funcion para modificar el continido del vaso grande
function vasoGrande(vasos) {
    // Iniciamos contador en 0
    let contador = 0;

    // Buble for para comprobar si los elementos tiene la clase vaso-completo para aumentar contador
    for (let i = 0; i < vasos.length; i++) {
        if (vasos[i].classList.contains('vaso-completo')) {
            contador = i + 1;
        }
    }

    // Se multiplica el valor del contador por la cantidad en mililitros
    contador *= 250;

    // variable que almacena la cantidad acumulada en %
    let litros = 100 - (((2000 - contador) / 2000) * 100);

    // Se añade la diferencia entre capacidad total y el contador de agua acumulada
    valorAguaRestante.innerText = (2000 - contador) / 1000;
    // Se añade el valor de litros en agua acumulada
    aguaAcumulada.innerText = litros + '%';

    // Modificación de la altura de los elementos
    aguaAcumulada.style.height = litros + '%';
    aguaRestante.style.height = (100 - litros) + '%';
}






