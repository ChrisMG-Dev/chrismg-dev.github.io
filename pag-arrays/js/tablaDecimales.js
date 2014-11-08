/**
 *Crea la página tablaDecimales.html que cree una matriz de decimales.
 * Pide las dimensiones (filas y columnas). Se inicializa con valores
 * aleatorios entre 1 y 100. Visualiza el array, localiza los valores
 * máximo y mínimo
 * y muestra tanto estos valores como la posición que ocupan en la matriz
 *
 */
function checkDimensiones(filas, columnas) {
    var output = document.getElementById("msgOutput"),
        message,
        ok = false;

    if (isNaN(filas) || isNaN(columnas)) {
        message = "Debe introducir un número válido.";
    } else if (filas <= 0 || columnas <= 0) {
        message = "Tiene que ser superior a 0.";
    } else {
        message = "";
        ok = true;
    }

    output.innerHTML = message;
    return ok;
}

function getTableDimensions() {
    var filas = document.getElementById("filas").value,
        columnas = document.getElementById("columnas").value,
        dimensionesOk = checkDimensiones(filas, columnas);

    if (dimensionesOk) {
        return [filas, columnas];
    }

    return null;


}

function getFilledMatrix(dim, max, min) {
    var filas,
        columnas,
        matriz = [];

    for (filas = 0; filas < dim[0]; filas += 1) {
        matriz[filas] = [];
        for (columnas = 0; columnas < dim[1]; columnas += 1) {
            matriz[filas][columnas] = Math.round(
                Math.random() * (max - min) + min
            );
        }
    }

    return matriz;
}

function findMinMaxPosition(matriz) {
    var data = {
            "min": {
                "value": Number.MAX_VALUE,
                "position": ""
            },
            "max": {
                "value": Number.MIN_VALUE,
                "position": ""
            }
        },
        filas,
        columnas;

    for (filas = 0; filas < matriz.length; filas += 1) {
        for (columnas = 0; columnas < matriz[filas].length; columnas += 1) {
            if (matriz[filas][columnas] < data.min.value) {
                data.min.value = matriz[filas][columnas];
                data.min.position = filas + ":" + columnas;
            } else if (matriz[filas][columnas] > data.max.value) {
                data.max.value = matriz[filas][columnas];
                data.max.position = filas + ":" + columnas;
            }
        }
    }
    return data;
}

function printTable() {
    var dimensiones = getTableDimensions(),
        matriz,
        minMaxMatriz,
        filas,
        columnas,
        resultado = document.getElementById("resultado"),
        html = "";

    if (dimensiones !== null) {
        matriz = getFilledMatrix(dimensiones, 100, 1);
        minMaxMatriz = findMinMaxPosition(matriz);

        html += "<table>";

        for (filas = 0; filas < matriz.length; filas += 1) {
            html += "<tr>";
            for (columnas = 0; columnas < matriz[filas].length; columnas += 1) {
                html += "<td";
                if (matriz[filas][columnas] === minMaxMatriz.max.value) {
                    html += " bgcolor='red'>";
                } else if (matriz[filas][columnas] === minMaxMatriz.min.value) {
                    html += " bgcolor='#42A0FF'>";
                } else {
                    html += ">";
                }
                html += matriz[filas][columnas] + "</td>";
            }
            html += "</tr>";
        }

        html += "</table><br /><br />"
            + "Mínimo: " + minMaxMatriz.min.value
            + "<br />Posición mínimo: Fila " + (parseInt(minMaxMatriz.min.position
                .split(":")[0], 10) + 1) + ", Columna "
                + (parseInt(minMaxMatriz.min.position.split(":")[1], 10) + 1)
            + "<br />Máximo: " + minMaxMatriz.max.value
            + "<br />Posición máximo: Fila " + (parseInt(minMaxMatriz.max.position.split(":")[0], 10) + 1)
                + ", Columna " + (parseInt(minMaxMatriz.max.position.split(":")[1], 10) + 1);

        resultado.innerHTML = html;
    }
}

window.onload = function () {
    document.getElementById("btnTabla").onclick = printTable;
};