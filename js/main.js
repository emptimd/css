$(function(){
	
	/**
	 * Script for back-to-top button effect
	 */
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#bttop').fadeIn();
		} else {
			$('#bttop').fadeOut();
		}
	});
	$('#bttop').click(function () {
		$('body,html').animate({scrollTop: 0}, 800);
	});
});