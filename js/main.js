$(function () {

	//	$(window).scroll(function(){
	//		console.log($(window).scrollTop());
	//		
	//		if ($(window).scrollTop() >= 50){
	//			$('#main-nav').css({'background-color': '#fff'});
	//	 
	//		}else{
	//			$('#main-nav').css({'background-color': 'transparent'});
	//		}	
	//	});
	//	
if ($(window).scrollTop() >= 50) {
			$('#main-nav').addClass('scroll');

		}

	$(window).scroll(function () {


		if ($(window).scrollTop() >= 50) {
			$('#main-nav').addClass('scroll');

		} else {
			$('#main-nav').removeClass('scroll');
		}
	});

	//	SMOOTH SCROLL
	var root = $('body');
	
	$('a[href^="#"]').click(function () {
		console.log("click");

	var href = $(this).attr('href');	
		
		root.animate({
			scrollTop: $(href).offset().top -52}, 500);
	});

	
//	Scroll Reveal
	
	window.sr = ScrollReveal({ reset: true }).reveal('.row');
		
	

	


});