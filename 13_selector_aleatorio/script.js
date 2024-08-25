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

/*
Función que selecciona todos los elementos span y devuelve una etiqueta aleatoria.
Para elegir le etiqueta, usamos Math.random * la longitud del array y se redonde para abajo
*/
function etiquetaAleatoria() {
    const etiquetas = document.querySelectorAll('span');
    return etiquetas[Math.floor(Math.random() * etiquetas.length)]
}

/*
Función que inicia con un contador de hasta 30 veces para seleccionar una etiqueta aleatoria
y darle un estilo para que se diferencie de las demás
*/
function selectorAleatorio(){
    // Iniciamos el contador de hasta 30 veces
    const contador = 30;

    /* 
    Almacenamos el intervalor en la constante saltos para más adelante acabarlo. El intervalo se reinicia a los 100 milisegundos
    */
    const saltos = setInterval(()=>{
        // Se selecciona un elemento span aleatorio
        const etiqueta = etiquetaAleatoria();
        // Si el elemento es distinto a undefined
        if(etiqueta !== undefined){
            // Se añade la clase seleccionado al elemento selecciado
            etiqueta.classList.add('seleccionado');
            
            /*
            Usamos setTimeout para, tras 100 milisegundos, se elimine la clase seleccionado
            y así dar el efecto de que se estan eligiendo aleatoriamente los elementos.
            Finaliza quitando los estilos.
            */
            setTimeout(() => {
                etiqueta.classList.remove('seleccionado');
            }, 100)
        }
    }, 100)

    // Usamos setTimeout para tras 3segundos se seleccione un elemento aleatorio
    setTimeout(() => {
        // Se limpia la constante saltos para que termine
        clearInterval(saltos);

        /* 
        Se añade la clase seleccionado al elemento seleccionado. Se usa setTimeout para
        que la función se ejecute despues de clearInterval.
        */
        setTimeout(()=>{
            const etiqueta = etiquetaAleatoria();
            etiqueta.classList.add('seleccionado');

        },0)
    }, contador * 100);
}


