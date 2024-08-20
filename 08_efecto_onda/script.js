const labels = document.querySelectorAll('label');
labels.forEach(label => {

    // Selecciona solo el texto que contiene la etiqueta label
    let texto = label.innerText;
    // El texto seleccionado se separa por caracter y se almacena en el array
    textoArray = texto.split('');
    // Se almacena en un nuevo array el siguiente HTML por cada caracter que tenga textoArray
    textoMapeado = textoArray.map((letra, index) => `<span style="transition-delay:${index * 25}ms">${letra}</span>`)
    // Con join se une cada elemento del array textoMapeado como cadena en textoUnido
    textoUnido = textoMapeado.join('')
    // Se añade la cadena al contenido del label
    label.innerHTML = textoUnido;

})