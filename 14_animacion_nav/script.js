const navegador = document.getElementById('navegador');
const elementosLista = document.querySelectorAll('li');
const boton = document.querySelector('button');
const lineas = document.querySelectorAll('.linea')
const lista = document.querySelector('ul');

boton.addEventListener('click', ()=>{
    
    if(navegador.classList.contains('activo')){

        navegador.classList.remove('activo');
        lineas[1].classList.add('altura');

        lista.style.width ='0%';

        elementosLista.forEach(elemento => {
            elemento.style.transform = 'rotate(0deg)';
            elemento.style.opacity = 0;
        })

    }else{        

        lista.style.width = '100%';
     

        navegador.classList.add('activo');

        setTimeout(()=>{

        lineas[1].classList.remove('altura');

        },600)

        elementosLista.forEach(elemento => {
            elemento.style.transform = 'rotateY(360deg)';
            elemento.style.opacity = 1;
        })


    }
    
})