/*
* Implementa ComprobacionFecha que solicite el día, el mes
* y el año e indique si la fecha es correcta. Si lo fuera,
* ha de mostrar el día después.
*
*/

function checkAndShowNextDay(){
	var fecha = document.getElementById("fechaInput").value;
	var resultado = document.getElementById("resultado");
	var output = "";
	var color = "red";
	var date;

	if(fecha == ""){
		output = "El campo está vacío";
	}

	else {
		fecha = fecha.split("/");
		date = new Date(fecha[2],(fecha[1] - 1),fecha[0]);
		diasEnMes = new Date(fecha[2], fecha[1], 0)
			.getDate();

		if(fecha.length != 3){
			output = "Formato inválido";
		}

		else if(fecha.some(isNaN)){
			output = "Introduzca solamente dígitos";		
		}

		else if((fecha[0].toString().length != 2 ||
			fecha[1].toString().length != 2) ||
			fecha[2].toString().length !=4){
			output = "El formato debe ser dd/mm/aaaa";
		}

		else if(fecha[0] > 31 || fecha[0] < 1){
			output = "Día incorrecto";
		}

		else if(fecha[1] > 12 || fecha[1] < 1){
			output = "Mes incorrecto";
		}

		else if(fecha[0] > diasEnMes){
			output = "Ese día no existe en este mes";
		}

		else {
			output = "El formato es válido, el día siguiente es: ";
			color = "green";

			// Dia registrado + milisegundos de un dia.
			date.setTime(date.getTime() + 86400000);
			output += (date.getDate()) + "/" +
				(date.getMonth()+1) + "/" +
				(date.getFullYear());
		}
	}

	resultado.innerHTML = output;
	resultado.style.color = color;
}