/**
 * Configuración del frame izquierdo para la seleccíón de actividad
 * o recurso.
 */
var ruta = "../ejercicios/",
    ejercicios = {
        "EJ1": ruta + "notas.html",
        "EJ2": ruta + "tablaDecimales.html",
        "EJ3": ruta + "secuencia.html",
        "EJ4": ruta + "sumaMatrices.html",
        "EJ5": ruta + "multiplicarMatrices.html"
    };

/*
 * Devuelve el valor seleccionado de una lista por id
 */
function getSelectedOption(list) {
    var i,
        seleccionado,
        ejercicio = document.getElementById(list);

    for (i = 0; i < ejercicio.options.length; i += 1) {
        if (ejercicio.options[i].selected) {
            seleccionado = ejercicio.options[i].value;
            break;
        }
    }
    return seleccionado;
}

function updateRightFrame() {
    var seleccionado = getSelectedOption("ejercicios");
    seleccionado = ejercicios[seleccionado];
    window.parent.frames[1].location.replace(seleccionado);
}

function updateLeftFrame() {
    var seleccionado = getSelectedOption("seccion");
    if (seleccionado === "TEO") {
        window.parent.frames[1].location.replace("../teoria/teoria.html");
        document.getElementById("ejercicios").options[0].selected = true;
        document.getElementById("ejercicios").style.display = "none";
    } else if (seleccionado === "EJ") {
        document.getElementById("ejercicios").style.display = "inline-block";
    }
}

window.onload = function () {
    document.getElementById("seccion").onchange = updateLeftFrame;
    document.getElementById("ejercicios").onchange = updateRightFrame;
};
