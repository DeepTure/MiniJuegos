var palabras = ['JAVA', 'R','HTML','CSS','JAVASCRIPT','KOTLIN','C','PYTHON','PHP','RUBY','MYSQL','MONGODB','SUBLIMETEXT','NETBEANS','ECLIPSE','VISUALSTUDIO','JETBRAIN'];
var palabra="";
var cont=6;
var descubrir= document.getElementById("palabra");
var palaocul=[];
var buttons = document.getElementsByClassName('letra');

function seleccion(){
	var aleatorio = Math.floor(Math.random()*(palabras.length));
	palabra = palabras[aleatorio];
	huecos();
	imagenes();
	generar();
	
}

function huecos(){
	for (var i = 0; i <= palabra.length-1; i++) {
		palaocul[i]="_"
	}
	descubrir.innerHTML=palaocul.join("");
}

function imagenes(){
	document.getElementById("botones").innerHTML = "";
	if (cont==6) {
		document.getElementById("visual").innerHTML +="<img src='img/inicio1.png' alt='' id='imagen6'>";
	}
	if (cont==5) {
		document.getElementById("visual").innerHTML -="<img src='img/inicio1.png' alt='' id='imagen6'>";
		document.getElementById("visual").innerHTML +="<img src='img/inicio2.png' alt='' id='imagen5'>";
		generar()
	}
	if (cont==4) {
		document.getElementById("visual").innerHTML -="<img src='img/inicio2.png' alt='' id='imagen5'>";
		document.getElementById("visual").innerHTML +="<img src='img/inicio3.png' alt='' id='imagen4'>";
		generar()
	}
	if (cont==3) {
		document.getElementById("visual").innerHTML -="<img src='img/inicio3.png' alt='' id='imagen4'>";
		document.getElementById("visual").innerHTML +="<img src='img/inicio4.png' alt='' id='imagen3'>";
		generar()
	}
	if (cont==2) {
		document.getElementById("visual").innerHTML -="<img src='img/inicio4.png' alt='' id='imagen3'>";
		document.getElementById("visual").innerHTML +="<img src='img/inicio5.png' alt='' id='imagen2'>";
		generar()
	}
	if (cont==1) {
		document.getElementById("visual").innerHTML -="<img src='img/inicio5.png' alt='' id='imagen2'>";
		document.getElementById("visual").innerHTML +="<img src='img/inicio6.png' alt='' id='imagen1'>";
		generar()
	}
	if (cont==0) {
		document.getElementById("visual").innerHTML -="<img src='img/inicio6.png' alt='' id='imagen1'>";
		document.getElementById("visual").innerHTML +="<img src='img/error.png' alt='' id='imagen0'>";
		alert("La palabra era: "+palabra)
		window.location.assign("index.html")
	}
	if (cont==100) {
		document.getElementById("visual").innerHTML -="<img src='img/inicio1.png' alt='' id='imagen6'>";
		document.getElementById("visual").innerHTML -="<img src='img/inicio2.png' alt='' id='imagen5'>";
		document.getElementById("visual").innerHTML -="<img src='img/inicio3.png' alt='' id='imagen4'>";
		document.getElementById("visual").innerHTML -="<img src='img/inicio4.png' alt='' id='imagen3'>";
		document.getElementById("visual").innerHTML -="<img src='img/inicio5.png' alt='' id='imagen2'>";
		document.getElementById("visual").innerHTML -="<img src='img/inicio6.png' alt='' id='imagen1'>";
		document.getElementById("visual").innerHTML +="<img src='img/winner.png' alt='' id='imagen100'>";
		window.location.assign("index.html")
	}
}


function generar(){
	document.getElementById("botones").innerHTML = "";
	var abece="QWERTYUIOPASDFGHJKLÑZXCVBNM";
	for (var i = 0; i <=abece.length-1; i++) {
		letra=abece.charAt(i);
		document.getElementById("botones").innerHTML += "<button value='" + letra + "' onclick='comprobacion(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
	}
}

function comprobacion(letra){
	var virus=parseInt(formulario.porcentaje.value);
	var utilise=formulario.words.value;
	if(palabra.indexOf(letra) == -1) {
    	cont--;
    	imagenes();
    	formulario.porcentaje.value=virus+16
	}else{
		for(var i=0; i<palabra.length; i++) {
	      if(palabra[i]==letra) palaocul[i] = letra;
	    }
	    descubrir.innerHTML = palaocul.join("");	
	}
	formulario.words.value=utilise+ "_"+letra;
	final();
}

function final(){
	if( palaocul.indexOf("_") == -1 ) {
		cont=100
		imagenes();
		
	}
   
}


