/*
* 12. Implementa CerosYUnos que lea una secuencia de
* ceros y unos. Mostrará el número de ceros de la secuencia.
* Dejará de leer cuando el usuario introduzca el número 2
*/
function capturarBinario(evento) {
  
  var evnt = evento || windows.event;
  var codigoChar = evento.charCode || evento.keyCode;
  var resultado = document.getElementById("resultado");
  var numeros = document.getElementById("number").value;
  var ceros = 0;

  if(codigoChar == 48 || codigoChar == 49){
  	resultado.innerHTML = "";
  	return true;
  }

  else if(codigoChar == 50){
	  for(var i=0;i<numeros.toString().length;i++){
	  	if(numeros[i] == 0){
	  		ceros += 1;
	  	}
	  }

	  resultado.innerHTML = "Hay un total de " + ceros + " ceros.";
	  return false;  	
  }

  else{
  	return false;
  }

}