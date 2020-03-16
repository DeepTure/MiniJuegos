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
	ctx.fillStyle = "blue";
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
		}
	});
	
}

 function main(){
 	createPlayer();

 }
 createPlayer();
movement();

 //setInterval("main()",velocidad);