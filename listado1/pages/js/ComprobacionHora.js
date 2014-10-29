/*
* 9. Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si 
* es correcta. Si lo fuera, ha de mostrar la hora un segundo después
*/
function checkAndShowNextHour(){
	var hora = document.getElementById("horaInput").value;
	var resultado = document.getElementById("resultado");
	var output = "";
	var color = "red";

	if(hora == ""){
		output = "El campo está vacío";
	}

	else {
		hora = hora.split(":");

		if(hora.length != 3){
			output = "Formato inválido";
		}

		else if(hora.some(isNaN)){
			output = "Introduzca solamente dígitos";		
		}

		else if((hora[0].toString().length != 2 ||
			hora[1].toString().length != 2) ||
			hora[2].toString().length != 2){
			output = "El formato debe ser hh:mm:ss";
		}

		else if(hora[0] > 24 || hora[0] < 0){
			output = "Hora incorrecto";
		}

		else if(hora[1] > 59 || hora[1] < 0){
			output = "Minuto incorrecto";
		}

		else if(hora[2] > 59 || hora[1] < 0){
			output = "Segundo incorrecto";
		}

		else {
			output = "El formato es válido, el segundo siguiente es: ";
			color = "green";

			hora[2] = parseInt(hora[2]) + 1;

			if(hora[2] == 60){
				hora[2] = "00";
				hora[1] = parseInt(hora[1]) + 1;
			}

			if(hora[1] == 60){
				hora[1] = "00";
				hora[0] = parseInt(hora[0]) + 1;
			}

			if(hora[0] == 24){
				hora[0] = "00";
			}
			output += hora[0] + ":" + hora[1] + ":" + hora[2];
		}
	}

	resultado.innerHTML = output;
	resultado.style.color = color;
}