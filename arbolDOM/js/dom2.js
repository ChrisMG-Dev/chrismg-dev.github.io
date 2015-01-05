/**
* Accede al elemento html
* Accede al body mediante lastChild
* Accede al head mediante la lista childNodes
* Averigua el número de hijos de body
* Añádele un párrafo con el texto "Hola a todos"
* Añádele al principio del body una lista (<ol>) con los nombres de la 
* pareja a la que perteneces. 
* Elimina el último párrafo del documento original ("párrafo DOM 3");
*/

function createP(content) {
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(content));
	return p;
}

window.onload = function () {
	var html = document.documentElement;
	var first = html.firstChild;
	var last = html.lastChild;
	console.log("Número de hijos de body: " + document.body.childElementCount);
	document.body.appendChild(createP("Hola a todos"));
	var ol = document.createElement("ol");
	var li1 = document.createElement("li");
	var li2 = document.createElement("li");
	li1.appendChild(document.createTextNode("Christopher"));
	li2.appendChild(document.createTextNode("Luis"));
	ol.appendChild(li1);
	ol.appendChild(li2);
	document.body.insertBefore(ol, document.body.firstChild);
	document.body.children[document.body.childElementCount - 2].remove();
};