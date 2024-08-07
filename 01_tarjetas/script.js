const tarjetas = document.querySelectorAll('.tarjeta');
tarjetas.forEach((tarjeta)=>{
    
    tarjeta.addEventListener('click', (e)=>{
        eliminadorDeClases()
        e.target.classList.add('active')
    })

})
// Función para elimimar la clase active antes de volver a asignarla al elemento clicado
const eliminadorDeClases = () => {
    tarjetas.forEach(tarjeta => {
        tarjeta.classList.remove('active')
    })
}