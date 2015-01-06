/*
* Cuando se pulse el botón Crear se creará un objeto de la clase universitario tras la validación
* de los datos introducidos. Las condiciones de validación son las siguientes:
* 1. Ningún campo puede estar vacío2. El formato de la fecha ha de ser el indicado (utiliza expresiones regulares)
* 3. La fecha ha de ser correcta (comprobar que sea real, incluyendo los 29 de Febrero)
* 4. El checkbox ha de seleccionarse
* Se mostrará un mensaje indicando que alguno de los datos no es correcto.
* Una vez creado el universitario, se invocará al método mostrar que abrirá la nueva ventana
* con los datos introducidos por el usuario y la edad del universitario.
*
*/
validado = true;

function mostrarVentanaUniversitario(universitario) {
	var html = "<html>"
			 + "<head>"
			 + "<title>Universitario</title>"
			 + "</head>"
			 + "<body>"
			 + "<p>Nombre: " + universitario.nombre + "</p>"
			 + "<p>Primer apellido: " + universitario.apellido1 + "</p>"
			 + "<p>Segundo apellido: " + universitario.apellido2 + "</p>"
			 + "<p>Fecha de nacimiento: " + universitario.fechanac + "</p>"
			 + "<p>Edad: " + universitario.getEdad() + "</p>"
			 + "</body>"
			 + "</html";

	var ventana = window.open("","","width=500, height=500");
	ventana.document.open();
	ventana.document.write(html);
	ventana.document.close();	
}

function Universitario(nombre, apellido1, apellido2, fechanac) {
	this.nombre = nombre;
	this.apellido1 = apellido1;
	this.apellido2 = apellido2;
	this.fechanac = fechanac;

	this.mostrar = function () {
		mostrarVentanaUniversitario(this);
	}

	this.getEdad = function () {
	    var fecha = this.fechanac.split("/");
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

	    anio_nac = fecha[2];
	    mes_nac = fecha[1] + 1;
	    dia_nac = fecha[0];

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

	this.edad = this.getEdad;
}

function validarCadena(campo) {
	if (campo === "" || campo.charAt(0) === " ") {
		validado = false;
	}
}

function validarFormulario() {
	var nombre = document.getElementById("tNombre").value;
	var primer = document.getElementById("tPrimer").value;
	var segun = document.getElementById("tSegundo").value;
	var fechaNac = document.getElementById("tFechaNac").value;

	validarCadena(nombre);
	validarCadena(primer);
	validarCadena(segun);
	validarCadena(fechaNac);

	if (!validado) {
		document.getElementById("errorBox")
			.innerHTML = "Debe introducir información en todos los campos";
		validado = true;
		return;
	}

    var validRegExp = new RegExp("^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$");
    if(!validRegExp.test(fechaNac)) {
		document.getElementById("errorBox")
			.innerHTML = "La fecha introducida no es correcta";
		validado = true;
		return;    	
    }

    var aceptar = document.getElementById("aceptar");

    if(!aceptar.checked) {
 		document.getElementById("errorBox")
			.innerHTML = "Debe aceptar las condiciones";
		validado = false;   	
    }

    if(validado) {
    	document.getElementById("errorBox").innerHTML = "";
    	var universitario = new Universitario(nombre, primer, segun, fechaNac);
    	crearTodosLosCookies();
    	universitario.mostrar();
    } else {
    	validado = true;
    	return;
    }

}

function crearTodosLosCookies() {
	// Días
    var tiempoLimite = 7;

    crearCookie("nombre" ,document.getElementById("tNombre").value, tiempoLimite);
    crearCookie("primer", document.getElementById("tPrimer").value, tiempoLimite);
    crearCookie("segun", document.getElementById("tSegundo").value, tiempoLimite);
    crearCookie("fechaNac", document.getElementById("tFechaNac").value, tiempoLimite);
}

function crearCookie(nombre, valor, dias) {
    var d = new Date();
    d.setTime(d.getTime() + (dias * 24 * 60 * 60 * 1000));
    var limite = d.toUTCString();
    document.cookie = nombre + "=" + valor + " expires=" + limite;
}

function readCookie(key) {

    var name = key + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

function getCookieValue(string) {
	var valor = string.split("expires");
	return valor[0].trim();
}

function borrarCookies() {
	var cookies = ["nombre","primer","segun","fechaNac"];
	for(var i = 0;i < cookies.length; i++) {
		if (readCookie(cookies[i])) {
	    	crearCookie(cookies[i], "", -100);
		}
	}
}

window.onload = function () {
	document.getElementById("crear").addEventListener("click", validarFormulario);
	document.getElementById("limpiar").addEventListener("click", borrarCookies);
	document.getElementById("tNombre").value = getCookieValue(readCookie("nombre"));
	document.getElementById("tPrimer").value = getCookieValue(readCookie("primer"));
	document.getElementById("tSegundo").value = getCookieValue(readCookie("segun"));
	document.getElementById("tFechaNac").value = getCookieValue(readCookie("fechaNac"));
}