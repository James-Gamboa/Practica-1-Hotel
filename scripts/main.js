var activo = 0;
// @ts-ignore
function Function() {
  if (activo === 0) {
    var intro = document.getElementById("cd");
    // @ts-ignore
    intro.className = "oculto";

    var intro = document.getElementById("holi");
    // @ts-ignore
    intro.className = "textos";
    activo = 1;
  }
}
function Function2() {
  if ((activo = 1)) {
    var intro = document.getElementById("holi");
    // @ts-ignore
    intro.className = "oculto";
    var intro = document.getElementById("cd");
    // @ts-ignore
    intro.className = "travel_list";
    activo = 0;
  }
}
