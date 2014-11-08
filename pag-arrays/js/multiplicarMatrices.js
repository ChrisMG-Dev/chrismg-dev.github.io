/*
 *Crea la página multiplicaMatrices.html que multiplique dos matrices de enteros.
 *El usuario elegirá las dimensiones de las matrices (m x n, n x o).
 *Las matrices se inicializarán de forma aleatoria con enteros entre 1 y 10.
 *Se visualizarán factores y resultado.
 */
function getOutputMatriz(matriz) {
    var html = "",
        i,
        j;
    html += "<table>";

    for (i = 0; i < matriz.length; i += 1) {
        html += "<tr>";
        for (j = 0; j < matriz[i].length; j += 1) {
            html += "<td>" + matriz[i][j] + "</td>";
        }
        html += "</tr>";
    }

    html += "</table>";
    return html;
}

function getOutputSumaMatrices(operando1, operando2, suma) {
    var html = "";

    html += "<h4>Operando 1</h4><br />"
        + getOutputMatriz(operando1)
        + "<br /><h4>Operando 2</h4><br />"
        + getOutputMatriz(operando2)
        + "<br /><h4>Suma</h4><br />"
        + getOutputMatriz(suma);

    return html;
}

function checkUserInput(filas1, columnas1, filas2, columnas2) {
    var output = document.getElementById("msgOutput"),
        message,
        ok = false;

    if (((isNaN(filas1) || isNaN(columnas1)) || isNaN(filas2) || isNaN(columnas2))) {
        message = "Debe introducir un número válido.";
    } else if ((filas1 <= 2 || columnas1 <= 2) || (filas2 <= 2 || columnas2 <= 2)) {
        message = "Los valores deben ser de al menos 3";

    } else if (columnas1 !== filas2) {
        message = "Debe haber el mismo número de columnas de la matriz 1 que"
            + " el número de filas de la matriz 2";
    } else {
        message = "";
        ok = true;
    }

    output.innerHTML = message;
    return ok;
}

function fillMatriz(filas, columnas) {
    var matriz = [],
        i,
        j;

    for (i = 0; i < filas; i += 1) {
        matriz[i] = [];
        for (j = 0; j < columnas; j += 1) {
            matriz[i][j] = Math.round(
                Math.random() * 10
            );
        }
    }

    return matriz;
}

function multiplicaMatrices(operando1, operando2) {
    var mult = [],
        suma = 0,
        i,
        j,
        k;

    for (i = 0; i < operando1.length; i += 1) {
        mult[i] = [];
        for (j = 0; j < operando2[0].length; j += 1) {
            suma = 0;
            for (k = 0; k < operando1[0].length; k += 1) {
                suma += operando1[i][k] * operando2[k][j];
            }
            mult[i][j] = suma;
        }
    }
    return mult;
}

function printSumaMatrices() {
    var operando1 = [],
        operando2 = [],
        mult = [],
        filas1 = parseInt(document.getElementById("filas1").value, 10),
        columnas1 = parseInt(document.getElementById("columnas1").value, 10),
        filas2 = parseInt(document.getElementById("filas2").value, 10),
        columnas2 = parseInt(document.getElementById("columnas2").value, 10),
        inputIsOk,
        html = "",
        resultado = document.getElementById("resultado");

    inputIsOk = checkUserInput(filas1, columnas1, filas2, columnas2);

    if (inputIsOk) {
        operando1 = fillMatriz(filas1, columnas1);
        operando2 = fillMatriz(filas2, columnas2);
        mult = multiplicaMatrices(operando1, operando2);
        html = getOutputSumaMatrices(operando1, operando2, mult);
        resultado.innerHTML = html;
    } else {
        resultado.innerHTML = html;
    }
}

window.onload = function () {
    document.getElementById("btnMultiplicar").onclick = printSumaMatrices;
};