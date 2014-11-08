/*
 *
 * Crea la página secuencia.html que busque la secuencia en orden
 * creciente más larga dentro de un vector de enteros inicializado
 * aleatoriamente. Se mostrará tanto la posición de la primera componente
 * de la secuencia como el tamaño de la misma.
 *
 */
function printSequence() {
    var resultado = document.getElementById("resultado"),
        html = "",
        i,
        pos = 0,
        secuencia = [],
        currentSequence = [],
        longestSequence = [],
        numbers = 50;

    for (i = 0; i < numbers; i += 1) {
        secuencia.push(
            Math.round(
                Math.random() * (7 - 1) + 1
            )
        );
    }

    for (i = 0; i < secuencia.length; i += 1) {
        if (currentSequence.length === 0) {
            currentSequence.push(secuencia[i]);
        } else {
            if (currentSequence[currentSequence.length - 1] === (secuencia[i] - 1)) {
                currentSequence.push(secuencia[i]);
            } else {
                if (currentSequence.length > longestSequence.length) {
                    longestSequence = currentSequence;
                    pos = (i - longestSequence.length) + 1;
                }
                currentSequence = [];
            }
        }
    }

    html += "<p>Secuencia: " + secuencia.toString().replace(/,/g, ", ")
        + "<br /><br />"
        + "Secuencia más larga: " + longestSequence.toString().replace(/,/g, ", ")
        + "<br /><br />"
        + "Tamaño: " + longestSequence.length
        + "<br /><br />"
        + "Ubicación primer número de la secuencia mas larga: " + pos + "</p>";

    resultado.innerHTML = html;
}

window.onload = function () {
    document.getElementById("btnSec").onclick = printSequence;
};