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

// window.onload = function () {
//   document.getElementById("hotel").onclick = function () {
//     document.querySelector("main").style.display = "";
//     document.querySelector("#texto").style.display = "none";
//     document.querySelector("#cd").style.display = "block";
//   };
//   document.getElementById("detail").onclick = function () {
//     document.querySelector("main").style.display = "";
//     document.querySelector("#texto").style.display = "block";
//     document.querySelector("#cd").style.display = "none";
//   };
// };

window.onload = function () {
  // @ts-ignore
  document.querySelector("main #texto").style.display = "none";
  // @ts-ignore
  document.querySelector("main #cd").style.display = "none";
  // @ts-ignore
  document.getElementById("hotel").onclick = function () {
    // @ts-ignore
    document.querySelector("main #texto").style.display = "none";
    // @ts-ignore
    document.querySelector("main #cd").style.display = "block";
  };
  // @ts-ignore
  document.getElementById("detail").onclick = function () {
    // @ts-ignore
    document.querySelector("main #texto").style.display = "block";
    // @ts-ignore
    document.querySelector("main #cd").style.display = "none";
  };
};
