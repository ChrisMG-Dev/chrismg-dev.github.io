/*
* Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo muestre
* escrito. Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Que 
* sea lo más eficiente posibleI
*
*/
function transformNumber(numero) {
	var numeros = {
		0: "Cero", 
		1: "Uno", 
		2: "Dos", 
		3: "Tres", 
		4: "Cuatro", 
		5: "Cinco", 
		6: "Seis", 
		7: "Siete", 
		8: "Ocho", 
		9: "Nueve",
		10: "Diez",
		11: "Once",
		12: "Doce",
		13: "Trece",
		14: "Catorce", 
		15: "Quince",
		20: "Veinte",
		30: "Treinta",
		40: "Cuarenta",
		50: "Cincuenta",
		60: "Sesenta",
		70: "Setenta",
		80: "Ochenta",
		90: "Noventa",
		100: "Cien"
	};

	var output;

	if (numero > 15 && numero < 20){
		output = "Dieci" + numeros[numero.charAt(numero.length - 1)].toLowerCase();
	}

	else if (numero > 20 && numero < 30){
		output = "Veinti" + numeros[numero.charAt(numero.length - 1)].toLowerCase();
	}

	else if (numero > 30 && numero < 40){
		output = "Treinta Y " + numeros[numero.charAt(numero.length - 1)].toLowerCase();
	}

	else if (numero > 40 && numero < 50){
		output = "Cuarenta Y " + numeros[numero.charAt(numero.length - 1)].toLowerCase();
	}

	else if (numero > 50 && numero < 60){
		output = "Cincuenta Y " + numeros[numero.charAt(numero.length - 1)].toLowerCase();
	}

	else if (numero > 60 && numero < 70){
		output = "Sesenta Y " + numeros[numero.charAt(numero.length - 1)].toLowerCase();
	}

	else if (numero > 70 && numero < 80){
		output = "Setenta Y " + numeros[numero.charAt(numero.length - 1)].toLowerCase();
	}

	else if (numero > 80 && numero < 90){
		output = "Ochenta Y " + numeros[numero.charAt(numero.length - 1)].toLowerCase();
	}

	else if (numero > 90 && numero < 100){
		output = "Noventa Y " + numeros[numero.charAt(numero.length - 1)].toLowerCase();
	}

	else {
		output = numeros[numero];
	}

	return output;
}

function checkNumber(){
	var number = document.getElementById("number").value;
	var resultado = document.getElementById("resultado");
	var output;
	var color = "red";

	if(number == ""){
		output = "Campo vacío";
	}

	else if(isNaN(number)){
		output = "Introduzca un número";
	}

	else if(number < 1 || number > 100){
		output = "El número debe estar entre el 1 y 100";
	}

	else {
		output = transformNumber(number);
		color = "green";
	}

	resultado.innerHTML = output;
	resultado.style.color = color;
}