$(window).scroll(function() { // your code here will run when the window is scrolled
	if (true) {};
}

$("#nav_container").offset().top; // gives you the offset from the top of the page (not window) of the element of the given id


$(window).scrollTop() // tells you how far the page has been scrolled
var nav_y_position = $("#nav_container").offset().top

$(window).scroll(function() {
	if ($(window).scrollTop() > nav_y_position) {
		$("#nav_container").css({
			position: "fixed",
			top: "0px",
			width: "100%"
		});
	} else {
		$("#nav_container").css({
			position: "relative"
		});
	}
})