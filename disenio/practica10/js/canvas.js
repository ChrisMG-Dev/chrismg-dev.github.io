window.onload = function() {
var canvas = document.getElementById('fig');
var ctx = canvas.getContext("2d");
	


	ctx.strokeStyle = "#20211D";
	ctx.fillStyle = "#C9CAC1";

	ctx.beginPath(); //Cabeza
	ctx.arc(145,68,65,0,2*Math.PI);
	ctx.stroke();
	ctx.lineWidth = 6;
	ctx.fill();
	ctx.closePath();

	ctx.beginPath(); //Tentaculo 1
	ctx.arc(180,70,70,0,1*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath(); //Tentaculo 2
	ctx.arc(110,70,70,0,1*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath(); //Cuerpo
	ctx.moveTo(50,50);
	ctx.lineTo(20,100);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath(); // Extremo
	ctx.moveTo(280,100);
	ctx.lineTo(240,55);
	ctx.stroke();
	ctx.closePath();

	//Ojos
	ctx.fillStyle="white";

	ctx.beginPath();
	ctx.arc(120,30,9,0,2*Math.PI);
	ctx.moveTo(100,30);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(180,35,9,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();


	ctx.beginPath(); //Nariz
	ctx.arc(148,65,10,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#1C0000";
	ctx.fill();
	ctx.closePath();



//Vuelta al dibujo original
canvas.onmouseout = function() {
	ctx.strokeStyle = "#20211D";
	ctx.fillStyle = "#C9CAC1";

	ctx.beginPath(); //Cabeza
	ctx.arc(145,68,65,0,2*Math.PI);
	ctx.stroke();
	ctx.lineWidth = 6;
	ctx.fill();
	ctx.closePath();

	ctx.beginPath(); //Tentaculo 1
	ctx.arc(180,70,70,0,1*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath(); //Tentaculo 2
	ctx.arc(110,70,70,0,1*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath(); //Cuerpo
	ctx.moveTo(50,50);
	ctx.lineTo(20,100);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath(); // Extremo
	ctx.moveTo(280,100);
	ctx.lineTo(240,55);
	ctx.stroke();
	ctx.closePath();

	//Ojos
	ctx.fillStyle="white";

	ctx.beginPath();
	ctx.arc(120,30,9,0,2*Math.PI);
	ctx.moveTo(100,30);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(180,35,9,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();


	ctx.beginPath(); //Nariz
	ctx.arc(148,65,10,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#1C0000";
	ctx.fill();
	ctx.closePath();

}

//Dibujo modificado
canvas.onmouseover = function() {
	var ctx = canvas.getContext("2d");
	ctx.strokeStyle = "#141412";
	ctx.fillStyle = "white";


	ctx.beginPath(); //Cabeza
	ctx.arc(145,68,65,0,2*Math.PI);
	ctx.stroke();
	ctx.lineWidth = 6;
	ctx.fill();
	ctx.closePath();

	ctx.beginPath(); //Tentaculo 1
	ctx.arc(180,70,70,0,1*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath(); //Tentaculo 2
	ctx.arc(110,70,70,0,1*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath(); //Cuerpo
	ctx.moveTo(50,50);
	ctx.lineTo(20,100);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath(); // Extremo
	ctx.moveTo(280,100);
	ctx.lineTo(240,55);
	ctx.stroke();
	ctx.closePath();

	//Ojos
	ctx.fillStyle="white";

	ctx.beginPath();
	ctx.arc(120,30,9,0,2*Math.PI);
	ctx.moveTo(100,30);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(180,35,9,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();


	ctx.beginPath(); //Nariz
	ctx.arc(148,65,10,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#C0C0C0";
	ctx.fill();
	ctx.closePath();

}

}
