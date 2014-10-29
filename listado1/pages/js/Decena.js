/*
* 7 . Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
* a. Cuántas cifras tiene (7 cifras)
* b. Lo muestre del revés
*/

function showResults(){

	var numero = document.getElementById("numero").value;
	var resultado = document.getElementById("resultado");
	var output = "Número inválido";
	var longitud;
	var color = "red";
	var numeroInvertido = [];

	numero = numero.replace(",",".");

	if(!isNaN(numero) && numero != ""){

		longitud = numero.length;

		numero = numero.toString();

		for(var i=0;i<longitud;i++){
			numeroInvertido.push(numero.charAt(i));
		}

		if(numero.indexOf(".") != -1){
			longitud -= 1;
		}

		numeroInvertido.reverse();
		output = numeroInvertido.toString().replace(/,/g, "");
		output += " longitud: " + longitud;
		color = "green";
	}

	resultado.innerHTML = output;
	resultado.style.color = color;
}