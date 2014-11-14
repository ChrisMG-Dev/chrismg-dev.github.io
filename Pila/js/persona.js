/**
* Script para la definición de un objeto Persona
*/
function Persona(nombre, apellidos, dni) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni.toLocaleUpperCase();
}

Persona.prototype.mostrar = function () {
    var html_content,
        property,
        letra;

    html_content = "<table>";

    for (property in this) {
        if (this.hasOwnProperty(property)) {
            letra = property.charAt(0).toLocaleUpperCase();
            property = letra + property.substr(1);
            html_content += "<th>" + property + "</th>";
        }
    }

    html_content += "<tr>";

    for (property in this) {
        if (this.hasOwnProperty(property)) {
            letra = this[property].charAt(0).toLocaleUpperCase();
            this[property] = letra + this[property].substr(1);
            html_content += "<td>" + this[property] + "</td>";
        }
    }

    html_content += "</tr></table>";

    return html_content;
}