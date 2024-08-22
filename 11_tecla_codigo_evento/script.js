const datos = document.querySelectorAll('main h3');

const tecla = document.addEventListener('keydown', (e)=>{
    let infoTecla = [e.key, e.keyCode, e.code];
    let arrayDatos = Array.from(datos);
    arrayDatos.map((dato, index) => {
        dato.innerText = infoTecla[index]
    })
})