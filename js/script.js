
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

var textoIngresado = document.querySelector("#input-texto");
var textoSalida = document.querySelector("#msg");

function encriptar(texto) {
    var textoModificado = "";

    for (let i = 0; i < texto.length; i++) {
        textoModificado += evaluarLetra(texto.charAt(i));
    }

    return textoModificado;
}

function evaluarLetra(letra) {
    if (letra == 'e') {
        return "enter";
    } else if (letra == 'i') {
        return "imes";
    } else if (letra == 'a') {
        return "ai";
    } else if (letra == 'o') {
        return "ober";
    } else if (letra == 'u') {
        return "ufat";
    } else {
        return letra.toString();
    }
}

var botonEncriptar = document.querySelector("#btn-encriptar");

botonEncriptar.addEventListener("click", function(event) {
    event.preventDefault();
    textoSalida.value = encriptar(textoIngresado.value);
    textoIngresado.value = "";
});



/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
function desencriptar(palabra) {
    palabra = palabra.replace(/enter/g, "e");
    palabra = palabra.replace(/imes/g, "i");
    palabra = palabra.replace(/ai/g, "a");
    palabra = palabra.replace(/ober/g, "o");
    palabra = palabra.replace(/ufat/g, "u");

    return palabra;
}

var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click", function(event) {
    event.preventDefault();
    textoSalida.value = desencriptar(textoIngresado.value);
    textoIngresado.value = "";
});


//Copiar
var botonCopiar = document.querySelector("#btn-copy");

botonCopiar.addEventListener("click", function(event) {
    event.preventDefault();
    var contenido = document.getElementById("msg");
    contenido.select();
    document.execCommand("copy");
});



