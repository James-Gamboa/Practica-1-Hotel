//Función para ocultar el contenido al cargar la página
function ocultarContenido() {
  var intro = document.getElementById("cd");
  // @ts-ignore
  intro.className = "oculto";
  var intro = document.getElementById("texto");
  // @ts-ignore
  intro.className = "oculto";
}

//Función para mostrar el contenido al hacer clic en el botón
function mostrarContenido() {
  ocultarContenido();
  var intro = document.getElementById("cd");
  // @ts-ignore
  intro.className = "travel_list";
}

function mostrarContenido2() {
  ocultarContenido();
  var intro = document.getElementById("texto");
  // @ts-ignore
  intro.className = "textos";
}

//Llamar a la función ocultarContenido al cargar la página
window.onload = ocultarContenido;

//Agregar eventos de clic a los botones
var boton1 = document.getElementById("boton1");
// @ts-ignore
boton1.addEventListener("click", mostrarContenido);

var boton2 = document.getElementById("boton2");
// @ts-ignore
boton2.addEventListener("click", mostrarContenido2);
