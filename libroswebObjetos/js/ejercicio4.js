/*
Extender la clase String para que permita truncar una cadena de texto a un tamaño indicado como parámetro
Modificar la función anterior para que permita definir el texto que indica que la cadena se ha truncado
*/
String.prototype.truncar = function (size, texto) {
	if (size < 0) {
		return this;
	}

	if (texto) {
		return (this.substr(0, size)).concat(texto);

	}

	return this.substring(0, size);
}

var cadena = new String("Lorem ipsum dolor sit amet");
document.open();
document.write(cadena.truncar(5, "..."));
document.close();