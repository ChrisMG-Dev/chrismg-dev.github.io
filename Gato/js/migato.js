function dormir (gato) {
	gato.dormir();
}

function comer (gato) {
	gato.comer();
}

function jugar (gato) {
	gato.jugar();
}

function refrescarDatos(gato) {
	document.getElementById("peso").innerHTML = gato.peso + "KG";
	document.getElementById("estado").innerHTML = gato.estado;
	document.getElementById("aspecto").src = gato.aspecto;
	
	if (gato.estado === "Muerto") {
		document.getElementById("cajaBotones").innerHTML = "";
	}   		
}

window.onload = function () {
	document.getElementById("jugar").onclick = function() {
	    jugar(gato);
	    refrescarDatos( gato);
	}

	document.getElementById("comer").onclick = function() {
	    comer(gato);
	    refrescarDatos( gato);
	}  

	document.getElementById("dormir").onclick = function() {
	    dormir(gato);
	    refrescarDatos( gato);
	}  

};