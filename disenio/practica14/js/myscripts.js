function animarBoton() {
  $("button").animate({backgroundColor: "white",color: "black"}, 1000);
  $("button").animate({ backgroundColor: "#1B1B29", color: "white"}, 1000, animarBoton); 
}

$(function() {
  var animacionUnaVez = false;
	// Efecto de la cabecera
	$("#description h4").runaway(".module.parallax", {offsetX:30, offsetY:30});

	// Datepicker
  $( "#fechaIni" ).datepicker({
    numberOfMonths: 1,
    minDate: 0,
    prevText: '<Ant',
    nextText: 'Sig>',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    dateFormat: 'dd/mm/yy',
    onClose: function( selectedDate ) {
      $( "#fechaFin" ).datepicker( "option", "minDate", selectedDate );
    }
  });
  $( "#fechaFin" ).datepicker({
    numberOfMonths: 1,
    minDate: 0,
    prevText: '<Ant',
    nextText: 'Sig>',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    dateFormat: 'dd/mm/yy',
    onClose: function(selectedDate) {
      $( "#fechaIni" ).datepicker("option", "maxDate", selectedDate);
    }
  });

  // Animación botón
  $("#asunto, #correo, #mensaje").on("keydown", function() {
    if ($("#asunto").val().length != 0
        && $("#mensaje").val().length != 0
        && $("#correo").val().length != 0) {
      if(!animacionUnaVez)
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
    $(this).queue([]);
    animacionUnaVez = true;
  })

  // tabs
  $("#tabs, #tabs2").tabs({event: "mouseover"});
});
