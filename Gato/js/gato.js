/**
* Objeto Gato
*/
function Gato(nombre, fechaNacimiento, raza, peso) {
	this.nombre = nombre;
	this.fechaNacimiento = fechaNacimiento;
	this.raza = raza;
	this.peso = peso;
	this.estado = "Jugando";
}

Gato.prototype.jugar = function () {
	this.estado = "Jugando";
	this.peso -= 0.2;
}

Gato.prototype.comer = function () {
	this.estado = "Comiendo";
	this.peso += 0.5;
}

Gato.prototype.dormir = function () {
	this.estado = "Durmiendo";
}

Gato.prototype.comprobarPeso = function () {
	if (this.peso > 20 || this.peso < 4.5) {
		this.estado = "Muerto";
	}
}

Gato.prototype.mostrarEdad = function () {
	var hoy,
		anio_hoy,
		mes_hoy,
		dia_hoy,
		anio_nac,
		mes_nac,
		dia_nac,
		edad;

	hoy = new Date();
	anio_hoy = hoy.getFullYear();
	console.log(anio_hoy);
	mes_hoy = hoy.getMonth() + 1;
	dia_hoy = hoy.getDate();

	anio_nac = this.fechaNacimiento.getFullYear();
	console.log(anio_nac);
	mes_nac = this.fechaNacimiento.getMonth() + 1;
	dia_nac = this.fechaNacimiento.getDate();

	edad = anio_hoy - anio_nac;

	if (mes_hoy < mes_nac) {
		edad -= 1;
	} else if (mes_hoy == mes_nac) {
		if (dia_hoy < dia_nac) {
			edad -= 1;
		}
	}

	return edad;
}