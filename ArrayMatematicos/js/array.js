/**
 Mediante prototype, agrega los métodos sumar, restar, trasponer y multiplicar a la clase ArraysMatematicos.
 Recuerda que el estado de un array deberían de ser los elementos.
 Recuerda las restricciones y posibilidades de un Array:
 Sobre las dimensines de los arrays implicados (unidimensional, bidimensional...)
 Sobre las longitudes de los arrays implicados (1 en adelante)
 Sobre los contenidos de los arrays implicados (numéricos)
 Podemos rellenar un Array con valores aleatorios o directamente desde teclado.
 Una vez creada la clase, demuestra su funcionamiento en una página bien diseñada.
 Evita las cajas de texto y hazla lo más dinámica posible.
*/

function ArraysMatematicos(arrays, unidimensional) {
	var i;
	if (unidimensional) {
		this.unidimensional = true;
	} else {
		this.unidimensional = false;
	}
	this.arrays = [];
	for (i = 0; i < arrays.length; i += 1) {
		this.arrays.push(arrays[i]);
	}
}

ArraysMatematicos.prototype.sumar = function() {
	var i,
		j,
		k,
		resultado;

	// Unidimensional
	if (this.unidimensional) {
		resultado = [];
		for (i = 0; i < this.arrays[0].length; i += 1) {
			resultado[i] = 0;
		}
		for (i = 0; i < this.arrays.length; i += 1) {
			for (j = 0; j < this.arrays[i].length; j += 1) {
				resultado[j] += this.arrays[i][j];
			}
		}
	// Bidimensional
	} else {
		resultado = [];
		for (i = 0; i < this.arrays[0].length; i += 1) {
			resultado.push([]);
		}

		for (i = 0; i < this.arrays[0].length; i += 1) {
			for (j = 0; j < this.arrays[0][i].length; j += 1) {
				resultado[i][j] = 0;
			}
		}

		for (i = 0; i < this.arrays.length; i += 1) {
			for (j = 0; j < this.arrays[i].length; j += 1) {
				for (k = 0; k < this.arrays[i][j].length; k += 1) {
					resultado[j][k] += this.arrays[i][j][k];
					console.log(this.arrays);
				}
			}
		}
	}
	return resultado;
}

ArraysMatematicos.prototype.restar = function() {
	var i,
		j,
		k,
		resultado;

	// Unidimensional
	if (this.unidimensional) {
		resultado = [];
		for (i = 0; i < this.arrays[0].length; i += 1) {
			resultado[i] = 0;
		}
		for (i = 0; i < this.arrays.length; i += 1) {
			for (j = 0; j < this.arrays[i].length; j += 1) {
				if (i == 0) {
					resultado[j] = this.arrays[i][j];
				} else {
					resultado[j] -= this.arrays[i][j];
				}
			}
		}
	// Bidimensional
	} else {
		resultado = [];
		for (i = 0; i < this.arrays[0].length; i += 1) {
			resultado.push([]);
		}

		for (i = 0; i < this.arrays[0].length; i += 1) {
			for (j = 0; j < this.arrays[0][i].length; j += 1) {
				resultado[i][j] = 0;
			}
		}

		for (i = 0; i < this.arrays.length; i += 1) {
			for (j = 0; j < this.arrays[i].length; j += 1) {
				for (k = 0; k < this.arrays[i][j].length; k += 1) {
					resultado[j][k] -= this.arrays[i][j][k];
				}
			}
		}
	}
	return resultado;
}