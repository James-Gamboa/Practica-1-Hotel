window.addEventListener("load", formDisplay);
function formDisplay() {
  var formulario = document.getElementById("form-content");
  // @ts-ignore
  if (formulario.style.display === "none") {
    // @ts-ignore
    formulario.style.display = "block";
  } else {
    // @ts-ignore
    formulario.style.display = "none";
  }
}

function ocultarContenido() {
  var intro = document.getElementById("cd");
  // @ts-ignore
  intro.className = "oculto";
  var intro = document.getElementById("texto");
  // @ts-ignore
  intro.className = "oculto";
}

function showcontentDetails() {
  ocultarContenido();
  var intro = document.getElementById("cd");
  // @ts-ignore
  intro.className = "travel_list";
}

function showcontentHotel() {
  ocultarContenido();
  var intro = document.getElementById("texto");
  // @ts-ignore
  intro.className = "textos";
}

window.onload = ocultarContenido;

var hotel = document.getElementById("hotel");
// @ts-ignore
hotel.addEventListener("click", showcontentDetails);

var detail = document.getElementById("detail");
// @ts-ignore
detail.addEventListener("click", showcontentHotel);
