var activo=1
function Function() {
  if(activo==1){ 
  const text = document.createElement("p");
  text.classList.add("textos");
  text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum quibusdam magnam sunt culpa suscipit earum iusto aperiam unde blanditiis. Aut sunt beatae laborum perferendis temporibus doloremque adipisci et eos.";
  document.querySelector(".text").appendChild(text);
 };
 activo=0;
 }
 function Function2() {
  var cards = document.getElementById('cards');
  cards.innerHTML = '<img src="public/img/stars.png">';
  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = "Mexico";
  document.querySelector(".cards").appendChild(title);
  const texto = document.createElement("p");
  texto.classList.add("texto");
  texto.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum quibusdam magnam sunt culpa suscipit earum iusto aperiam unde blanditiis. Aut sunt beatae laborum perferendis temporibus doloremque adipisci et eos.";
  document.querySelector(".cards").appendChild(texto);
  var borrador = document.getElementById("text");
  borrador.outerHTML = "";
 }