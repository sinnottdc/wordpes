var $j = jQuery.noConflict();
function getScreenSize1(){ 

	screenWidthSize = $j(window).width()

	if (screenWidthSize >= 416) {
		screenWidth1 = true;
	} else {
		screenWidth1 = false;
	}
	return screenWidth1;
}

function scroll () {
	getScreenSize1();
	if (screenWidth1 == false) {
		var a = element;
		if (a < 4) {
			$j("html, body").animate({scrollTop:0}, 300);
		} else if (a >= 4 && a <= 7 ) {
			$j("html, body").animate({scrollTop:323}, 300);
		} else if (a >= 8  && a <= 11 ) {
			$j("html, body").animate({scrollTop:645}, 300);
		} else if (a >= 12  && a <= 15 ) {
			$j("html, body").animate({scrollTop:963}, 300);
		} else if (a >= 16 && a <= 19 ) {
			$j("html, body").animate({scrollTop:1285}, 300);
		} else if (a >= 20  && a <= 23 ) {
			$j("html, body").animate({scrollTop:1603}, 300);
		} else if (a >= 24  && a <= 27 ) {
			$j("html, body").animate({scrollTop:1925}, 300);
		} else if (a >= 28  && a <= 31 ) {
			$j("html, body").animate({scrollTop:2200}, 300);
		} 
	} else {
		return;
	}

}
