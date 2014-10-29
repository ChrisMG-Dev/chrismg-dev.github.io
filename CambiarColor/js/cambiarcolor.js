window.onload = function(){
	document.getElementById("cambiacolor").onclick = changeColor;
}

function changeColor(){
	var color = parent.frames[0].document.getElementById("color").value;
	var frame = parseInt(parent.frames[0].document.getElementById("frame").value);

	parent.frames[frame].document.body.bgColor = color;
}