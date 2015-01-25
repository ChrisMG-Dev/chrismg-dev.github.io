$(document).ready(function(){
		$("input[type=checkbox]").each(function(i, v) {
			$(this).bind("click", function(i) {
				if ($(this).prop("checked")) {
					var id = $(this).attr("id");
					$("input[type=checkbox]").each(function(){
						if ($(this).attr("id") != id) {
							$(this).removeAttr("checked");
						}
					});
				}
			});
		})
	});

$(document).ready(function(){
	$("#alertBox").bind("click", function(){
		alert("Has clicado en la caja");
	});
});

$(document).ready(function(){
	$("#alertBox").bind("mouseenter mouseleave", function(){
		$(this).toggleClass("dentro");
	});
});

$(document).ready(function(){
	$( "#alertBox ").bind({
	  click: function() {
	    $(this).html("Has hecho click");
	  },
	  mouseenter: function() {
	    $(this).css("color","blue");
	  },
	  mouseleave: function() {
	    $(this).css("color","red");
	  }
	});
});

$(document).ready(function(){
	$(document).on("mousemove", function(event){
		$("#coords").text("X: " + event.pageX + ", Y: " + event.pageY);
	});
});

	// currentTarget
$(document).ready(function(){
	$("#coords").bind("click", function(event){
		$(event.currentTarget).css("color", function(){
			var num = (Math.round(Math.random() * 3 - 1) +1);
			switch(num) {
				case 1:
					return "red";
					break;
				case 2:
					return "blue";
					break;
				case 3:
					return "green";
					break;
				default:
					return "red";
					break;
			}
		});
	});
});

$(document).ready(function(){
	var ultimoClick, diferencia;
	$("#coords").click(function(event){
		if(!ultimoClick) {
			ultimoClick = event.timeStamp;
			$("#timeCoords").text("Haga click de nuevo");
		} else {
			diferencia = event.timeStamp - ultimoClick;
				$("#timeCoords").text((diferencia / 1000).toFixed(1) + " segundos");
				ultimoClick = event.timeStamp;
		}
	});
});