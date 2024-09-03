const ventana = document.querySelector('.main');
const botones = document.querySelector('.cnt-btn')
const btnAbrir = document.getElementById('show');
const btnCerrar = document.getElementById('close');
const elementosLista = document.querySelectorAll('li');

btnAbrir.addEventListener('click', () => {
    ventana.classList.remove('volver')
    ventana.classList.add('rotar');
    botones.classList.remove('volver-btn')
    botones.classList.add('rotar-btn');

    setTimeout(()=>{
        animacionNav(elementosLista);
    }, 100)
    
})
btnCerrar.addEventListener('click', ()=>{
    ventana.classList.remove('rotar')
    ventana.classList.add('volver');
    botones.classList.remove('rotar-btn')
    botones.classList.add('volver-btn');
    
    elementosLista.forEach((elemento)=>{
        elemento.style.transform = "translateX(-200%)"
    })
})
function animacionNav(elementos){
    elementos[0].style.transform = "translateX(10%)";
    elementos[1].style.transform = "translateX(20%)";
    elementos[2].style.transform = "translateX(30%)";
}
