/**
Implementa las operaciones básicas de una estructura de datos pila (stack).
Recuerda que una pila es una estructura LIFO donde el último elemento en entrar es el primero en salir. Los métodos y atributos a implementar son:
Introducir elemento en la pila apilar(elemento)
Sacar elemento de la pila extraer() que devuelva el objeto.
Cima de la pila, que devuelve el elemento de la cima de la pila. (cima())
Propiedad cima de la pila, que siempre almacenará el último elemento.
En la clase Array de JavaScript implementa los métodos necesarios de manera eficiente (prototype), y recuerda hacer las pruebas precisas. 
Para ello crea una pila mediante formularios donde se añadan elementos del tipo Persona 
(nombre, apellidos, DNI y mostrar en una ventana nueva (mostrar())) y se invoquen a todos los métodos.
La interacción con el usuario se realizará a base de formularios lo más amigables posible.
*/
var personas = [];

function collectInfo() {
    var nombre = document.getElementById("nombre").value,
        apellidos = document.getElementById("apellidos").value,
        dni = document.getElementById("dni").value,
        error = document.getElementById("errorBox"),
        dniCorrecto = /^\d{8}[a-z]$/i.test(dni);

    if ((nombre === "" || apellidos === "") || dni === "") {
        error.innerHTML = "Los campos no pueden estar vacios.";
        return;
    }

    else if (!dniCorrecto) {
        error.innerHTML = "El DNI no tiene un formato correcto, debe contener"
            + " 8 cifras y una letra";
        return;
    }

    else {
        error.innerHTML = "";
    }

    personas.push(new Persona(nombre, apellidos, dni));
}

function showList() {
    var html_content,
        i,
        j;

    html_content = "<html>"
        + "<head>"
        + "   <meta charset='utf-8'>"
        + "   <title>Lista</title>"
        + "   <link href='css/personas.css' rel='stylesheet' />"
        + "</head>"
        + "<body>";

    html_content += "<h2>Lista de personas</h2>";

    for (i = 0; i < personas.length; i += 1) {
        html_content += personas[i].mostrar();
        html_content += "<br />";
    }

    personas.push(new Persona("Chuck", "Norris", "99999999Z"));

    html_content += "<h2>Persona añadida</h2>";

    for (i = 0; i < personas.length; i += 1) {
        html_content += personas[i].mostrar();
        html_content += "<br />";
    }

    personas.extraer();

    html_content += "<h2>Persona extraida</h2>";

    for (i = 0; i < personas.length; i += 1) {
        html_content += personas[i].mostrar();
        html_content += "<br />";
    }

    html_content += "<h2>Última persona</h2>"
    html_content += personas.cima().mostrar();

    html_content += "</body></html>";

    ventanaPersonas = window.open("", "_blank", "width=600,height=600");
    ventanaPersonas.document.write(html_content);
    ventanaPersonas.document.close();
}

window.onload = function () {
    document.getElementById("agregar").onclick = collectInfo;
    document.getElementById("mostrar").onclick = showList;
}

/*
 Cima del array
*/
Array.prototype.cima = function () {
    return this[this.length - 1];
}

/*
 Extrae el último elemento del array
*/
Array.prototype.extraer = function () {
    return this.pop();
}

/*
 Añade el elemento pasado por argumento en la cima del array
*/
Array.prototype.apilar = function (elemento) {
    this.push(elemento);
}