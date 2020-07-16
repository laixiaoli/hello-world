$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>340){
			$(".fixed").fadeIn(200);
		}else{
			$(".fixed").fadeOut(200);
		}
	})

	$(".fixed").click(function(){
		$("html,body").animate({scrollTop:0},500);
		return false;
	});
})