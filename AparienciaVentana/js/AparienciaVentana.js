window.onload = function(){

	document.getElementById("abrir").onclick = function(){
		openCustomSizeWindow(document.getElementById("height").value,
		document.getElementById("width").value);
	}
}

function openCustomSizeWindow(height, width){

	var errorOutput = "";
	var errorBox = document.getElementById("errorMsg");

	if(parseInt(height) < 50 || parseInt(width) < 50){
		errorOutput = "Tamaño incorrecto. Minimo 50";
	}

	else if(isNaN(height) || isNaN(width)){
		errorOutput = "Introduzca números válidos.";
	}

	else if(height.length == 0 || width.length == 0){
		errorOutput = "Debe introducir el tamaño de la ventana.";
	}

	else{
		var ventanaNueva = window.open("","_blank",
			"width=" + width + ", height=" + height);
		var contenidoVentanaNueva = ""
			+	"<html>"
			+	"<head><title>Ventana de Prueba</title></head>"
			+	"<body>"
			+	"<p>Se han utilizado las propiedades:</p>"	
			+	"<ul><li>height=" + height + "</li>"
			+	"<li>width=" + width + "</li>"
			+	"</ul></body></html>";

		ventanaNueva.document.open();
		ventanaNueva.document.write(contenidoVentanaNueva);
		ventanaNueva.document.close();
	}

	errorBox.innerHTML = errorOutput;
}