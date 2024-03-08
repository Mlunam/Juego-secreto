//En esta parte hacemos uso del DOM para mandar a llamar objetos de HTML
//Se utiliza el comando documet para hacer ferefencia al objeto y se asigna una variable
//luego con variable mas inner nos lleva a poder modificar la etiqueta HTML

/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Hola perros, juego del número secreto";*/

//Para optimizar, la linea 5 y 6 la inserté a una función

//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Indica un numero de 1 a 10";

//Anatomia de la función, declaración de la funcion
//Llamamos la función que queremos hacer
//<button onclick="intentoDeUsuario();" de esta forma se declaró en HTML

let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

/* En esta función se usa la función para llamar por etiqueta*/

function asignarTextoElemento (elemeto, texto) {
    let elementoHTML = document.querySelector(elemeto);
    elementoHTML.innerHTML = texto;
    return;    
}

/*En esta función, se esta usando la funcion para llamar por ID para identificar de mejor manera*/
/*mando a llamar el input para capturar el texto*/
/*En esta parte se hace referencia al boton Intentar, ya esta creado en HTML*/



function verificarIntento() {
    let numerosDeUsuario = parseInt(document.getElementById("valorUsuario").value);
 
    if (numerosDeUsuario === numeroSecreto) {
        //El usiario acierta el número secreto
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);

        //Habilitamos el otro boton, deshabilitando atributo
        document.getElementById("reiniciar").removeAttribute("disabled");
    }   else {
        //*El usuario no acertó*//
        if (numerosDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else{
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
} 

//Esta parte limpia la caja
function limpiarCaja () {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se jugaron todos los números posibles");
        } else {
        //Si el número generado está incluido en la lista
        if (listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
        }
    
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto perros");
    asignarTextoElemento("p", `Indica un numero de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    condicionesIniciales();
    //Generar el número aleatorio
    //Deshabilitar el boton de nuevo juego
    // Inicializar el número de intentos 
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales(); 

 
