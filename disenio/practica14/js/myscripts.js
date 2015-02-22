function animarBoton() {
  $("button")
    .animate({backgroundColor: "white",color: "black"}, 1000)
    .animate({ backgroundColor: "#1B1B29", color: "white"}, 1000, animarBoton); 
}

$(function() {
	// Efecto de la cabecera
	$("#description h4").runaway(".module.parallax", {offsetX:30, offsetY:30});
  
	// Datepicker
  $( "#fechaIni" ).datepicker({
    defaultDate: "+1w",
    changeMonth: false,
    numberOfMonths: 1,
    minDate: 0,
    onClose: function( selectedDate ) {
      $( "#fechaFin" ).datepicker( "option", "minDate", selectedDate );
    }
  });
  $( "#fechaFin" ).datepicker({
    defaultDate: "+1w",
    changeMonth: false,
    numberOfMonths: 1,
    onClose: function(selectedDate) {
      $( "#fechaIni" ).datepicker("option", "maxDate", selectedDate);
    }
  });

  // Animación botón
  $("#asunto, #correo, #mensaje").on("keydown mouseover", function() {
    if ($("#asunto").val().length != 0
        && $("#mensaje").val().length != 0
        && $("#correo").val().length != 0) {
      animarBoton();
    }
  })

  $("button").css({
        "background-color": "white",
        "border-width": "1px",
        "border-style": "solid",
        "border-color": "#BFBFBF",
        "margin": "10px",
        "padding": "10px 20px",
        "color": "black"
  });

  $("button").on("mouseover", function() {
    $("button").queue([]);
  })

  // tabs
  $("#tabs, #tabs2").tabs();
});
