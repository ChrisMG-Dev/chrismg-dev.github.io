/*
Objetos coche
Genera cuatro instancias del objeto Coche (propiedades marca, modelo y año)
Imprimer sus propiedades en una tabla HTML (<table>). Genera el código desde JavaScript.
Cada instancia ha de ocupar una línea (<tr>) y el valor de cada propiedad ha de ocupar una celda (<td>).
*/
function Coche (marca, modelo, anio) {
	this.marca = marca;
	this.modelo = modelo;
	this.anio = anio;
}

function crearCabecera (cadena) {
	cabecera = document.createElement("th");
	texto = document.createTextNode(cadena);
	cabecera.appendChild(texto);
	return cabecera;
}

function construyeTabla () {
	var body = document.body,
		table = document.createElement("table"),
		fila,
		celda,
		texto,
		coches = [
			new Coche ("BMW","Serie 7", "1977"),
			new Coche ("Seat", "Córdoba", "1993"),
			new Coche ("Ferrario", "Testarossa", "1984"),
			new Coche ("Fiat", "500", "1996")
		];

	table.appendChild(crearCabecera("Marca"));
	table.appendChild(crearCabecera("Modelo"));
	table.appendChild(crearCabecera("Año de fabricación"));
		
	for (var i = 0;i < coches.length; i += 1) {
		fila = document.createElement("tr");
		for (var dato in coches[i]) {
			celda = document.createElement("td");
			texto = document.createTextNode(coches[i][dato]);
			celda.appendChild(texto);
			fila.appendChild(celda);
		}
		table.appendChild(fila);
	}
	body.appendChild(table);

}

window.onload = function () {
	construyeTabla();
};