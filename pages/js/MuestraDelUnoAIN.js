/*
	15. Implementa MuestraDelUnoAlN que pida un número entero y que muestre la 
	secuencia del 1 al número indicado. En caso de no poder generarse la secuencia
	(menor que 1), que lo indique.

*/

function sendNumber(number){

	var resultado = document.getElementById("resultado"); 
	var output = "";
	var color = "red";

	if(number == ""){
		output = "Campo vacío";
	}

	else if(isNaN(number)){
		output = "Debe introducir un número";
	}

	else if(number < 2){
		output = "El número debe ser mayor que 1";
	}

	else {
		output = stringFromOneToTarget(number);
		color = "green";
	}

	resultado.innerHTML = output;
	resultado.style.color = color;


}

function stringFromOneToTarget(number){

	var sequence = [];

	for(var i = 1; i<=number; i++){
		sequence.push(i);
		if(i % 20 == 0){
			sequence.push("<br />");
		}
	}

	return sequence.toString();
}