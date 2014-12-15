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
    "dni" : "^(([x-zX-Z]{1})([-]?)(\\d{7})([-]?)([A-Za-z]{1}))|((\\d{8})([-]?)([A-Za-z]{1}))$",
    "telefono" : "^[9|6]{1}(\\d{2}-?){3}\\d{2}$",
    "tarjeta" : "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$",
    "web" : "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|(www\\.)?){1}([0-9A-Za-z-\\.@:%_\‌​+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?$",
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

    //crearTodosLosCookies();
    return true;
}

function crearTodosLosCookies() {
    var tiempoLimite = 7;

    crearCookie("nombre" ,document.getElementById("nombre").value, tiempoLimite);
    crearCookie("correo", document.getElementById("correo").value, tiempoLimite);
    crearCookie("dni", document.getElementById("dni").value, tiempoLimite);
    crearCookie("telefono", document.getElementById("telefono").value, tiempoLimite);
    crearCookie("tarjeta", document.getElementById("tarjeta").value, tiempoLimite);
    crearCookie("web", document.getElementById("web").value, tiempoLimite);
    crearCookie("fecha", document.getElementById("fecha").value, tiempoLimite);

    var sexo = document.getElementsByName("sexo");
    for (var i = 0; i < sexo.length; i++) {
        if (sexo[i].checked) {
            sexo = sexo[i].value;
        }
    }
    crearCookie("sexo", sexo, tiempoLimite);
    console.log("Creando");
}

function crearCookie(nombre, valor, dias) {
    var d = new Date();
    d.setTime(d.getTime() + (dias * 24 * 60 * 60 * 1000));
    var limite = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + " expires=" + limite;
}

function readCookie(key) {

    var name = key + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
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
    document.getElementById("verCookie").addEventListener('click', crearVentanaCookie);
 };

 function crearVentanaCookie () {

    if (!validarFormulario()) {
        return;
    }
    crearTodosLosCookies();

    var nombre = readCookie("nombre");
    var correo = readCookie("correo");
    var dni = readCookie("dni");
    var telefono = readCookie("telefono");
    var tarjeta = readCookie("tarjeta");
    var web = readCookie("web");
    var fecha = readCookie("fecha");
    var sexo = readCookie("sexo");

    var cookieErr = "";

    var html = "<html>"
        +   "<head><title>Resultado</title>"
        +   "<style>.value {display:inline-block;background-color:orange; border: 1px solid black; border-radius: 2px;}</style></head>"
        +   "<body>"
        +   "<p>Nombre: <span class='value'>" + nombre + "</span></p>"
        +   "<p>Correo: <span class='value'>" + correo + "</span></p>"
        +   "<p>DNI: <span class='value'>" + dni + "</span></p>"
        +   "<p>Telefono: <span class='value'>" + telefono + "</span></p>"
        +   "<p>Tarjeta: <span class='value'>" + nombre + "</span></p>"
        +   "<p>URL: <span class='value'>" + web + "</span></p>"
        +   "<p>Fecha: <span class='value'>" + fecha + "</span></p>"
        +   "<p>Sexo: <span class='value'>" + sexo + "</span></p>"

    myWindow = window.open('','','width=600, height=500');
    myWindow.document.open();
    myWindow.document.write(html);
    myWindow.document.close();   
 }