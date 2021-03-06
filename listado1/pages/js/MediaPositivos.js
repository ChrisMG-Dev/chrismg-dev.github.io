/**
* Implementa MediaPositivos que calcule la media de una serie
* de números positivos, introducidos por teclado. Dejará de 
* leer cuando el usuario introduzca el 0.
*/

numbers = [];


function sendNumber(number){

	var numbersSum = 0;
	var color = "red";
	var resultado = document.getElementById("resultado");

	if(number == ""){
		output = "El campo no puede estar vacío";
	}

	else if(isNaN(number) || number < 0){
		output = "Debe introducir un número positivo válido";
	}

	else {

		if(number != 0){
			numbers.push(number);	
			output = "Números introducidos: " + numbers.toString();
			document.getElementById("number").value = "";
			color = "green";
		}

		else{

			for(var i=0;i<numbers.length;i++){
				numbersSum += parseFloat(numbers[i]);
			}

			output = "La media es de: " + (numbersSum / numbers.length);
			color = "green";
			numbers = [];
		}
	}

	resultado.innerHTML = output;
	resultado.style.color = color;
}