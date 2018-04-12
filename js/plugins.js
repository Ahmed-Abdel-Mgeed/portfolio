$(document).ready(function() {
	/*--
		prevent the default action for <a> Element in the navegation bar
		and toggle the .active class In the <li> element.
		--*/
	$(".navbar .nav li").click(function (evt) {
		// stop the default Action.
		evt.preventDefault();
		// It was toggled already by bootstrap so I just remove It from siblings.
		$(this).siblings().removeClass("active");
	});

	// Make smooth scroll to sections    >Soruce: https://www.youtube.com/watch?v=aBPFwmQZq8k&index=2&list=PLDoPjvoNmBAz0_Ujf9ZB9KceUzzSVYDci
	$(".navbar .nav li a").click(function () {
		$("html, body").animate({
			scrollTop: $( "#" + $(this).data("scroll") ).offset().top - 80
		}, 1000);
	});
});