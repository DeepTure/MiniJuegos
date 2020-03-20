// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './helper';


// coordenadas del tesoro
const WIDTH = 400;
const HEIGH = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

// click handler
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 20 ) {
    alert(`Encontraste el tesoro en  ${clicks} clicks! :D`);
    location.reload();
    //mandar puntuaciones
    var aux = localStorage.getItem("puntos");
    aux = parseInt(aux)+10
    localStorage.setItem("puntos",aux)

    window.location.assign("../../Index.html")
  }
});
