// JavaScript Document
$(function(){

	
	/* slideshow*/
	var slidenow = 0,
		slideclick = 0,
		fadecount= $('#fadewrap li').size(),
		TT,
		inout = 0,
		SPEED = 4000,
		fadeTime = 700,
		appendContent = '<a class="current" href="#">'+1+"</a>";
		//alert(fadecount);
		
		for(var i=1; i<fadecount; i++){
			 var j = i+1;
			 appendContent += '<a href="#">'+j+"</a>"
			 }
		$('#fadewrap').before(' <div id="ctrl">'+appendContent+'</div>');


	$('#ctrl a').click(function(){
		slideclick = $(this).index('#ctrl a');
		if( slidenow != slideclick ){
			//alert(slideclick);
			$('#fade ul li').eq(slideclick).stop(true,true).fadeIn(fadeTime);
			$('#ctrl a').eq(slideclick).addClass('current');
			$('#fade ul li').eq(slidenow).stop(true,true).fadeOut(fadeTime);
			$('#ctrl a').eq(slidenow).removeClass();
			slidenow = slideclick;
			}else{
				
				}

	})
	
	/* auto play*/

		
	$('#ctrl').mouseenter(function(){
		inout = 1;
	})
	
	$('#ctrl').mouseleave(function(){
		inout = 0;
	})
	
	function CHANGE(){
		
		var NN = slidenow+1;
		
		if( inout == 1 ){
			
			} else {
			if(slidenow < fadecount-1){
				//slideclick = $(this).index('#ctrl a');
				$('#fade ul li').eq(NN).stop(true,true).fadeIn(fadeTime);
				$('#ctrl a').eq(NN).addClass('current');
				$('#fade ul li').eq(slidenow).stop(true,true).fadeOut(fadeTime);
				$('#ctrl a').eq(slidenow).removeClass();
				slidenow = NN;

		}else{
			NN = 0;
			$('#fade ul li').eq(0).stop(true,true).fadeIn(fadeTime);
			$('#ctrl a').eq(0).addClass('current');
			$('#fade ul li').eq(slidenow).stop(true,true).fadeOut(fadeTime);
			$('#ctrl a').eq(slidenow).removeClass();
			slidenow = 0;

			}
			
			
		}
		TT = setTimeout(CHANGE, SPEED);
		
	}
	
	TT = setTimeout(CHANGE, SPEED);
	

})
