$(".cMain_left button").on("click",function(){
	$(".cMain_right").removeClass("cMain_right_active");
	var $index = $(this).index();
	$(".cMain_right").eq($index).addClass("cMain_right_active");
});

	


