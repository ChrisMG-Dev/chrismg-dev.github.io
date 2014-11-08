/*
 *Crea la página notas.html que almacene en un
 *array x notas, siendo x la dimensión elegida
 *por el usuario. Las notas se inicializarán de
 *forma aleatoria con enteros entre 0 y 10.
 *Se visualizarán las notas resultantes y la media de las mismas.
 */
function checkUserInput() {
    var input = document.getElementById("dimension").value,
        output = document.getElementById("msgOutput"),
        message;

    if (isNaN(input)) {
        message = "Debe introducir un número válido.";
        input = null;
    } else if (input <= 0) {
        message = "Tiene que ser superior a 0.";
        input = null;
    } else {
        message = "";
    }

    output.innerHTML = message;
    return input;
}

function getNotas() {
    var dim = checkUserInput(),
        notas,
        i;
    if (dim !== null) {
        notas = [];
        for (i = 0; i < dim; i += 1) {
            notas.push(Math.round(
                Math.random() * (10)
            ));
        }
        return notas;
    }
    return null;
}

function printNotas() {
    var notas = getNotas(),
        i,
        media = 0,
        resultado = document.getElementById("resultado");

    if (notas !== null) {
        resultado.innerHTML = "<br /><b>Notas:</b> ";
        for (i = 0; i < notas.length; i += 1) {
            media += notas[i];
            if (i === 0) {
                resultado.innerHTML += notas[i];
            } else {
                resultado.innerHTML += ", " + notas[i];
            }
        }
        media = media / notas.length;
        resultado.innerHTML += "<br /><br /><b>Media:</b> " + media;
    } else {
        resultado.innerHTML = "";
    }
}

window.onload = function() {
    document.getElementById("btnNotas").onclick = printNotas;
};