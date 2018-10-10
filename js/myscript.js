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
$(document).ready(function(){
    $(window).resize(function(){
        var scale = window.innerWidth / 1200;
        if(scale < 1){
            $(".fixed").css("zoom", scale);
            //alert("aa");
        }
        else{
            $(".fixed").css("zoom", 1);
        }
    })
});
})(jQuery);

