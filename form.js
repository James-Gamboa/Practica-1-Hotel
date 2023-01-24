function formDisplay() {
  var formulario = document.getElementById("form-content")
  if (formulario.style.display === "none") {
      formulario.style.display = "block";
  } else {
      formulario.style.display = "none";
  }
}