(function($){}
if (window.matchMedia('(max-width: 370px)').matches) {
	$('#backToTop').addClass("selectMobile");
} else {
	$('#backToTop').removeClass("selectMobile");
};

window.onresize = checkWindowWidth;

function checkWindowWidth() {

	if (window.matchMedia('(max-width: 370px)').matches) {
		$('#backToTop').addClass("selectMobile");
	} else {
		$('#backToTop').removeClass("selectMobile");
	};
}

})(jQuery);