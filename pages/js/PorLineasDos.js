/*
9. Implementa PorLineasDos que visualice los números del 0 al 100 separados por comas. 
Cada múltiplo de 7 o finalizado en 7 ha de comenzar en una línea nueva.
*/

var numeros = [];

for(var i=0;i<=100;i++){
	if((i % 7 == 0 || ((i).toString().indexOf("7") != -1) &&
		(i).toString().lastIndexOf("7") == (i).toString().length -1)){
		numeros.push("<br>");
	}
	numeros.push(i);
}

document.write(numeros.toString().replace(/<br>,/g,"<br>"));