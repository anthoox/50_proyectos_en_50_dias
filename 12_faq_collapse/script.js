const botones = document.querySelectorAll('button');
const contenedor = document.querySelectorAll('.cnt_faq')
botones.forEach(boton => {
    boton.addEventListener('click', ()=>{
        boton.parentNode.parentNode.classList.toggle('active')
    })
});