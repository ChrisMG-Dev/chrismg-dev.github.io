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
  $("button").on("mouseover", function() {
      $(this).animate({
	  backgroundColor: "#1B1B29",
	  color: "white"
      }, 100 );
  });
  $("button").on("mouseleave", function() {
  	$(this).animate({
        backgroundColor: "white",
        borderWidth: "1px",
        borderColor:"#BFBFBF",
        margin: "10px",
        padding: "10px 20px",
        color: "black",
  	}, 100);
  });
});
