let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = document.querySelector('#valorUsuario').value;
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `¡Adivinaste! en ${intentos} ${(intentos==1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', '¡El numero secreto es menor!');
        } else {
            asignarTextoElemento('p', '¡El numero secreto es mayor!');
        }
        intentos++;
        limpiarCampo();
    }
}

function condicionesIniciales(){
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    asignarTextoElemento('p', `Indica un numero entre 1 y ${numeroMaximo}`);
    asignarTextoElemento('h1', 'Juego del numero secreto');
}

function limpiarCampo(){
    document.querySelector('#valorUsuario').value = '';

}

function reiniciarJuego(){
    limpiarCampo();
    condicionesIniciales();
    asignarTextoElemento('p', `Indica un numero entre 1 y ${numeroMaximo}`);
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if(listaNumerosSorteados.length == numeroMaximo){
        return asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

condicionesIniciales();
