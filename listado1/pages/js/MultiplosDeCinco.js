/*
* 3. Implementa MultiplosDeCinco que pida 7 números e 
* indique si alguno es múltiplo de 5.
*/

function checkMultiples(number){
	var inputs = document.getElementsByTagName("input");
	var answers = document.getElementsByTagName("span");
	var texts = [];
	var i = 0;

	do{
		if(inputs[i].type == "text"){
			texts.push(inputs[i]);
		}

		i++;

	}while(i < inputs.length);

	for(var i = 0; i < texts.length; i++){
		if(texts[i].type == "text") {
			if(texts[i].value == "" || isNaN(texts[i].value)) {
				answers[i].innerHTML = "Número inválido";
				answers[i].style.color = "orange";
			}

			else if(texts[i].value % number == 0){
				answers[i].innerHTML = "Es múltiplo de " + number;
				answers[i].style.color = "green";
			}
			
			else{
				answers[i].innerHTML = "No es múltiplo de " + number;
				answers[i].style.color = "red";
			}
		}
	}

}