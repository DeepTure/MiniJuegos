/*Programacion de JavaScript*/
var piezas = document.getElementsByClassName('movil');

var tamWidh = [89,121,93,107,120,107,92,104,104,108,107,107,106,93,122,90,103,92,121,107,106,107,108,90,90,122,93,121,93,121,107,90,104,106,107,107,106,93,122,89,90,121,93,121,107,107,94,104103,108,93,121,106,107,107,89,90,122,107,107,92,121,93,104,89,122,122,106,92,121,93,121,89];
var tamHeight= [80,80,79,80,80,96,80,80,99,115,110,99,115,77,96,100,115,84,100,115,83,100,100,115,84,100,116,100,100,98,110,84,115,115,83,83,99,99,83,115,84,84,115,99,115,99,116,84115,99,83,99,99,99,99,100,84,100,116,100,84,100,94,100,95,95,95,80,96,95,96,80,81];
for (var i = 0; i < piezas.length; i++) {
  piezas[i].setAttribute("width", tamWidh[i]);
  piezas[i].setAttribute("height", tamHeight[i]);
  piezas[i].setAttribute("x", Math.floor(Math.random() * 10 + 1));
  piezas[i].setAttribute("y", Math.floor(Math.random() * 409 + 1));
  piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
  elementSelect = reordenar(evt);
  currentX = evt.clientX;
  currentY = evt.clientY;
  currentPosx = parseFloat(elementSelect.getAttribute("x"));
  currentPosy = parseFloat(elementSelect.getAttribute("y"));
  elementSelect.setAttribute("onmousemove", "moverElemento(evt)");
}

function moverElemento(evt) {
  var dx = evt.clientX - currentX;
  var dy = evt.clientY - currentY;
  currentPosx = currentPosx + dx;
  currentPosy = currentPosy + dy;
  elementSelect.setAttribute("x", currentPosx);
  elementSelect.setAttribute("y", currentPosy);
  currentX = evt.clientX;
  currentY = evt.clientY;
  elementSelect.setAttribute("onmouseout", "deseleccionarElemento(evt)");
  elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
  iman();
}

function deseleccionarElemento(evt) {
  testing();
  if (elementSelect != 0) {
    elementSelect.removeAttribute("onmousemove");
    elementSelect.removeAttribute("onmouseout");
    elementSelect.removeAttribute("onmouseup");
    elementSelect = 0;
  }
}

var entorno = document.getElementById("entorno");

function reordenar(evt) {
  var padre = evt.target.parentNode;
  var clone = padre.cloneNode(true);
  var id = padre.getAttribute("id");
  entorno.removeChild(document.getElementById(id));
  entorno.appendChild(clone);
  return entorno.lastChild.firstChild;
}