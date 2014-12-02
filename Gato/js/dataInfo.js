/*
 * Recoge datos del gato y los muestra
 */

function jugar(gato) {
	gato.jugar();
}

function dormir(gato) {
	gato.dormir();
}

function comer(gato) {
	gato.comer();
}


function refrescarDatos(ventanaGato, gato) {
	ventanaGato.document.getElementById("peso").innerHTML = gato.peso + "KG";
	ventanaGato.document.getElementById("estado").innerHTML = gato.estado;
	ventanaGato.document.getElementById("aspecto").src = gato.aspecto;
	
	if (gato.estado === "Muerto") {
		ventanaGato.document.getElementById("cajaBotones").innerHTML = "";
	}   		
}

function muestraGato() {
    var nombre,
        raza,
        fechaNac,
        i,
        errorOutput,
        errorBox,
        ventanaGato,
        html_content;

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
   		errorOutput = "Su gato debería tener al menos una letra en su nombre...";
   	} else if (fechaNac == "Invalid Date") {
   		errorOutput = "Fecha introducida incorrecta, formato aaaa/mm/dd";
   	} else if (fechaNac >= new Date()) {
   		errorOutput = "Por favor, introduzca una fecha anterior al día de hoy. Formato aaaa/mm/dd";
   	}
   	else {
   		errorOutput = "";
   	}

   	// Si ha habido un error, salirse
   	if (errorOutput !== "") {
   		errorBox.innerHTML = errorOutput;
   		return;
   	}

   	// Si todo va bien, seguir
   	errorBox.innerHTML = errorOutput;
   	gato = new Gato(nombre, fechaNac, raza);
   	html_content = "<html>"
   		+ "<head>" 
   		+ "    <meta charset='utf-8'>"
   		+ "    <title>" + gato.nombre + "</title>"
	    + "    <link rel='stylesheet' href='css/migato.css'>"
	    + "    <script type='text/javascript' src='js/migato.js'></script>"
      + "    <script type='text/javascript' src='js/gato.js'></script>"
   		+ "</head>"
   		+ "<body>"
   		+ "    <div id='contenedor'>"
   		+ "        <h1>" + gato.nombre + "</h1>"
   		+ "        <div id='aspectoGato'><img id='aspecto' src='" + gato.aspecto + "'></div>"
   		+ "        <br />"
   		+ "        <p class='infoBlock'>"
   		+ "            <span class='label'>Raza: </span>"
   		+ "            <span class='data' id='raza'>" + gato.raza
   		+ "        </p>"
   		+ "        <p class='infoBlock'>"
   		+ "            <span class='label'>Nacimiento: </span>"
   		+ "            <span class='data' id='fecha'>" + gato.fechaNacimiento.getFullYear() 
   		+ "/" +     (gato.fechaNacimiento.getMonth() + 1) + "/" + gato.fechaNacimiento.getDate()
   		+ "        </p>"
   		+ "        <p class='infoBlock'>"
   		+ "            <span class='label'>Edad: </span>"
   		+ "            <span class='data' id='edad'>" + gato.mostrarEdad() + " años"
   		+ "        </p>"
   		+ "        <p class='infoBlock'>"
   		+ "            <span class='label'>Peso: </span>"
   		+ "            <span class='data' id='peso'>" + gato.peso + "KG"
   		+ "        </p>"
   		+ "        <p class='infoBlock'>"
   		+ "            <span class='label'>Estado: </span>"
   		+ "            <span class='data' id='estado'>" + gato.estado
   		+ "        </p>"
   		+ "        <br />"
   		+ "        <div id='cajaBotones'>"
   		+ "            <input type='button' value='Jugar' id='jugar'>&nbsp;"
   		+ "            <input type='button' value='Comer' id='comer'>&nbsp;"
   		+ "            <input type='button' value='Dormir' id='dormir'>"
   		+ "        </div>"
   		+ "        <br />"
   		+ "    </div>"
   		+ "</body>"
   		+ "</html>"

   	ventanaGato = window.open("", "_blank", "width=600,height=600");
   	ventanaGato.document.open();
   	ventanaGato.document.write(html_content);

    ventanaGato.gato = gato;

   	ventanaGato.document.close();

}

window.onload = function() {
    document.getElementById("crearGato").onclick = muestraGato;
};
