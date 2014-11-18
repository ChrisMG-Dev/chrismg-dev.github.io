contador_array = 0;

function modoUnidimensional () {
	contador_array = 1;
	var contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";
	var arrayBox = document.createElement("div");
	arrayBox.className = "array";

	var titulo = document.createElement("h3");
	titulo.innerHTML = "Vector " + contador_array;

	var bloque = document.createElement("p");
	bloque.className = "bloque";

	var label = document.createElement("label");
	label.innerHTML = "Elementos: ";

	var caja = document.createElement("input");
	caja.type = "text";
	caja.id = "elementos";
	caja.className = "valorVector";

	arrayBox.appendChild(titulo);
	bloque.appendChild(label);
	bloque.appendChild(caja);
	arrayBox.appendChild(bloque);
	contenedor.appendChild(arrayBox);
}

function addVector() {
	contador_array++;
	var contenedor = document.getElementById("contenedor");
	var arrayBox = document.createElement("div");
	arrayBox.className = "array";

	var titulo = document.createElement("h3");
	titulo.innerHTML = "Vector " + contador_array;

	var bloque = document.createElement("p");
	bloque.className = "bloque";
	/*
	var label = document.createElement("label");
	label.innerHTML = "Elementos: ";
	*/

	/*
	var caja = document.createElement("input");
	caja.type = "text";
	caja.id = "elementos" + contador_array;
	caja.className = "valorVector";
	*/
	arrayBox.appendChild(titulo);
	//bloque.appendChild(label);
	//bloque.appendChild(caja);
	arrayBox.appendChild(bloque);
	contenedor.appendChild(arrayBox);	
}

function sumarVectores () {
	var inputs = document.getElementsById("elementos");
	var valor = 0;
	for (var i = 0; i < inputs.length; i++) {
		valor = Math.max(parseInt(inputs[i].value), valor);
	}
	console.log(valor);
}
window.onload = function () {
	document.getElementById("unidimensional").onclick = modoUnidimensional;
	document.getElementById("addVector").onclick = addVector;
	document.getElementById("sumVectores").onclick = sumarVectores;
};