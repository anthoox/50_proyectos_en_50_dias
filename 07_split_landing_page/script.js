const gato = document.getElementById('gatos');
const perro = document.getElementById('perros');
gato.addEventListener('mouseover', ()=>{
    agrandarEncoger(gato, perro)    
})

perro.addEventListener('mouseover', () => {
    agrandarEncoger(perro, gato)
})

perro.addEventListener('mouseleave', () => {
    normalizar(perro, gato)
})
gato.addEventListener('mouseleave', () => {
    normalizar(gato, perro)
})


function agrandarEncoger(elemento1, elemento2){
    elemento1.style.width = '75%';
    elemento1.style.zIndex = '10000';

    elemento2.style.width = '25%';
    elemento2.style.zIndex = '10';
}

function normalizar(elemento1, elemento2){
    elemento1.style.width = '50%';
    elemento2.style.width = '50%';

}