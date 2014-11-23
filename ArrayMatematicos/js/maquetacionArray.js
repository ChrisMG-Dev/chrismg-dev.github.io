var contador_array = 0;
var unidimensional = true;

function mostrarControles () {
    document.getElementById("addVector").style.visibility = "visible";
    document.getElementById("sumVectores").style.visibility = "visible";
    document.getElementById("reloader").style.visibility = "visible";
    document.getElementById("restarVectores").style.visibility = "visible";
    document.getElementById("multVectores").style.visibility = "visible";
}

function maquetarPagina(tituloArray) {
    var contenedor = document.getElementById("contenedor"),
        arrayBox = document.createElement("div"),
        titulo = document.createElement("h3"),
        bloque = document.createElement("p"),
        label = document.createElement("label"),
        caja = document.createElement("input"),
        bloqueMin = document.createElement("p"),
        labelMin = document.createElement("label"),
        cajaMin = document.createElement("input"),
        bloqueMax = document.createElement("p"),
        labelMax = document.createElement("label"),
        cajaMax = document.createElement("input");

    mostrarControles();

    contador_array = 1;

    contenedor.innerHTML = "";
    arrayBox.className = "array";
    titulo.innerHTML =  tituloArray + " " + contador_array;
    bloque.className = "bloque";
    label.innerHTML = "Elementos: ";
    caja.type = "text";
    caja.id = "elementos";
    caja.className = "valorVector";
    bloqueMin.className = "bloque";
    labelMin.innerHTML = "Min: ";
    cajaMin.type = "text";
    cajaMin.id = "min" + contador_array;
    bloqueMax.className = "bloque";
    labelMax.innerHTML = "Max: ";
    cajaMax.type = "text";
    cajaMax.id = "max" + contador_array;
    arrayBox.appendChild(titulo);
    bloque.appendChild(label);
    bloque.appendChild(caja);
    bloqueMin.appendChild(labelMin);
    bloqueMin.appendChild(cajaMin);
    bloqueMax.appendChild(labelMax);
    bloqueMax.appendChild(cajaMax);
    arrayBox.appendChild(bloque);
    arrayBox.appendChild(bloqueMin);
    arrayBox.appendChild(bloqueMax);
    contenedor.appendChild(arrayBox);    
}

function addVector() {

    var contenedor = document.getElementById("contenedor"),
        arrayBox = document.createElement("div"),
        titulo = document.createElement("h3"),
        bloqueMin = document.createElement("p"),
        labelMin = document.createElement("label"),
        cajaMin = document.createElement("input"),
        bloqueMax = document.createElement("p"),
        labelMax = document.createElement("label"),
        cajaMax = document.createElement("input"),
        tipoArray;

    contador_array++;
    arrayBox.className = "array";

    if (unidimensional) {
        tipoArray = "Vector";
    } else {
        tipoArray = "Matriz"
    }

    titulo.innerHTML = tipoArray + " " + contador_array;
    bloqueMin.className = "bloque";
    labelMin.innerHTML = "Min: ";
    cajaMin.type = "text";
    cajaMin.id = "min" + contador_array;
    bloqueMax.className = "bloque";
    labelMax.innerHTML = "Max: ";
    cajaMax.type = "text";
    cajaMax.id = "max" + contador_array;
    arrayBox.appendChild(titulo);
    bloqueMin.appendChild(labelMin);
    bloqueMin.appendChild(cajaMin);
    bloqueMax.appendChild(labelMax);
    bloqueMax.appendChild(cajaMax);
    arrayBox.appendChild(bloqueMin);
    arrayBox.appendChild(bloqueMax);
    contenedor.appendChild(arrayBox);
}

function mostrarResultado(resultado, tituloh3) {
    var contenedor = document.getElementById("contenedor"),
        arrayBox = document.createElement("div"),
        numero,
        titulo = document.createElement("h3");

    arrayBox.className = "array";
    titulo.innerHTML = tituloh3;
    arrayBox.appendChild(titulo);

    for (indice in resultado) {
        if (unidimensional) {
            numero = document.createElement("div");
            numero.className = "numero";
            numero.innerHTML = resultado[indice];
            arrayBox.appendChild(numero);
        } else {
            for (indice2 in resultado[indice]) {
                numero = document.createElement("div");
                numero.className = "numero";
                numero.innerHTML = resultado[indice][indice2];
                arrayBox.appendChild(numero);   
            }
            arrayBox.appendChild(document.createElement("br"));
            arrayBox.appendChild(document.createElement("br"));
        }
    }

    contenedor.appendChild(arrayBox);
}

function generarValores() {
    var elementos = document.getElementById("elementos").value,
        sumando = [],
        i,
        j,
        min,
        max,
        suma,
        numero,
        bloque = document.getElementsByClassName("array"),
        cabecera;

    if (unidimensional) {
        for (i = 0; i < contador_array; i += 1) {
            min = parseInt(document.getElementById("min" + (i + 1)).value);
            max = parseInt(document.getElementById("max" + (i + 1)).value);
            sumando[i] = [];
            for (j = 0; j < elementos; j += 1) {
                sumando[i][j] = Math.round(
                    Math.random() * (max - min) + min
                );
            }
        }
    } else {
        for (i = 0; i < contador_array; i += 1) {
            min = parseInt(document.getElementById("min" + (i + 1)).value);
            max = parseInt(document.getElementById("max" + (i + 1)).value);
            sumando[i] = [];
            for (j = 0; j < elementos; j += 1) {
                sumando[i][j] = [];
                for (k = 0; k < elementos; k += 1) {
                    sumando[i][j][k] = Math.round(
                        Math.random() * (max - min) + min
                    );
                }
            }
        }
    }

    for (i = 0; i < bloque.length; i += 1) {
        cabecera = document.createElement("h3");
        if (unidimensional) {
            titulo = document.createTextNode("Vector " + (i + 1));
        } else {
            titulo = document.createTextNode("Matriz " + (i + 1));
        }
        cabecera.appendChild(titulo);
        bloque[i].innerHTML = "";
        bloque[i].appendChild(cabecera);

        for (indice in sumando[i]) {
            if (unidimensional) {
                numero = document.createElement("div");
                numero.className = "numero";
                numero.innerHTML = sumando[i][indice];
                bloque[i].appendChild(numero);
            } else {
                for (indice2 in sumando[i][indice]) {
                    numero = document.createElement("div");
                    numero.className = "numero";
                    numero.innerHTML = sumando[i][indice][indice2];
                    bloque[i].appendChild(numero);                   
                }
                bloque[i].appendChild(document.createElement("br")); 
                bloque[i].appendChild(document.createElement("br")); 
            }
        }
    }

    document.getElementById("addVector").style.display = "none";
    document.getElementById("sumVectores").style.display = "none";
    document.getElementById("restarVectores").style.display = "none";
    document.getElementById("multVectores").style.display = "none";

    return sumando;

}

function checkUserInput() {

    var output = "",
        errorMsg = document.getElementById("errorMsg"),
        elementos = parseInt(document.getElementById("elementos").value);

    errorMsg.style.color = "red";

    if (elementos > 100 || elementos < 2) {
        output = "Por favor, introduzca un número de elementos entre 2 y 100.";
    } else if (isNaN(elementos)) {
        output = "El número de elementos debe indicarse mediante un número.";
    } else if (elementos == "") {
        output = "Debe introducir el número de elementos a producir.";
    }

    if (output != "") {
        errorMsg.innerHTML = output;
        return false;
    }

    for (i = 0; i < contador_array; i += 1) {
        min = parseInt(document.getElementById("min" + (i + 1)).value);
        max = parseInt(document.getElementById("max" + (i + 1)).value);

        if (min === "" || max === "") {
            output = "Los campos no deben estar vacíos.";
        } else if (isNaN(min) || isNaN(max)) {
            output = "Los campos deben contenedor un número.";
        } else if (min >= max) {
            output = "El mínimo debe ser inferior al máximo.";
        } else if (min < 1) {
            output = "El mínimo debe ser de al menos 1.";
        } else if (max > 10000) {
            output = "Por favor, introduzca un valor máximo de hasta 10000";
        }
    }

    errorMsg.innerHTML = output;

    if (output != "") {
        return false;
    }

    return true;
}

function sumarVectores() {
    var inputIsOk = checkUserInput();
    if (inputIsOk) {
        sumando = generarValores();
        array = new ArraysMatematicos(sumando, unidimensional);
        mostrarResultado(array.sumar(), "Suma");
    }
}

function restarVectores() {
    var inputIsOk = checkUserInput();
    if (inputIsOk) {
        res = generarValores();
        array = new ArraysMatematicos(res, unidimensional);
        mostrarResultado(array.restar(), "Restado");
    }
}

function multiplicarVectores() {
    var inputIsOk = checkUserInput();
    if (inputIsOk) {
        res = generarValores();
        res = res.slice(0, 2);
        array = new ArraysMatematicos(res, unidimensional);
        mostrarResultado(array.multiplicar(), "Producto (Solo los dos primeros arrays)");
    }
}

function modoBidimensional() {
    unidimensional = false;
    document.getElementById("addVector").value = "Añadir Matriz";
    document.getElementById("sumVectores").value = "Sumar Matrices";
    document.getElementById("restarVectores").value = "Restar Matrices";
    document.getElementById("multVectores").value = "Mult. Matrices";
    maquetarPagina("Matriz");
}

function modoUnidimensional() {
    unidimensional = true;
    document.getElementById("addVector").value = "Añadir Vector";
    document.getElementById("sumVectores").value = "Sumar Vectores";
    document.getElementById("restarVectores").value = "Restar Vectores";
    document.getElementById("multVectores").value = "Mult. Vectores";
    maquetarPagina("Vector");
}

window.onload = function () {
    document.getElementById("unidimensional").onclick = modoUnidimensional;
    document.getElementById("bidimensional").onclick = modoBidimensional;
    document.getElementById("addVector").onclick = addVector;
    document.getElementById("addVector").style.visibility = "hidden";
    document.getElementById("sumVectores").onclick = sumarVectores;
    document.getElementById("sumVectores").style.visibility = "hidden";
    document.getElementById("restarVectores").style.visibility = "hidden";
    document.getElementById("restarVectores").onclick = restarVectores;
    document.getElementById("multVectores").style.visibility = "hidden";
    document.getElementById("multVectores").onclick = multiplicarVectores;
    document.getElementById("reloader").style.visibility = "hidden";
};