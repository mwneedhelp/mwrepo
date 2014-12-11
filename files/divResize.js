// JavaScript Document
$(function(){
	
	var winHeight = 0;
	var footerHeight = $('#index-bar footer').height();
	var headerHeight = 0;
		

	DIVRESIZE();


	function DIVRESIZE(){
		winHeight = $(window).height();
		headerHeight = winHeight - footerHeight-1;
		$('header').css('height',headerHeight);
		
		}
		
	$(window).resize(DIVRESIZE)
	


	/*member lightbox*/
	$('#member').click(function(){
		$('#direct-to').fadeIn(200)
		return false;
		
	})
	$('.close-popup').click(function(){
		$('#direct-to').fadeOut(200)
		})

})
