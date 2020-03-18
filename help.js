// generate a random Number
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x; //diferencia en el eje de las X (en donde dio clic en el mapa) 
  let diffY = e.offsetY - target.y;//diferencia en el eje de las Y (en donde dio clic en el mapa)
  return Math.sqrt((diffX * diffX) + (diffY * diffY));  // se aplica teorema de pitagoras  //Math.sqrt (raiz cuadrada)
}

// return an String depending on the distances 
let getDistanceHint = distance => {
  if (distance < 30) {
    return "Traigan a los bomberos te estas quemando!";
  } else if (distance < 40) {
    return "Muy Caliente";
  } else if (distance < 60) {
    return "Caliente";
  } else if (distance < 100) {
    return "Calido";
  } else if (distance < 180) {
    return "Frio";
  } else if (distance < 360) {
    return "Realmente Frio";
  } else {
    return "Te Estas Congelando Compa!";
  }
}