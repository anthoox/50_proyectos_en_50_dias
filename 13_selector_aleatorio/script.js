const palabras = document.querySelector('.palabras');
const textArea = document.querySelector('textarea');

textArea.focus();

textArea.addEventListener('keyup', (e)=>{
    // Si se presiona la tecla Enter
    if(e.key === 'Enter'){
        // Se vacia el contenido del textArea tras 10 milisegundos para no crear más etiquetas
        setTimeout(()=>{
            e.target.value = '';
        }, 10)

        // Se llama a la función randomSelect
        selectorAleatorio()
    }

    // Almacena todo el contenido del textArea
    const texto = e.target.value
    /*
    Se crea el array etiquetas a partir del texto que se ha separado por comas,
    se ha filtrado cada etiqueta para evitar añadir alguna vacia y se mapea para 
    almacenar el texto sin espacios.
    */
    const etiquetas = texto.split(',').filter(etiqueta => etiqueta.trim() !== '').map(etiqueta => etiqueta.trim())
    
    // Se vacia el contenido del nodo palabras para que cada vez que se suelte una tecla
    // El programa se llame y vuelva a revisar la escrito y a imprimirlo
    palabras.innerHTML = '';

    /*
    Por cada etiqueta se crea un elemento span que almacenará el contenido de cada etiqueta.
    */
    etiquetas.forEach(etiqueta => {
        const cntEtiqueta = document.createElement('span');
        cntEtiqueta.innerText = etiqueta;
        // Se añade cada nodo span al nodo palabras
        palabras.appendChild(cntEtiqueta)
    });

})
function etiquetaAleatoria() {
    const etiquetas = document.querySelectorAll('span');
    return etiquetas[Math.floor(Math.random() * etiquetas.length)]
}


function selectorAleatorio(){
    const veces = 30;

    const saltos = setInterval(()=>{
        const etiqueta = etiquetaAleatoria();

        if(etiqueta !== undefined){
            etiqueta.classList.add('seleccionado');

            setTimeout(() => {
                etiqueta.classList.remove('seleccionado');
            }, 100)
        }
    }, 100)

    setTimeout(() => {
        clearInterval(saltos);

        setTimeout(()=>{
            const etiqueta = etiquetaAleatoria();
            etiqueta.classList.add('seleccionado');

        },0)

    }, veces * 100);
}


