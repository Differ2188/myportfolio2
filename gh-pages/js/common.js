$(function() {
	$('.features-slider').owlCarousel({
		items: 3,
		nav: false,
		dots: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	$('.works-slider').owlCarousel({
		loop: true,
		items: 4,
		nav: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});

	$('.our-team-slider').owlCarousel({
		loop: true,
		items: 4,
		nav: false,
		dots: true,
		autoplay:true,
    	autoplayTimeout: 3000,
		autoplayHoverPause: true,
		
		responsive:{
			0:{
				items:1,
				autoplay:false,
				autoplayHoverPause: false,
			},
			600:{
				items:2,
				autoplay:false,
				autoplayHoverPause: false,
			},
			1000:{
				items:4
			}
		}
	});

	$('.facts-slider-main').owlCarousel({
		loop: false,
		items: 4,
		nav: false,
		dots: false,
		mouseDrag: false,
		responsive:{
			0:{
				items:1,
				mouseDrag: true
			},
			600:{
				items:2,
				mouseDrag: true
			},
			1000:{
				items:4
			}
		}
		
				
	});
	
});
