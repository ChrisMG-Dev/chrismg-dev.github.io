/**
 *
 *
 */

// Expresiones regulares para cada campo
var regexp = {
    "nombre" : "^([a-zA-Z]+\\s?){1,2}([a-zA-Z]+)?$",
    "correo" : "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$",
    "dni" : "^(([X-Z]{1})([-]?)(\\d{7})([-]?)([A-Z]{1}))|((\\d{8})([-]?)([A-Z]{1}))$",
    "telefono" : "^[9|6]{1}(\\d{2}-?){3}\\d{2}$",
    "tarjeta" : "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$",
    "web" : "^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$",
    "fecha" : "^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$",
},
// Mensajes de error de validación de campos
    errorMsg = {
        "nombre" : "Introduzca un nombre completo válido",
        "correo" : "Introduzca un correo electrónico válido",
        "dni" : "El DNI introducido no es correcto",
        "telefono" : "El número de teléfono introducido no es correcto",
        "tarjeta" : "La tarjeta de crédito introducida es incorrecta",
        "web" : "La URL introducida tiene un formato incorrecto",
        "fecha" : "La fecha tiene un formato incorrecto",
    }


function validar(elemento) {
    var elemento = document.getElementById(elemento);
    var valor = elemento.value;
    var validRegExp = new RegExp(regexp[elemento.id]);
    var correcto = validRegExp.test(valor);

    if (elemento.className === "required") {
        if (valor == null || valor.length === 0 || !correcto) {
            elemento.style.border = "2px solid red";
            //document.getElementById(elemento.id + "Err").innerHTML = errorMsg[elemento.id];
            return;
        }        
        elemento.style.border = "2px solid green";
        document.getElementById(elemento.id + "Err").innerHTML = "";
    } 
    else{
        if (valor == null || valor.length === 0 || !correcto) {
            elemento.style.border = "default";
            return;
        }        
        elemento.style.border = "2px solid green";
        document.getElementById(elemento.id + "Err").innerHTML = "";
    }
}

function comprobarSexo() {
    var sexo = document.getElementsByName("sexo");
    var checked = false;
    for (var i = 0; i < sexo.length; i++) {
        if (sexo[i].checked) {
            checked = true;
            console.log(sexo[i].value);
        }
    }
    if (!checked) {
       document.getElementById("sexoErr").innerHTML = "Debe seleccionar una de las opciones";
       return false;
    }
    return true;
}

function comprobarCondiciones() {
    var condicion = document.getElementById("condiciones");

    if(!condicion.checked) {
       document.getElementById("condicionesErr").innerHTML = "Debe aceptar las condiciones de uso para continuar"; 
       return false; 
    }
    return true;
}

function cargarEventosBlur() {
    document.getElementById("nombre").addEventListener('blur', function(){validar("nombre")}, false);
    document.getElementById("correo").addEventListener('blur', function(){validar("correo")}, false);
    document.getElementById("dni").addEventListener('blur', function(){validar("dni")}, false);
    document.getElementById("telefono").addEventListener('blur', function(){validar("telefono")}, false);
    document.getElementById("tarjeta").addEventListener('blur', function(){validar("tarjeta")}, false);
    document.getElementById("web").addEventListener('blur', function(){validar("web")}, false);
    document.getElementById("fecha").addEventListener('blur', function(){validar("fecha")}, false);
}

function validarFormulario() {
    
}

function cargarEventoSubmit() {
    document.getElementById("enviar").addEventListener('submit', validarFormulario, false);
}

 window.onload = function () {
    cargarEventosBlur();
    cargarEventoSubmit();
 };

 /*
 function validarDNI(elemento) {
    var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    var elemento = document.getElementById(elemento);
    var valor = elemento.value;

    var dni = parseInt(valor.substr(0, valor.length - 1).toUpperCase());
    var resto = dni % 23;
    var correcto = valor.charAt(valor.length - 1) == letras.charAt(resto);

    if (valor.length < 9 || valor == null || !correcto) {
        elemento.style.border = "2px solid red";
        elemento.placeholder = "Llene este campo";
    }
    else {
        elemento.style.border = "2px solid green";
    }
 }
 */
