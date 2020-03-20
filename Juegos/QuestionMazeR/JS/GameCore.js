var fexe = true;
var fexeL6 = true;
var disableL6p = false;
var stat = 7;
var QuestN = 0;
var SDoor = -1;
var tstQuest = [12];
var ChBToNxLevelSDS = false;
var QuestEy = [
"&iquest;Como se llama est&eacute; juego?", "&iquest;Cu&aacute;ntos mil&iacute;metros hay en un metro?", "&iquest;Cu&aacute;ntas guerras mundiales ha habido?", "&iquest;Cu&aacute;nto es 1 + 1090999?", "Si naciste hace 10 a&ntilde;os &iquest;Cu&aacute;ntos tienes actualmente?", 
"En la qu&iacute;mica se dice que un &aacute;tomo se oxida cuando:", "&iquest;Quien dijo la frase 'Yo solo s&eacute; que no s&eacute; nada'?", "&iquest;Cual es el valor la constante de gravitaci&oacute;n universal?", "Si vas por la puerta 1 puedes salir del juego... (&iquest;Confiar?)", "En el proceso biol&oacute;gico de la meiosis, &iquest;Cu&aacute;ntas celulas hijas se producen?"
];
var QuestEyA = [
"Question Maze", "Maze Question", "Son: 100 mm", "Son: 1000 mm", "Fueron: 2", "Han sido: 3", "El resultado es: 1010000", "El resultado es: 1091000", "Mi edad", "Tendria: 10",
"Se ganan electrones", "Se pierden electrones", "Lo dijo: Arist&oacute;teles", "Lo dijo: S&oacute;crates", "Vale: 6.02214x10^23", "Vale: 6.674x10^-11", "Si, vamos", "No, gracias", "Se forman: 4 c&eacute;lulas hijas", "Quedan: 2 c&eacute;lulas"
];
var QuestEyAV = [
"1", "0", "0", "1", "1", "0", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "1", "0"
];
var QuestHd = [
"&iquest;Por qu&eacute; los cocodrilos lloran?", "Si colocaramos todos los vasos sanguineos de 1 persona, uno al lado del otro en linea recta, &iquest;Que longitud tendrian?", "&iquest;Como se llama la monta&ntilde;a m&aacute;s alta de la tierra?", "&iquest;De que muri&oacute; Albert Einstein?", "&iquest;Cuando fue la conquista de M&eacute;xico?", 
"&iquest;Cual es el idioma oficial en las Islas Canarias?", "Si un gallo pone un huevo encima de un granero, &iquest;Para donde se cae?", "Segun el <i>IQ and the Wealth of nations</i>, &iquest;Cual es el pais con mayor IQ?", "¿En donde y en que a&ntilde;o naci&oacute; Xavier L&oacute;pez?", "&iquest;Cuantos n&uacute;meros puedes contar con los dedos de una sola mano?"
];
var QuestHdA = [
"1. Se sienten tristes", "Necesitan tener siempre h&uacute;medos los ojos .2", "3. Saben que se van a extinguir pronto", "Tiene sed, se bebe sus lagrimas .4", "1. Un 1,000,000 Kil&oacute;metros", "10,000 Kil&oacute;metros .2", "3. 2 veces y media la circunferencia terrestre", "10 metros .4",
"1. Monte Everest", "Monte Everst .2", "3. 蒙特珠穆朗玛峰", "Mont Everest .4", "1. De un paro cardiaco", "Transtorno neurocognitivo mayor .2", "3. Se volvi&oacute; loco :v", "Del s&iacute;ndrome de la triple AAA .4","1. De 1519 a 1521", "En 1910 .2", "3. En 1917", "De 1760 a 1840 .4", "1. Ingles", "Espa&ntilde;ol .2", "3. Catal&aacute;n", "Ninguna de las anteriores .4", "1. Ninguna de las anteriores", "&iquest;Que dices loco? .2", "3. Derecha", "Izquierda .4", "1. Italia", "Estados Unidos de America .2", "3. Jap&oacute;n", "Hong Kong .4", "1. Reino Unido, en 1926", "En M&eacute;xico, 1911 .2", "3. Estados Unidos, en 1940", "Estados Unidos, en 1935 .4", "1. Hasta 5 :''v", "Hasta 31 .2", "3. Quiz&aacute; 485", "No s&eacute; contar :''v .4",]; var Level = 0;

var QuestHdAV = [
"0", "1", "0", "0", "0", "0", "1", "0", "1", "0", "1", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "1", "0", "0", "1", "1", "0", "0", "0", "0", "0", "1", "0", "0", "0", "1", "1", "1", "1", "1"
];
document.onkeydown = function(e) {
	if (fexe) {
		if (e.keyCode == '49') {
			window.location.href = "Game.html";
		}
	}else if (stat == 0 && Level <= 5){
		if (!disableL6p && ChBToNxLevelSDS == false) {
			// Single - 1 pregunta con 2 respuestas 
			switch (e.keyCode){
				// W
				case 87:
					SDoor = 3;
					document.getElementById("NS").innerHTML = " ";
					document.getElementById("Reply01").innerHTML = " ";
					ChBToWall();
				break;

				// S
				case 83:
					SDoor = 0;
					document.getElementById("NS").innerHTML = "0";
					document.getElementById("Reply01").innerHTML = "Para salir presiona 0";
					ChBToODoor();
				break;

				// A
				case 65:
					SDoor = 1;
					document.getElementById("NS").innerHTML = "1";
					document.getElementById("Reply01").innerHTML = ""+QuestEyA[QuestN*2];
					ChBToDoor();
				break;

				// D
				case 68:
					SDoor = 2;
					document.getElementById("NS").innerHTML = "2";
					document.getElementById("Reply01").innerHTML = ""+QuestEyA[(QuestN*2)+1];
					ChBToDoor();
				break; 

				// 0
				case 48:
					if (SDoor == 0) {
						alert("No puedes ir, la primer puerta fue cerrada por fuera");
					}
				break;

				// 1
				case 49:
					if (SDoor == 1) {
						var pass = ValdAns(SDoor, 0);
						if (pass) {
							if (Level <= 5) {
								ChBToNxLevelS();
							}
						}
						else{
							backMenu();
						}
					}
				break;

				// 2
				case 50:
					if (SDoor == 2) {
						var pass = ValdAns(SDoor, 0);
						if (pass) {
							if (Level <= 5) {
								ChBToNxLevelS();
							}
						}
						else{
							backMenu();
						}
					}
				break;
			}
		}
	}else if (stat == 0 && Level > 5 && Level < 11) {
		if (fexeL6 && Level > 5) {
			for (var i = 0; i < tstQuest.length; i++) {
				tstQuest[i] = -7;
			}
			ChBToNxLevelS();
			fexeL6 = false;
		}
		if (!disableL6p && ChBToNxLevelSDS == false) {
			// Multiple - 1 pregunta con 4 respuestas 
			switch (e.keyCode){
				// W
				case 87:
					SDoor = 3;
					document.getElementById("NS").innerHTML = " ";
					document.getElementById("Reply01").innerHTML = " ";
					document.getElementById("ReplyL").innerHTML = " ";
					document.getElementById("ReplyR").innerHTML = " ";
					ChBToWall();
				break;

				// S
				case 83:
					SDoor = 0;
					document.getElementById("NS").innerHTML = "0";
					document.getElementById("Reply01").innerHTML = "Para salir presiona 0";
					document.getElementById("ReplyL").innerHTML = " ";
					document.getElementById("ReplyR").innerHTML = " ";
					ChBToODoor();
				break;

				// A
				case 65:
					SDoor = 1;
					document.getElementById("NS").innerHTML = " ";
					document.getElementById("Reply01").innerHTML = "";
					document.getElementById("ReplyL").innerHTML = ""+QuestHdA[(QuestN*4)];
					document.getElementById("ReplyR").innerHTML = ""+QuestHdA[(QuestN*4)+1];
					ChBTo2Doors();
				break;

				// D
				case 68:
					SDoor = 2;
					document.getElementById("NS").innerHTML = " ";
					document.getElementById("Reply01").innerHTML = "";
					document.getElementById("ReplyL").innerHTML = ""+QuestHdA[(QuestN*4)+2];
					document.getElementById("ReplyR").innerHTML = ""+QuestHdA[(QuestN*4)+3];
					ChBTo2Doors();
				break; 

				// 0
				case 48:
					if (SDoor == 0) {
						alert("No puedes ir, la primer puerta fue cerrada por fuera");
					}
				break;

				// 1
				case 49:
					if (SDoor == 1) {
						var num = 1;
						var pass = ValdAns(SDoor, num);
						if (pass) {
							if (Level > 5) {
								document.getElementById("Font").style.backgroundImage = "url('frames/GameOpDoL.gif')";
								ChBToNxLevelS();
							}
						}
						else{
							backMenu();
						}
					}
				break;

				// 2
				case 50:
					if (SDoor == 1) {
						var num = 2;
						var pass = ValdAns(SDoor, num);
						if (pass) {
							if (Level > 5) {
								document.getElementById("Font").style.backgroundImage = "url('frames/GameOpDoR.gif')";
								ChBToNxLevelS();
							}
						}
						else{
							backMenu();
						}
					}
				break;

				// 3
				case 51:
					if (SDoor == 2) {
						var num = 3;
						var pass = ValdAns(SDoor, num);
						if (pass) {
							if (Level > 5) {
								document.getElementById("Font").style.backgroundImage = "url('frames/GameOpDoL.gif')";
								ChBToNxLevelS();
							}
						}
						else{
							backMenu();
						}
					}
				break;

				// 4
				case 52:
					if (SDoor == 2) {
						var num = 4;
						var pass = ValdAns(SDoor, num);
						if (pass) {
							if (Level > 5) {
								document.getElementById("Font").style.backgroundImage = "url('frames/GameOpDoR.gif')";
								ChBToNxLevelS();
							}
						}
						else{
							backMenu();
						}
					}
				break;
			}
		}
	}else if (Level > 10) {
		document.getElementById("Quest").innerHTML = "Eres libre :''v, llegaste el nivel 10, saldras en 10 segundos...";
		document.getElementById("NS").innerHTML = " ";
		document.getElementById("Reply01").innerHTML = " ";
		document.getElementById("ReplyL").innerHTML = " ";
		document.getElementById("ReplyR").innerHTML = " ";
		document.getElementById("LevelDd").innerHTML = " ";
		alert("Pudiste salir del laberinto :v");
		ChBToODoor();
		setTimeout(getOutFromHere, 10000);
	}
};
function CIndFexe() {
	fexe = false;
}
function SetStatC0() {
	stat = 0;
}
function getQuestEasy() {
	QuestN = Math.floor(Math.random()*10);
	var tryAgain = false;
	for (var i = 0; i < tstQuest.length; i++) {
		if (QuestN == tstQuest[i]) {
			tryAgain = true;
			// alert("Question refused");
			break;
		}
	}
	if (tryAgain) {
		getQuestEasy();
	}
	else{
		SaveAnsQuest(false);
		document.getElementById("Quest").innerHTML = ""+QuestEy[QuestN];
		Level += 1;
	}
}
function getQuestHard() {
	QuestN = Math.floor(Math.random()*10);
	var tryAgain = false;
	for (var i = 0; i < tstQuest.length; i++) {
		if (QuestN == tstQuest[i]) {
			tryAgain = true;
			// alert("Question refused");
			break;
		}
	}
	if (tryAgain) {
		getQuestHard();
	}
	else{
		SaveAnsQuest(true);
		document.getElementById("Quest").innerHTML = ""+QuestHd[QuestN];
		Level += 1;
	}
}
function SaveAnsQuest(Lv6) {
	if (Lv6) {
		tstQuest[Level-5] = QuestN;
	}
	else{
		tstQuest[Level] = QuestN;
	}
}
function ValdAns(isA, n) {
	if (Level <= 5) {
		if (isA == 1) {
			if (QuestEyAV[QuestN*2] == 1) {
				return true;
			}
			else{
				return false;	
			}
		}
		else{
			if ((QuestEyAV[QuestN*2]+1) == 1) {
				return true;
			}
			else{
				return false;	
			}
		}
	}
	else{
		if (n == 1) {
			if (QuestHdAV[QuestN*4] == 1) {
				return true;
			}
			else{
				return false;
			}
		}else if (n == 2) {
			if (QuestHdAV[((QuestN*4)+1)] == 1) {
				return true;
			}
			else{
				return false;
			}
		}else if (n == 3) {
			if (QuestHdAV[((QuestN*4)+2)] == 1) {
				return true;
			}
			else{
				return false;
			}
		}else if (n == 4) {
			if (QuestHdAV[((QuestN*4)+3)] == 1) {
				return true;
			}
			else{
				return false;
			}
		}
	}
}
function getLevelD() {
	document.getElementById("LevelDd").innerHTML = "Nivel "+Level;
}
function backMenu() {
	alert("Incorrecto, regresando al monopoly, tu puntuación fue de: "+Level);
	window.location.href = "../../Index.html";
	//esta linea manda los puntos ganados
	var aux = localStorage.getItem("puntos");
	aux=parseInt(aux)+parseInt(Level);
	localStorage.setItem("puntos",aux);
}
function ChBToWall() {
	document.getElementById("Font").style.backgroundImage = "url('frames/GameWall.png')";
}
function ChBToODoor() {
	document.getElementById("Font").style.backgroundImage = "url('frames/ODDoor.png')";
}
function ChBToDoor() {
	document.getElementById("Font").style.backgroundImage = "url('frames/CDoor.png')";
}
function ChBTo2Doors() {
	document.getElementById("Font").style.backgroundImage = "url('frames/CDoorD.png')";
}
function ChBToNxLevelSDSF() {
	ChBToNxLevelSDS = false;
}
function ChBToNxLevelS() {
	ChBToNxLevelSDS = true;
	SDoor = -1;
	if (Level <= 5) {
		document.getElementById("Quest").innerHTML = "Correcto";
		document.getElementById("NS").innerHTML = " ";
		document.getElementById("Reply01").innerHTML = " ";
		document.getElementById("LevelDd").innerHTML = " ";
		document.getElementById("Font").style.backgroundImage = "url('frames/GameODo.gif')";
		setTimeout(ChBToWall, 2300);
		setTimeout(getQuestEasy, 2500);
		setTimeout(getLevelD, 2500);
	}
	else{
		if (fexeL6) {
			disableL6p = true;
			alert("Se cancela todo, subamos la dificultad xD");
			document.getElementById("Quest").innerHTML = "Aumentando dificultad";
			document.getElementById("NS").innerHTML = " ";
			document.getElementById("Reply01").innerHTML = " ";
			document.getElementById("ReplyL").innerHTML = " ";
			document.getElementById("ReplyR").innerHTML = " ";
			document.getElementById("LevelDd").innerHTML = " ";
			setTimeout(ChBToWall, 1000);
			Level -= 1; 
			setTimeout(getQuestHard, 1200);
			setTimeout(getLevelD, 1200);
			disableL6p = false;
		}
		else{
			document.getElementById("Quest").innerHTML = "Correcto";
			document.getElementById("NS").innerHTML = " ";
			document.getElementById("Reply01").innerHTML = " ";
			document.getElementById("ReplyL").innerHTML = " ";
			document.getElementById("ReplyR").innerHTML = " ";
			document.getElementById("LevelDd").innerHTML = " ";
			setTimeout(ChBToWall, 2200);
			setTimeout(getQuestHard, 2400);
			setTimeout(getLevelD, 2400);
		}
	}
	setTimeout(ChBToNxLevelSDSF, 2450);
}
function getOutFromHere(){
	alert("Regresando al monopoly, tu puntuación fue de: "+Level);
	window.location.href = "../../Index.html";
	//esta linea manda los puntos ganados
	var aux = localStorage.getItem("puntos");
	aux=parseInt(aux)+parseInt(Level);
	localStorage.setItem("puntos",aux);
}