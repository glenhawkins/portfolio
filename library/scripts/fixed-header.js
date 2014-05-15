$(function() {
	var page_heading_offset_top = $('#page_heading').offset().top;
	var page_heading = function(){
		var scroll_top = $(window).scrollTop();
		if (scroll_top > page_heading_offset_top) { 
			$('#page_heading').css({ 'position': 'fixed', 'top':0, 'left':0 });
		} else {
			$('#page_heading').css({ 'position': 'relative' }); 
		}   
	};
	page_heading();
	$(window).scroll(function() {
		 page_heading();
	});
});