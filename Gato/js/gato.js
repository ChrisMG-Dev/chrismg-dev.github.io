/**
 * Objeto Gato
 */

var peso_razas = {
    "Siamés": 8,
    "Persa": 7,
    "Bengalí": 10,
    "Van Turco": 12
},
	aspectoPorEstado = {
        "Jugando": {
            "1": "img/gato-jugando1.png",
            "2": "img/gato-jugando2.png",
            "3": "img/gato-jugando3.png"
        },

        "Comiendo": {
            "1": "img/gato-comiendo1.png",
            "2": "img/gato-comiendo2.png",
            "3": "img/gato-comiendo3.png",
            "4": "img/gato-comiendo4.png",
            "5": "img/gato-comiendo5.png"
        },

        "Durmiendo": {
            "1": "img/gato-durmiendo1.png",
            "2": "img/gato-durmiendo2.png"
        },

        "Muerto": {
        	"1": "img/gato-muerto.png"
        }
    }

function Gato(nombre, fechaNacimiento, raza) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.raza = raza;
    this.peso = peso_razas[raza];
    this.estado = "Jugando";
    this.aspecto = "img/gato-jugando3.png";
}

Gato.prototype.jugar = function() {
    this.estado = "Jugando";
    this.peso -= 0.5;
    this.comprobarPeso();
    this.cambiarAspecto();
}

Gato.prototype.comer = function() {
    this.estado = "Comiendo";
    this.peso += 0.5;
    this.comprobarPeso();
    this.cambiarAspecto();
}

Gato.prototype.dormir = function() {
    this.estado = "Durmiendo";
    this.cambiarAspecto();
}

Gato.prototype.comprobarPeso = function() {
    if (this.peso > 20 || this.peso < 4.5) {
        this.estado = "Muerto";
        this.cambiarAspecto();
    }
}

Gato.prototype.mostrarEdad = function() {
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
    mes_hoy = hoy.getMonth() + 1;
    dia_hoy = hoy.getDate();

    anio_nac = this.fechaNacimiento.getFullYear();
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

Gato.prototype.cambiarAspecto = function () {
	do {

		// Ineficiente, pendiente de buscar mejora
		this.aspecto = aspectoPorEstado[this.estado][Math.round(
				Math.random() * (5 - 1) + 1
			)];
	} while (this.aspecto === undefined)
}