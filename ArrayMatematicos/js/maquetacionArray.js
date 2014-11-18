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

	var bloqueMin = document.createElement("p");
	bloqueMin.className = "bloque";

	var labelMin = document.createElement("label");
	labelMin.innerHTML = "Min: ";

	var cajaMin = document.createElement("input");
	cajaMin.type = "text";
	cajaMin.id = "min" + contador_array;

	var bloqueMax = document.createElement("p");
	bloqueMax.className = "bloque";
	var labelMax = document.createElement("label");
	labelMax.innerHTML = "Max: ";

	var cajaMax = document.createElement("input");
	cajaMax.type = "text";
	cajaMax.id = "max" + contador_array;

	arrayBox.appendChild(titulo);
	bloque.appendChild(label);
	bloque.appendChild(caja);
	bloqueMin.appendChild(labelMin);
	bloqueMin.appendChild(cajaMin);
	bloqueMax.appendChild(labelMax);
	bloqueMax.appendChild(cajaMax);
	arrayBox.appendChild(bloque);
	arrayBox.appendChild(bloqueMin);
	arrayBox.appendChild(bloqueMax);
	contenedor.appendChild(arrayBox);
}

function addVector() {
	contador_array++;
	var contenedor = document.getElementById("contenedor");
	var arrayBox = document.createElement("div");
	arrayBox.className = "array";

	var titulo = document.createElement("h3");
	titulo.innerHTML = "Vector " + contador_array;

	var bloqueMin = document.createElement("p");
	bloqueMin.className = "bloque";

	var labelMin = document.createElement("label");
	labelMin.innerHTML = "Min: ";

	var cajaMin = document.createElement("input");
	cajaMin.type = "text";
	cajaMin.id = "min" + contador_array;

	var bloqueMax = document.createElement("p");
	bloqueMax.className = "bloque";
	var labelMax = document.createElement("label");
	labelMax.innerHTML = "Max: ";

	var cajaMax = document.createElement("input");
	cajaMax.type = "text";
	cajaMax.id = "max" + contador_array;
	arrayBox.appendChild(titulo);
	bloqueMin.appendChild(labelMin);
	bloqueMin.appendChild(cajaMin);
	bloqueMax.appendChild(labelMax);
	bloqueMax.appendChild(cajaMax);
	arrayBox.appendChild(bloqueMin);
	arrayBox.appendChild(bloqueMax);
	contenedor.appendChild(arrayBox);	
}

function mostrarResultado (resultado) {
	var contenedor = document.getElementById("contenedor");
	var arrayBox = document.createElement("div");
	arrayBox.className = "array";

	var titulo = document.createElement("h3");
	titulo.innerHTML = "Suma";

	arrayBox.appendChild(titulo);
	arrayBox.appendChild(document.createTextNode(resultado));
	contenedor.appendChild(arrayBox);

}

function generarValores () {
	var elementos = document.getElementById("elementos").value,
		sumando = [],
		i,
		j,
		min,
		max,
		suma;


	for (i = 0; i < contador_array; i += 1) {
		min = parseInt(document.getElementById("min" + (i + 1)).value);
		max = parseInt(document.getElementById("max" + (i + 1)).value);
		sumando[i] = [];
		for (j = 0; j < elementos; j += 1) {
			sumando[i][j] = Math.round(
				Math.random() * (max - min) + min
			);
		}
	}

	var bloque = document.getElementsByClassName("array");

	for (var i = 0; i < bloque.length; i += 1) {
		var cabecera = document.createElement("h3");
		titulo = document.createTextNode("Vector " + (i + 1));
		cabecera.appendChild(titulo);
		bloque[i].innerHTML = "";
		bloque[i].appendChild(cabecera);
		bloque[i].appendChild(document.createTextNode("Valores: " + sumando[i]));
	}

	document.getElementById("addVector").style.display = "none";
	document.getElementById("sumVectores").style.display = "none";

	return sumando;

}

function sumarVectores () {

	sumando = generarValores();
	array = new ArraysMatematicos(sumando, true);
	mostrarResultado(array.sumar());
}
window.onload = function () {
	document.getElementById("unidimensional").onclick = modoUnidimensional;
	document.getElementById("addVector").onclick = addVector;
	document.getElementById("sumVectores").onclick = sumarVectores;
};