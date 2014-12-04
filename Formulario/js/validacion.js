/**
 * Validación de formularios
 *
 * @author Christopher Muñoz Godenir <chrismgdaw@gmail.com>
 */

// Campos
var campos = ["nombre","correo","dni","telefono","tarjeta","web","fecha"];

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
            document.getElementById(elemento.id + "Err").innerHTML = errorMsg[elemento.id];
            return false;
        }        
        elemento.style.border = "2px solid green";
        document.getElementById(elemento.id + "Err").innerHTML = "&nbsp;<img src='icons/valid.ico' height='20px' width='20px'>";
        return true;
    } 
    else{
        if (correcto) {
            elemento.style.border = "2px solid green";
            document.getElementById(elemento.id + "Err").innerHTML = "&nbsp;<img src='icons/valid.ico' height='20px' width='20px'>";
            return true;
        } else {
            if (valor.length > 0 && !correcto) {
                elemento.style.border = "2px solid red";
                document.getElementById(elemento.id + "Err").innerHTML = errorMsg[elemento.id];
                return false;                
            }
            elemento.style.border = "2px solid green";
            document.getElementById(elemento.id + "Err").innerHTML = "&nbsp;<img src='icons/valid.ico' height='20px' width='20px'>";
            return true;      
        }
    }
}
function comprobarSexo() {
    var sexo = document.getElementsByName("sexo");
    var checked = false;
    for (var i = 0; i < sexo.length; i++) {
        if (sexo[i].checked) {
            checked = true;
        }
    }
    if (!checked) {
       document.getElementById("sexoErr").innerHTML = "Debe seleccionar una de las opciones";
       return false;
    }
    document.getElementById("sexoErr").innerHTML = "&nbsp;<img src='icons/valid.ico' height='20px' width='20px'>";
    return true;
}

function comprobarCondiciones() {
    var condicion = document.getElementById("condiciones");

    if(!condicion.checked) {
       document.getElementById("condicionesErr").innerHTML = "Debe aceptar las condiciones de uso para continuar"; 
       return false; 
    }
    document.getElementById("condicionesErr").innerHTML = "&nbsp;<img src='icons/valid.ico' height='20px' width='20px'>";
    return true;
}

function validarFormulario() {
    var camposValidados = [];
    camposValidados.push(validar("nombre"));
    camposValidados.push(validar("correo"));
    camposValidados.push(validar("dni"));
    camposValidados.push(validar("telefono"));
    camposValidados.push(validar("tarjeta"));
    camposValidados.push(validar("web"));
    camposValidados.push(validar("fecha"));
    camposValidados.push(comprobarSexo());
    camposValidados.push(comprobarCondiciones());
    
    var validado = true;

    for (var i = 0; i < camposValidados.length; i++) {
        if (!camposValidados[i]) {
            validado = false;
            if(campos[i] != undefined) {
               document.getElementById(campos[i]).focus(); 
            }
            break;
        }
    }

    if (!validado) {
        return false;
    }

    return true;
}

function cargarEventoSubmit() {
    document.forms[0].onsubmit = validarFormulario;
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
 window.onload = function () {
    cargarEventosBlur();
    cargarEventoSubmit();
 };