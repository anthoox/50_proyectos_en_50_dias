const contador = document.querySelector('.contador');
const tiempoTotal = 2500;
const cantidadDePasos = 100;
const intervalo = tiempoTotal / cantidadDePasos;
const contenedor = document.querySelector('.contenedor');

for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        contenedor.style.filter = 'blur(0px)';
        contador.style.opacity = 0
        contador.textContent = i;
    }, i * intervalo);
}