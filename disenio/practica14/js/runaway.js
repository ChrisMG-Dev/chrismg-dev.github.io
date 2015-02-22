$(function(){
	jQuery.fn.runaway = function (surface, options) {
		var config = {
			"offsetX" : 25,
			"offsetY" : 25
		}
		jQuery.extend(config, options);
		var that = this;
		return this.each(function() {
			$(surface).on("mouseover", function(event) {
				var distance;
				var pos = $(that).offset();
				if (event.pageX > $(window).width() / 2) {
					distance = -event.pageX / config.offsetX;
					if (event.pageX > $(window).width() / 1.5)
						distance = -25;
					$(that).css({
						transform: "translateX(" + distance + "px) " + "translateY(" +  ((pos.top - event.pageY) / config.offsetY) + "px)"				
					});
				}
				else {
					if (event.pageX < $(window).width() / 3)
						distance = 25;
					else 
						distance = event.pageX / config.offsetX;
					$(that).css({
						transform: "translateX(" + distance + "px) " + "translateY(" +  ((pos.top - event.pageY) / config.offsetY) + "px)"				
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