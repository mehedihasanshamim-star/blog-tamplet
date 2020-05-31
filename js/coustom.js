$(document).ready(function(){
	/* Owlcarousel start */
	$('.banner-slider').owlCarousel({
		items: 1,
		smartSpeed: 4000,
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
		margin: 0,
		autoplayTimeout: 4000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			},
			1200: {
				items:1
			}
		}
	});

});