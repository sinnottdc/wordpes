(function($){
window.addEventListener("load",function() {
	window.scrollTo(0, 0);
});

if (window.matchMedia('(max-width: 415px)').matches) {
	$('#backToTop').removeClass("topButton");
	scrollButton();
};

var isVisible = false;


window.onresize = checkWindowWidth;

function checkWindowWidth() {

	if (window.matchMedia('(max-width: 370px)').matches) {
		$('#backToTop').removeClass("topButton");
	} else {
		$('#backToTop').addClass("topButton");
	}
}



function scrollButton(){
	$('#backToTop').click(function(){
		$("html, body").animate({scrollTop:0}, 300);
	});

//	when scrolled to certain point, show button
	$(window).scroll(function(){
		var shouldBeVisible = $(window).scrollTop()>70;
		if (shouldBeVisible && !isVisible) {
			isVisible = true;
			$('#backToTop').show();
		} else if (isVisible && !shouldBeVisible) {
			isVisible = false;
			$('#backToTop').hide();
		}
	});
}
})(jQuery)

