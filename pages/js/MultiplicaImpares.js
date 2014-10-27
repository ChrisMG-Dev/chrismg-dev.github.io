/*
	MultiplicaImpares que multiplique los 20 
	primeros números impares y muestre el resultado en pantalla.
*/

var count = 0
var resultado = 1

for(var i=1;count < 20;i++){
	if(i % 2 != 0){
		resultado *= i;
		count += 1;
	}
}

document.write("<h2>" + resultado + "</h2>");

