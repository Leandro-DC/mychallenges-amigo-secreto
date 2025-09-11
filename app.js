/* El principal objetivo de este desafío es fortalecer tus habilidades en 
lógica de programación. Aquí deberás desarrollar la lógica para resolver
el problema.*/

let amigos = [];


/*Capturar el valor del campo de entrada: Utilizar document.getElementById 
o document.querySelector para obtener el texto ingresado por el usuario.

function agregarAmigo() {
    let nombreIngresado = (document.getElementById("amigo").value);
    console.log(nombreIngresado);
    return;
}*/
/*Validar la entrada: Implementar una validación para asegurarse de que el
campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error:
"Por favor, inserte un nombre."

function agregarAmigo() {
    let nombreIngresado = (document.getElementById("amigo").value);
    console.log(nombreIngresado);
    if (nombreIngresado.trim() === "") {
        alert('Por favor, ingrese un nombre.');
    }
    return;
}*/

/*Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo
que almacena los nombre de amigos usando el método.push().*/

/* Con ayuda web (trim)
function agregarAmigo() {
    let nombreIngresado = (document.getElementById("amigo").value);
    console.log(typeof nombreIngresado);
    if (nombreIngresado.trim() === "") {
        alert('Por favor, ingrese un nombre.');
    } else {
        amigos.push(nombreIngresado);
    }
    limpiarCaja();
    return;
}*/
function agregarAmigo() {
    let nombreIngresado = (document.getElementById("amigo").value);
    console.log(nombreIngresado);
    if (nombreIngresado === "") {
        alert('Por favor, ingrese un nombre.');
    } else {
        amigos.push(nombreIngresado);
        console.log(amigos);
    }
    limpiarCaja();
    return;
}

/*Limpiar el campo de entrada: Después de añadir el nombre, restablecer el 
campo de texto a una cadena vacía.*/
function limpiarCaja() {
    let valorCaja = document.getElementById("amigo").value = "";//copia de logica de programacion
}
function agregarALista() {
    let listaDeAmigos = domcumen.getElementById("listaAmigos");
}