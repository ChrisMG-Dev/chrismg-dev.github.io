/*
	18. Implementa PorLineas que visualice los números del 0 
	al 100 separados por comas. 
	Cada múltiplo de 7 ha de comenzar en una línea nueva.
*/

var numeros = [];

for(var i=0;i<=100;i++){
	if(i % 7 == 0){
		numeros.push("<br>");
	}
	numeros.push(i);
}

document.write(numeros.toString().replace(/<br>,/g,"<br>"));