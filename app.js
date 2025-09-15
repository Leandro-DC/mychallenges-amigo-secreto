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
    if (nombreIngresado === "") {
        alert('Por favor, ingrese un nombre.');
    }
    return;
}*/

/*Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo
que almacena los nombre de amigos usando el método.push().*/

/* Con ayuda web (trim)
function agregarAmigo() {
    let nombreIngresado = (document.getElementById("amigo").value).trim();
    console.log(nombreIngresado);
    if (nombreIngresado === "") {
        alert('Por favor, ingrese un nombre.');
    } else {
        amigos.push(nombreIngresado);
    }
    return;
}*/

/*Limpiar el campo de entrada: Después de añadir el nombre, restablecer el 
campo de texto a una cadena vacía.*/
//copia de logica de programacion
function limpiarCaja() {
    let valorCaja = document.getElementById("amigo").value = "";
}

//Aca mejore la funcion con chat gpt, ya que habia cosas que no funcionaban.
//Agregue trim() para evitar espacios en los nombres, con ayuda de web y gpt.
//Agregue return dentro del if, ya que si no me aquegaba amigos vacios a la lista, ayuda de gpt.
//Al agregar return, saque el else y deje lo del else afuera del if, y ahora si funciona.
//Agregue limpiarCaja()
//Agregue actualizarListaAmigos()

function agregarAmigo() {
    let nombreIngresado = (document.getElementById("amigo").value).trim();

    console.log(nombreIngresado);
    
    if (nombreIngresado === "") {
        alert('Por favor, ingrese un nombre.');
        return;
    }
    amigos.push(nombreIngresado);
    console.log(amigos);
    limpiarCaja();
    actualizarListaAmigos();
    return;
}

/*Aca tuve bastante problemas, cuando queria llamar listaAmigos, no me funcionaba porque escribi mal
el (let listaDeAmigos = domcumen.getElementById("listaAmigos");) escribi mal document.
Despues no sabia y no entendia como usar el bucle for, asique estuve investigando pero no habia caso, aca
fue cuando tuve que empezar a usar chat gpt y me ayudo con varios errores mencionados anteriormente.
tuve otro error al usar document de nuevo, usaba document.createComment en vez de document.createElement,
entonces no me creaba los nombres en lista de la pagina web.
*/

function actualizarListaAmigos() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML ="";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaDeAmigos.appendChild(li);
    }
}

/*LLamo la funcion del boton sortear amigo, y verifico si hay amigos dentro del array, si no hay,
lanza un alert de que no hay. Luego ya verificado sorteo el amigo secreto.*/

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("No hay amigos ingresados!!!")
        return;
    }
    let sorteo = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[sorteo];
    console.log(amigoSecreto);

    let resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = `${amigoSecreto}`;
}

/*
//Estas funciones quise usarla pero para eso debo modificar el boton onclick en html, cambiando la
funcion por ganadorSorteo(). Cosa que no pide el proyecto

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    return amigos[indice]; // 👈 devolvemos el nombre sorteado
}

function ganadorSorteo() {
    let resultado = document.getElementById("resultado");
    let amigoSecreto = sortearAmigo();

    if (amigoSecreto) { // solo si sortearAmigo() devolvió algo
        resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSecreto}</strong>`;
    }
}*/
