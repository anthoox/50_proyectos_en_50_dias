const btn = document.getElementById('buscar');
const barra_buscar = document.getElementById('barra_buscar');
const buscador = document.querySelector('.buscador')
btn.addEventListener('click', ()=>{
    barra_buscar.classList.toggle('agrandar');
    if(barra_buscar.classList.contains('agrandar')){
        btn.style.transform = "translateX(210px)"
        buscador.classList.add('agrandar')

    }else{
        buscador.classList.remove('agrandar')

        btn.style.transform = "translateX(0px)"

    }

    
})