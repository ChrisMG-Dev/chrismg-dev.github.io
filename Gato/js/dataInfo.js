/*
 * Recoge datos del gato y los muestra
 */
function muestraGato() {
    var nombre,
        raza,
        fechaNac,
        i,
        errorOutput,
        errorBox;

    nombre = document.getElementById("nombre").value;
    raza = document.getElementById("raza");

    for (i = 0; i < raza.options.length; i += 1) {
        if (raza.options[i].selected) {
            raza = raza.options[i].value;
            break;
        }
    }

    fechaNac = new Date(document.getElementById("fechaNacimiento").value);
    errorBox = document.getElementById("errorMsg");

   	if (nombre === "") {
   		errorOutput = "El nombre está vacío";
   	} else if (!isNaN(nombre)) {
   		errorOutput = "Su gato debería tener letras en su nombre...";
   	} else if (fechaNac == "Invalid Date") {
   		errorOutput = "Fecha introducida incorrecta";
   	} else {
   		errorOutput = "";
   	}

   	// Si ha habido un error, salirse
   	if (errorOutput !== "") {
   		errorBox.innerHTML = errorOutput;
   		return;
   	}

   	// Si todo va bien, seguir
   	errorBox.innerHTML = errorOutput;
   	var gato = new Gato(nombre, fechaNac, raza, 10);
   	var ventanaGato = window.open("", "_blank", "width=600,height=600");
   	ventanaGato.document.write(gato.mostrarEdad());
   	ventanaGato.document.close();

}

window.onload = function() {
    document.getElementById("crearGato").onclick = muestraGato;
};