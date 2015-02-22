

$(function() {
	// Efecto de la cabecera
	$("#description h4").runaway(".module.parallax");

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
    onClose: function( selectedDate ) {
      $( "#fechaIni" ).datepicker( "option", "maxDate", selectedDate );
    }
  });

  // Color animation botones

  function animarBoton() {
    $("button")
      .animate({backgroundColor: "#000000",color: "white"}, 1000)
      .animate({ backgroundColor: "#ffffff", color: "black"}, 1000, animarBoton); 
  }

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
      $(this).animate({
	  backgroundColor: "#1B1B29",
	  color: "white"
      }, 1000 );
  });
  $("button").on("mouseleave", function() {
    animarBoton();
  	$(this).animate({
        "background-color": "white",
        "border-width": "1px",
        "border-style": "solid",
        "border-color": "#BFBFBF",
        "margin": "10px",
        "padding": "10px 20px",
        "color": "black"
  	}, 1000);
  });


  $("#tabs, #tabs2").tabs();
});
