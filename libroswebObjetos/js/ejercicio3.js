/*
Extender el objeto Array para que permita añadir nuevos elementos al final del array
Incluir la opción de controlar si se permiten elementos duplicados o no
*/

Array.prototype.anadir = function(elemento, duplicados) {
	var i;

	if(!duplicados) {
		for (i = 0; i < this.length; i += 1) {
			if (this[i] === elemento) {
				return;
			}
		}		
	}

	this[this.length] = elemento;
}

var array = ["a", "b", "c"];

array.anadir("a");
array.anadir("d");
array.anadir("a", true);
document.open()
document.write(array);
document.close();