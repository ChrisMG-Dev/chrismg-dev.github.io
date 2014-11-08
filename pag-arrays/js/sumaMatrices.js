/*
 *Crea la página sumaMatrices.html que sume dos matrices de enteros.
 * El usuario introducirá por teclado las dimensiones de las matrices (m x n).
 * Las matrices se inicializarán de forma aleatoria con enteros entre 0 y 10.
 * Se visualizarán sumandos y suma.
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

function checkUserInput(filas, columnas) {
    var output = document.getElementById("msgOutput"),
        message,
        ok = false;

    if (isNaN(filas) || isNaN(columnas)) {
        message = "Debe introducir un número válido.";
    } else if (filas <= 2 || columnas <= 2) {
        message = "Los valores deben ser de al menos 3";
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

function sumaMatrices(operando1, operando2) {
    var suma = [],
        i,
        j;

    for (i = 0; i < operando1.length; i += 1) {
        suma[i] = [];
        for (j = 0; j < operando1[i].length; j += 1) {
            suma[i][j] = operando1[i][j] + operando2[i][j];
        }
    }

    return suma;
}

function printSumaMatrices() {
    var operando1 = [],
        operando2 = [],
        suma = [],
        filas = parseInt(document.getElementById("filas").value, 10),
        columnas = parseInt(document.getElementById("columnas").value, 10),
        inputIsOk,
        html = "",
        resultado = document.getElementById("resultado");

    inputIsOk = checkUserInput(filas, columnas);

    if (inputIsOk) {
        operando1 = fillMatriz(filas, columnas);
        operando2 = fillMatriz(filas, columnas);
        suma = sumaMatrices(operando1, operando2);
        html = getOutputSumaMatrices(operando1, operando2, suma);
        resultado.innerHTML = html;
    } else {
        resultado.innerHTML = html;
    }
}

window.onload = function () {
    document.getElementById("btnSuma").onclick = printSumaMatrices;
};