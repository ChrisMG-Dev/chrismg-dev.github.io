/**
	Implementa OrdenaTres que pida tres números y los muestre
	ordenados de menor a mayor.
*/

function isNumber(element, index, array){
	return !isNaN(element);
}

function sortNumbers(){
	var coleccion = document.getElementsByClassName("number");
	var resultado = document.getElementById("resultado");
	resultado.innerHTML = "";
	var numbers = [];

	for(var i = 0;i<coleccion.length;i++){
		if(coleccion[i].value != ""){
			numbers.push(coleccion[i].value);
		}
	}

	if(numbers.every(isNumber)){
		resultado.innerHTML = numbers.sort(function(a, b){return a-b});
	}	
}

