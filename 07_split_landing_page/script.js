const gato = document.getElementById('gatos');
const perro = document.getElementById('perros');
gato.addEventListener('mouseover', ()=>{
    agrandar(gato)
    encoger(perro)
    
})

perro.addEventListener('mouseover', () => {
    agrandar(perro)
    encoger(gato)
})

perro.addEventListener('mouseleave', () => {
    normalizar(perro)
    normalizar(gato)
})
gato.addEventListener('mouseleave', () => {
    normalizar(gato)
    normalizar(perro)

})


function agrandar(elemento){
    elemento.style.width = '75%';
    elemento.style.zIndex = '10000';
}

function encoger(elemento){
    elemento.style.width = '25%';
    elemento.style.zIndex = '10';
}

function normalizar(elemento){
    elemento.style.width = '50%';
}