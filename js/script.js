$(document).ready(function() {
	$('.menu__burger').click(function(event) {
		$('.header__menu-body').toggleClass('active');
	})
})

new Swiper('.comments__block-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	simulateTouch: false,
});