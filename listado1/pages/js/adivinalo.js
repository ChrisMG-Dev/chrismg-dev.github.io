/*
*	Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número 
*	entre el 1 y el 100. Mostrará un mensaje:
*	a. Para indicar si has acertado (en una nueva ventana)
*	b. Para indicar si la solución es mayor o es menor.
*	Al finalizar, se le preguntará al usuario si quiere repetir el juego
*/
function checkContinue() {
	var continuar =  document.getElementsByName("continuar");
	if(continuar[0].checked) {
		activateInputs();
		window.opener.adivina = Math.round(Math.random() * (100 - 1) + 1);
		window.close();
	}

	else {
		window.opener.document.getElementsByTagName("h2")[0].innerHTML = "Has perdido";
		window.opener.document.getElementsByTagName("h3")[0].innerHTML = "";

		window.close();
	}
}


function comprobarAcierto(){
	var miVentana = window.open('','','width=400,height=400');
	var resultado;

	miVentana.document.open();
	miVentana.document.write("<html><head>");
	miVentana.document.write("<script src='js/adivinalo.js'></script>");
	miVentana.document.write("</head><body>");


	if(document.getElementById('userNum').value == adivina) {
		miVentana.document.write("<p>Has acertado! Felicidades</p>");
		miVentana.document.write("<p><b>¿Intentar de nuevo?</b></p>");
		miVentana.document.write("<input type='radio' name='continuar' " + 
			"value='si' checked/>Si&nbsp;");
		miVentana.document.write("<input type='radio' name='continuar' " + 
			"value='no' />No&nbsp;");
		miVentana.document.write("<input type='button' " + 
			"value='Aceptar' onClick='checkContinue()' />");
	}

	else {

		if (document.getElementById('userNum').value > adivina) {
			resultado = "menor";
		}

		else {
			resultado = "mayor";
		}

		miVentana.document.write("<p>El número a adivinar es " +
			resultado + "</p>");
		miVentana.document.write("<p>Sigue intentándolo</p>");
		miVentana.document.write("<input type='button' " + 
			"value='Cerrar' onClick='window.close();activateInputs()' />");
		
	}

	miVentana.document.write("</body></html>");
}

function activateInputs() {
		window.opener.document.getElementById("aceptar").disabled = false;
		window.opener.document.getElementById("userNum").disabled = false;
}

var adivina = Math.round(Math.random() * (100 - 1) + 1);
var intentos = 0;