var velocidad = 120;
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
//para saber por que lugares va a pasar 
var placeX = [-1];
var placeY = [-1];
var modet=false;

function food() {
	var canvas2 = document.querySelector("#canvas");
	var ctx2 = canvas2.getContext("2d");
	var aux = Math.random()*590;
	var aux2 = Math.random()*590;

	ctx2.fillStyle = "black";
	ctx2.fillRect(aux,aux2,10,10);
}

var x=0;
var y=0;
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

function Tron(){
	if(modet==false){
		modet=true;
	}else{
		modet=false;
	}
}

function deleteCola(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
}


class objeto {
	constructor(){
		this.tamano = tamano;
	}
	choque(obj){
		var difx = Math.abs(this.x - obj.x);
		var dify = Math.abs(this.y - obj.y);
		if(difx >= 0 && difx < tamano && dify >= 0 && dify < tamano){
			return true;
		} else {
			return false;
		}
	}
}

class Cola extends objeto {
	constructor(x,y){
		super();
		this.x = x;
		this.y = y;
		this.siguiente = null;
	}
	dibujar(ctx){
		if(this.siguiente != null){
			this.siguiente.dibujar(ctx);
		}
		ctx.fillStyle = "#0000FF";
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
var cabeza = new Cola(20,20);
var comida = new Comida();
var ejex = true;
var ejey = true;
var xdir = 0;
var ydir = 0;

function findeJuego(){
	xdir = 0;
	ydir = 0;
	ejex = true;
	ejey = true;
	cabeza = new Cola(20,20);
	comida = new Comida();
	alert("Perdiste");
}
function choquepared(){
	if(cabeza.x < 0 || cabeza.x > 590 || cabeza.y < 0 || cabeza.y > 590){
		findeJuego();
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

 function main(){
 	createPlayer();

 }

 function movement(){
	up=true;
	down=true;
	left=true;
	right=true;
	window.addEventListener("keypress",function(event){
		if(event.keyCode==119 && up==true && y>0){
			if(modet==false){
				deleteCola();
			}
			y-=10;
			ctx.fillRect(x,y,10,10);
			up=true;
			down=false;
			left=true;
			right=true;
			placeX[placeX.legth+1] = x;
			placeY[placeY.legth+1] = y;
			collisions();
			choquecuerpo()
		} 
		if(event.keyCode==100 && right==true && x<587){
			if(modet==false){
				deleteCola();
			}
			x+=10;
			ctx.fillRect(x,y,10,10);
			up=true;
			down=true;
			left=false;
			right=true;
			placeX[placeX.legth+1] = x;
			placeY[placeY.legth+1] = y;
			collisions();
			choquecuerpo()
		}
		if(event.keyCode==97 && left==true && x>-2){
			if(modet==false){
				deleteCola();
			}
			x-=10;
			ctx.fillRect(x,y,10,10);
			up=true;
			down=true;
			left=true;
			right=false;
			placeX[placeX.legth+1] = x;
			placeY[placeY.legth+1] = y;
			collisions();
			choquecuerpo()
		}
		if(event.keyCode==115 && down==true && y<590){
			if(modet==false){
				deleteCola();
			}
			y+=10;
			ctx.fillRect(x,y,10,10);
			up=false;
			down=true;
			left=true;
			right=true;
			placeX[placeX.legth+1] = x;
			placeY[placeY.legth+1] = y;
			collisions();
			choquecuerpo()
		}
	});
	
}


 createPlayer();
movement();

 //setInterval("main()",velocidad);