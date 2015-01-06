window.onload = function () {
	document.body.children[0].remove();
	var p = document.createElement("p");
	var texto = document.createTextNode("Christopher");
	p.appendChild(texto);
	document.body.insertBefore(p, document.body.lastElementChild);
	var p = document.createElement("p");
	texto = document.createTextNode("Muñoz");
	p.appendChild(texto);
	document.body.appendChild(p,document.body.lastElementChild);
};