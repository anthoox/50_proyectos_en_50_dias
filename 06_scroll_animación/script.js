window.onload = (()=>{
    const cajas = document.querySelectorAll('.caja');
    const cajasActivas = (()=>{
        // Calculamos la posición máxima de hasta 4/5 de la ventana 
        const altoVentana = window.innerHeight / 5 * 4;

        cajas.forEach(caja =>{
            // Obtiene la posición del borde superior del elemento con respecto a la ventana del navegador
            const distanciaCajaTop = caja.getBoundingClientRect().top;
            if(distanciaCajaTop < altoVentana){
                caja.classList.add('volver');
            }else{
                caja.classList.remove('volver');
            }
        })
    })
    // Llama a 'checkBoxes' al cargar la página para que los elementos que ya están en vista se muestren inmediatamente
    window.addEventListener('scroll', cajasActivas);
    cajasActivas();
})

