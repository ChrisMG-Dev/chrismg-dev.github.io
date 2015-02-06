jQuery.fn.flexibleBox = function(options) {
    var config = {
        "boxName" : "#description h3",
        "duration" : 900,
    };

    jQuery.extend(config, options);

    // Original header height in pixels units
    var headerOriginalHeightPx = $(config.boxName).css("top");
    // Integer version of the previous variable
    var headerOriginalHeight = parseInt(headerOriginalHeightPx
        .substring(0, headerOriginalHeightPx.length - 2));

    console.log(headerOriginalHeight)
    $(window).on("scroll", function(){
        var headerScrolledSize = headerOriginalHeight - $(document).scrollTop();
        if (headerScrolledSize > headerOriginalHeight / 2) {
            if($(document).scrollTop() > 0) {
                console.log(parseInt(headerOriginalHeight - $(document).scrollTop()));
                $(config.boxName).stop().animate({
                        top: headerOriginalHeight - $(document).scrollTop()
                    }, config.duration);
            } else {
                $(config.boxName).stop().animate({
                        top: headerOriginalHeight
                    }, config.duration);
            }            
        }      
    });  
    return this; 
}

$(document).ready(function(){
    $(document).flexibleBox({"duration":"1000"});
});