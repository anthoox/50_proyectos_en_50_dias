const fondoPrincipal = document.querySelector('body');
const fondos = document.querySelectorAll('.fondo');
const btnDrc = document.querySelector('.drc');
const btnIzq = document.querySelector('.izq');

let contadorDrc = 1;
btnDrc.addEventListener('click', ()=>{
    fondos.forEach(fondo => {
        fondo.classList.remove('activo');
    });
    if(contadorDrc === 5){
        contadorDrc = 0;
    }
    if(contadorDrc <= 4){
        let img = fondos[contadorDrc].style.backgroundImage;

        fondos[contadorDrc].classList.add('activo');

        fondoPrincipal.style.backgroundImage = img;
        fondoPrincipal.style.backgroundImage = img;
        contadorDrc = contadorDrc + 1;
     }
})


let contadorIzq= 4;
btnIzq.addEventListener('click', () => {
    fondos.forEach(fondo => {
        fondo.classList.remove('activo');
    });
    if (contadorIzq === -1) {
        contadorIzq = 4;
    }
    if (contadorIzq >= 0) {
        let img = fondos[contadorIzq].style.backgroundImage;

        fondos[contadorIzq].classList.add('activo');

        fondoPrincipal.style.backgroundImage = img;
        contadorIzq = contadorIzq - 1;
    }
})
