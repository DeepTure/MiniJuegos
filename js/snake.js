//Variables globales
var velocidad = 80;
var tamano = 10;
var comidas = 0;
var comidamax = 0;


class objeto {
	constructor(){
		this.tamano = tamano;
	}
	choque(obj){
		score(comidas+1)
		var difx = Math.abs(this.x - obj.x);
		var dify = Math.abs(this.y - obj.y);
		if(difx >= 0 && difx < tamano && dify >= 0 && dify < tamano){
			return true;
		} else {
			return false;
		}
	}
}

function score(puntaje) {
	if(puntaje>comidamax){
		document.ajustes.record.value=comidas;
		comidamax=comidas
	}
}

function food() {
	var canvas2 = document.querySelector("#canvas");
	var ctx2 = canvas2.getContext("2d");
	var aux = Math.random()*590;
	var aux2 = Math.random()*590;

	ctx2.fillStyle = "black";
	ctx2.fillRect(aux,aux2,10,10);
}

class Cola extends objeto {
	constructor(x,y){
		super();
		this.x = x;
		this.y = y;
		this.siguiente = null;
	}
	borrar(){
		var canvas2 = document.querySelector("#canvas");
		var ctx2 = canvas2.getContext("2d");
		var aux = Math.random()*590;
		var aux2 = Math.random()*590;

		ctx2.fillStyle = "black";
		ctx2.fillRect(aux,aux2,10,10);
	}
	dibujar(ctx){
		if(this.siguiente != null){
			this.siguiente.dibujar(ctx);
		}
		ctx.fillStyle = "#FF8400";
		ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
	}
	setxy(x,y){
		if(this.siguiente != null){
			this.siguiente.setxy(this.x, this.y);
		}
		this.x = x;
		this.y = y;
	}
	meter(){
		if(this.siguiente == null){
			this.siguiente = new Cola(this.x, this.y);
		} else {
			this.siguiente.meter();
		}
	}
	verSiguiente(){
		return this.siguiente;
	}
}

function createPlayer(){
	x = Math.random()*590;
	y = Math.random()*590;
	ctx.fillStyle = "green";
	ctx.fillRect(x,y,10,10);
	placeX[placeX.legth+1] = x;
	placeY[placeY.legth+1] = y;
}

function collisions(){
	console.log(x+"<br>"+y+"<br>");
	//if(x<=-2 || x>=587 || y>=590 || y<=0)

	for (var i=0; i>=placeX.legth;i++) {
		if(placeX[i]>x-10 && placeX<x+10){
			if (placeY[i]<y+10 && placeY[i]>y-10){
				alert("perdiste");
			}
		}
	}
		
}

class Comida extends objeto {
	constructor(){
		super();
		this.x = this.generar();
		this.y = this.generar();
	}
	generar(){
		var num = (Math.floor(Math.random() * 59))*10;
		return num;
	}
	colocar(){
		this.x = this.generar();
		this.y = this.generar();
	}
	dibujar(ctx){
		ctx.fillStyle = "#01CC00";
		ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
	}
}
//Objetos del juego
var cabeza = new Cola(20,20);
var comida = new Comida();
var ejex = true;
var ejey = true;
var xdir = 0;
var ydir = 0;
function movimiento(){
	var nx = cabeza.x+xdir;
	var ny = cabeza.y+ydir;
	cabeza.setxy(nx,ny);
}

function deleteCola(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
}


function control(event){
	var cod = event.keyCode;
	if(ejex){
		if(cod == 38){
			ydir = -tamano;
			xdir = 0;
			ejex = false;
			ejey = true;
		}
		if(cod == 40){
			ydir = tamano;
			xdir = 0;
			ejex = false;
			ejey = true;
		}
	}
	if(ejey){
		if(cod == 37){
			ydir = 0;
			xdir = -tamano;
			ejey = false;
			ejex = true;
		}
		if(cod == 39){
			ydir = 0;
			xdir = tamano;
			ejey = false;
			ejex = true;
		}
	}
}

function findeJuego(){
	xdir = 0;
	ydir = 0;
	ejex = true;
	ejey = true;
	cabeza = new Cola(20,20);
	comida = new Comida();
	comidas=0;
	alert("Perdiste, tu record es: "+comidamax);
	window.location.assign("index.html")
}
function choquepared(){
	if(cabeza.x < 0 || cabeza.x > 590 || cabeza.y < 0 || cabeza.y > 590){
		findeJuego();
	}
}

function createPlayer(){
	x = Math.random()*590;
	y = Math.random()*590;
	ctx.fillStyle = "green";
	ctx.fillRect(x,y,10,10);
	placeX[placeX.legth+1] = x;
	placeY[placeY.legth+1] = y;
}

function collisions(){
	console.log(x+"<br>"+y+"<br>");
	//if(x<=-2 || x>=587 || y>=590 || y<=0)

	for (var i=0; i>=placeX.legth;i++) {
		if(placeX[i]>x-10 && placeX<x+10){
			if (placeY[i]<y+10 && placeY[i]>y-10){
				alert("perdiste");
			}
		}
	}
		
}
function choquecuerpo(){
	var temp = null;
	try{
		temp = cabeza.verSiguiente().verSiguiente();
	}catch(err){
		temp = null;
	}
	while(temp != null){
		if(cabeza.choque(temp)){
			//fin de juego
			findeJuego();
		} else {
			temp = temp.verSiguiente();
		}
	}
}

function dibujar(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0, canvas.width, canvas.height);
	//aquí abajo va todo el dibujo
	cabeza.dibujar(ctx);
	comida.dibujar(ctx);
}

function main(){
	choquecuerpo();
	choquepared();
	dibujar();
	movimiento();
	if(cabeza.choque(comida)){

		comidas+=1;
		comida.colocar();
		cabeza.meter();
	}

}

setInterval("main()", velocidad);


