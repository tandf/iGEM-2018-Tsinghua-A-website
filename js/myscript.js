(function($){
$(document).ready(function() {
	 var navoffeset=$("nav").offset().top;
	 $(window).scroll(function(){
	 	var scrollpos=$(window).scrollTop(); 
	 	if(scrollpos >=navoffeset){
	 		$("nav").addClass("fixed");
	 	}else{
	 		$("nav").removeClass("fixed");
	 	}
	 });
	 
});

$(document).ready(function(){
	$("nav ul li a").click(function(){
		$(this).parent().addClass("active");
		$(this).parent().siblings().removeClass("active");
	});
});

var nav_resize = function(){
        var scale = window.innerWidth / 1500;
        if(scale < 1){ $("nav").css("zoom", scale); }
        else{ $("nav").css("zoom", 1); }
}
$(document).ready(function(){
    nav_resize();
    $(window).resize(nav_resize);
});

})(jQuery);

