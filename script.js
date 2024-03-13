// alert("Hola este es mi Javascript");


/*
let nombre = "Marta";
nombre = "Maria";

var nombre1 = "Marta";
nombre1 = "Maria";

const nombre2 = "Marta";
//nombre2 = "Maria";

console.log(nombre)
console.log(nombre1)
console.log(nombre2)
*/


/*
// Seleccionar elementos
let contenidoTitulo = "Nombre"; //NONO

let titulo = document.querySelector(".logo")
titulo.innerHTML = contenidoTitulo

// Condicionales
let textoTitulo = titulo.innerText;
console.log(textoTitulo)

if(textoTitulo == "Nombre"){
    titulo.innerHTML = "Otro";
} else {
    console.log("no se cumple");
}
*/


/*
let nombre1 = "Ani";
let ciudad1 = "Bs As";
let gusto1 = "chocolate";

// Obtener el párrafo con la clase "parrafo2"
let parrafo = document.querySelector(".parrafo2")

// Funciones
// Función para cambiar el texto del párrafo
function cambiarTexto(nombre, ciudad, gusto){
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito. Me gusta el ${gusto} y salir a pasear en días de sol.`;
    return contenido;
}

// Obtener el texto a mostrar y asignarlo al párrafo
//parrafo.innerText = cambiarTexto("Maria","Lima","ceviche");
parrafo.innerText = cambiarTexto(nombre1, ciudad1, gusto1);
*/


/*
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el párrafo con la clase "parrafo2"
    let parrafo = document.querySelector(".parrafo2");

    // Función para cambiar el texto del párrafo
    function cambiarTexto(nombre, ciudad, gusto) {
        let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito. Me gusta el ${gusto} y salir a pasear en días de sol.`;
        return contenido;
    }

    // Obtener el texto a mostrar y asignarlo al párrafo
    parrafo.innerText = cambiarTexto("Maria", "Lima", "ceviche");
});
*/


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});