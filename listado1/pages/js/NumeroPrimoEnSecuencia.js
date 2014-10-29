/*
*Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos números 
*primos existen entre el 1 y dicho número.
*
*/
function checkPrimeNumber(number){

	if((number == "" || isNaN(number)) || number < 2){
		return null;
	}

	for(var i=2;i<number;i++){
		if(number % i == 0){
			return false;
		}
	}

	return true;
}


function checkAndUpdate(){
	var numbers = [];
	var primes = [];
	var resultado;
	var color;

	for(var i = 2; i <= document.getElementById('numero').value; i++){
		numbers.push(checkPrimeNumber(i));
	}

	for(var i = 0;i<numbers.length;i++){
		if(numbers[i]){
			primes.push(numbers[i]);
		}
		
	}

	if(primes.length > 0){
		resultado = "Hay " + primes.length + " número/s primos " +
			"entre 1 y " + document.getElementById('numero').value;
		color = "green";	
	}

	else {
		resultado = "Valor introducido incorrecto";
		color = "red";	
	}


	document.getElementById('resultado').innerHTML = resultado;
	document.getElementById('resultado').style.color = color;
}