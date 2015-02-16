$(function(){
	jQuery.fn.runaway = function (surface) {
		var that = this;
		return this.each(function() {
			$(surface).on("mouseover", function(event) {
				var distance;
				var pos = $(that).offset();
				if (event.pageX > $(window).width() / 2) {
					distance = -event.pageX / 30;
					if (event.pageX > $(window).width() / 1.5)
						distance = -25;
					$(that).css({
						transform: "translateX(" + distance + "px) " + "translateY(" +  ((pos.top - event.pageY) / 30) + "px)"				
					});
				}
				else {
					if (event.pageX < $(window).width() / 3)
						distance = 25;
					else 
						distance = event.pageX / 30;
					$(that).css({
						transform: "translateX(" + distance + "px) " + "translateY(" +  ((pos.top - event.pageY) / 30) + "px)"				
					});
				}

			});
			$(surface).on("mouseleave", function(event) {
				$(that).css({
					transform: "translateX(" + 0 + "px) " + "translateY(" + 0 + "px)"				
				});
			});
		});
	};
});