var activo=0
function Function() {
 if (activo === 0) {
    var intro = document.getElementById('cd');
  intro.className = 'oculto';
  
  var intro = document.getElementById('paraf');
  intro.className = 'textos';
  activo=1;
}
}
function Function2() {
 if (activo =1 ) {
   var intro = document.getElementById('paraf');
  intro.className = 'oculto';
   var intro = document.getElementById('cd');
  intro.className = 'travel_list';
  activo=0;
 }  
}