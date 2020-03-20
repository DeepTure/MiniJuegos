//esta variable es la que en todo momebto llevará el conteo de en que casilla se encuentra el jugador
var casilla=0
before();

//Modifique los textos xD (de los alert)

//esta funcion generara el numero al azar y llamará a duferentes metodos para funcionar bien
function generateNumber() {
	var aux = Math.random()*6
	var number=Math.floor(aux+1);
	//si es la primera vez que el jugador tira el dado pasa esto
	if(casilla==0){
		alert("El dado dice: "+number)
		casilla = number;
		if (casilla>6){
			alert("Felicidades terminaste el juego, se reiniciará su posicion en el tablero")
			localStorage.setItem("casilla",0);
		}
			changePage(number)
	}else{//si no es la porimera vez pasara esto
		casilla+=number
		alert("El dado dice: "+number)
		if (casilla>6){
			alert("Felicidades terminaste el juego, se reiniciará su posicion en el tablero")
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
		alert("Felicidades terminaste el juego, se reiniciará su posicion en el tablero")
		// Añadi el cambio de fondo cuando ganas
		document.getElementById("Font").style.backgroundImage = "url('Img/-1.png')";

		localStorage.setItem("casilla",0);
	}
	if (localStorage.getItem("casilla")){
		refresh();
		console.log("entra a refrescar")
		console.log("valor de casilla: "+casilla)

		// Añadi el cambio del fondo segun la casilla

		if(localStorage.getItem("casilla")==1){
			document.getElementById("Font").style.backgroundImage = "url('Img/1.png')";

		}else if(localStorage.getItem("casilla")==2){
			document.getElementById("Font").style.backgroundImage = "url('Img/2.png')";

		}else if(localStorage.getItem("casilla") == 3){
			document.getElementById("Font").style.backgroundImage = "url('Img/3.png')";

		}else if(localStorage.getItem("casilla") == 4){
			document.getElementById("Font").style.backgroundImage = "url('Img/4.png')";

		}else if(localStorage.getItem("casilla")==5){
			document.getElementById("Font").style.backgroundImage = "url('Img/5.png')";

		}else if(localStorage.getItem("casilla") == 6){
			document.getElementById("Font").style.backgroundImage = "url('Img/6.png')";
		}

		//Quite el numero de casilla
		//document.Menu.numeroCasilla.value=casilla;
	}
}

//esta funcion se encarga de comprobar cual fue el numero que salio al tirar el dado y te lleva a el juego corespondiente
function changePage(number){
	//window.location.assign("snake.html")
	saveLocalStorage(casilla);

	//Cambie las referencias

	if(localStorage.getItem("casilla")==1){
		window.location.assign("Juegos/Snake/snake.html")

	}else if(localStorage.getItem("casilla")==2){
		window.location.assign("Juegos/Flappy_Bird/index.html")

	}else if(localStorage.getItem("casilla") == 3){
		window.location.assign("Juegos/Rompecabezas/index.html")

	}else if(localStorage.getItem("casilla") == 4){
		window.location.assign("Juegos/Decifra/Ahorcado.html")

	}else if(localStorage.getItem("casilla")==5){
		window.location.assign("Juegos/Encuentra_el_Tesoro/index.html")

	}else if(localStorage.getItem("casilla") == 6){
		window.location.assign("Juegos/QuestionMazeR/QuestionMaze.html")
	}
}
//esta funcion va a refrescar el valor de la casilla cada vez que se entre a la pagina
function refresh(){
	casilla =parseInt(localStorage.getItem("casilla"));
}