/*
* 4. Implenta NumeroPrimo que pida un número e indique si es primo o no
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
	var isPrime = checkPrimeNumber(document.getElementById('numero').value);
	var resultado;
	var color;

	if(isPrime == null){
		resultado = "Número no válido";
		color = "orange";
	}

	else if(!isPrime){
		resultado = "No es primo";
		color = "red";
	}

	else {
		resultado = "Es primo";
		color = "green";
	}


	document.getElementById('resultado').innerHTML = resultado;
	document.getElementById('resultado').style.color = color;
}

