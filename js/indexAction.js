//esta variable es la que en todo momebto llevará el conteo de en que casilla se encuentra el jugador
var casilla=0
before();

//esta funcion generara el numero al azar y llamará a duferentes metodos para funcionar bien
function generateNumber() {
	var aux = Math.random()*6
	var number=Math.floor(aux+1);
	//si es la primera vez que el jugador tira el dado pasa esto
	if(casilla==0){
		alert("el numero aleatorio es: "+number)
		casilla = number;
		if (casilla>6){
			alert("Felicidades ha terminado el juego, se reiniciará su posicion en el tablero")
			localStorage.setItem("casilla",0);
		}
			changePage(number)
	}else{//si no es la porimera vez pasara esto
		casilla+=number
		alert("el numero aleatorio es: "+number)
		if (casilla>6){
			alert("Felicidades ha terminado el juego, se reiniciará su posicion en el tablero")
			localStorage.setItem("casilla",0);
		}
		changePage(casilla)
	}
	before();
}

//esta es la funcion que va a guardadar en memoria que casilla es en la que se encuentra
function saveLocalStorage(number){
	var aux=number;
	localStorage.setItem("casilla",aux);
}

//esta funcion se encarga de pre-cargar o refrescar algunos datos
function before(){
	if (localStorage.getItem("casilla")>6){
			alert("Felicidades ha terminado el juego, se reiniciará su posicion en el tablero")
			localStorage.setItem("casilla",0);
	}
	if (localStorage.getItem("casilla")){
		refresh();
		console.log("entra a refrescar")
		console.log("valor de casilla: "+casilla)
		document.Menu.numeroCasilla.value=casilla;
	}
}

//esta funcion se encarga de comprobar cual fue el numero que salio al tirar el dado y te lleva a el juego corespondiente
function changePage(number){
	//window.location.assign("snake.html")
	saveLocalStorage(casilla);

	if(localStorage.getItem("casilla")==1){
		window.location.assign("snake.html")
	}else if(localStorage.getItem("casilla")==2){
		window.location.assign("Flappy Bird/index.html")
	}else if(localStorage.getItem("casilla") == 3){
		window.location.assign("Rompecabezas/index.html")
	}else if(localStorage.getItem("casilla") == 4){
		window.location.assign("Decifra/Ahorcado.html")
	}else if(localStorage.getItem("casilla")==5){
		window.location.assign("Encuentra el Tesoro/index.html")
	}else if(localStorage.getItem("casilla") == 6){
		window.location.assign("#")
	}
}
//esta funcion va a refrescar el valor de la casilla cada vez que se entre a la pagina
function refresh(){
	casilla =parseInt(localStorage.getItem("casilla"));
}