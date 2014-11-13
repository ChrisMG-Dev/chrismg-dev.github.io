/*
* Modificar el ejercicio anterior del objeto Factura para crear una pseudoclase llamada Factura
* y que permita crear objetos de ese tipo. Se deben utilizar las funciones constructoras y la propiedad prototype.
* Para instanciar la clase, se debe utilizar la instrucción Factura(cliente, elementos),
* donde cliente también es una pseudoclase que guarda los datos del cliente y elementos
* es un array simple que contiene las pseudoclases de todos los elementos que forman la factura.
*/
function Cliente(nombre, direccion, telefono, dni) {
	this.nombre = nombre;
	this.direccion = direccion;
	this.telefono = telefono;
	this.dni = dni;	
}

function Elemento(nombre, descripcion, cantidad, precioUnitario) {
	this.nombre = nombre;
	this.descripcion = descripcion;
	this.cantidad = cantidad;
	this.precioUnitario = precioUnitario;	
}

function Factura(cliente, elementos) {
	this.cliente = cliente;
	this.elementos = elementos;
	this.informacion = {
		"total" : 0,
		"iva" : 0
	}

	Factura.prototype.calcularImporte = function () {
		var total = 0,
			i;

		for (i = 0; i < this.elementos.length; i += 1) {
			total += (parseFloat(this.elementos[i].precioUnitario) * this.elementos[i].cantidad);
		}

		this.informacion.total = total;
	}

	Factura.prototype.mostrarTotal = function () {
		document.write((this.informacion.total).toFixed(2));
	}
}

var cliente = new Cliente("Dr. Chris", "Calle limpia 123", "+34 982374443", "31776883Y"),
	productos = [
		new Elemento("Kiwi zespri","Rico kiwi con vitaminas", 5, 0.55),
		new Elemento("Leche desnatada covap", "Leche desnatada", 3, 0.87)
	],
	factura = new Factura(cliente, productos);
factura.calcularImporte();
factura.mostrarTotal();