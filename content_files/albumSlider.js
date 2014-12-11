$(function(){
	/*=============================================================
	
	# Product Slider
	
	============================================================= */
	
	var numpic = $('#album li').size()-1;
	var nownow = 0;
	var inout = 0;
	var TT = 0;
	var SPEED = 7000;
	var btnSwitch = 0;


	$('#album li').eq(0).siblings('li').css({'display':'none'});

	/*=============================================================
	
	# Add Slide Dot
	
	=============================================================*/
	ADDLI();
	var slidedot;
	
/*	var ulstart = '<ul id="slidedot">',
		ulcontent = '',
		ulend = '</ul>';
	var slidedot = $('#slidedot li');
	var slidedotwidth = $('#slidedot').width();
	$('#slidedot').css('margin-left',(0-slidedotwidth/2))
	slidedot.eq(0).addClass('currentdot')*/
	
	$('#prev').mouseenter(function(){ inout=1})
	$('#next').mouseenter(function(){ inout=1})
	$('#prev').mouseleave(function(){ inout=0})
	$('#next').mouseleave(function(){ inout=0})
	
	if( numpic <= 0) {
		$('#prev').hide();
		$('#next').hide();
		}
	
	$('#prev').on('click',PREV)
	$('#next').on('click',NEXT)
	
	function NEXT(){
		
		var newone = nownow + 1;
		if( btnSwitch == 1){
			
			} else {
				btnSwitch = 1;
				if( newone > numpic){
			$('#album li').eq(nownow).css('z-index','900');
			$('#album li').eq(0).css({'z-index':'800'}).show();
			slidedot.eq(0).addClass('currentdot').siblings('li').removeClass('currentdot');
			$('#album li').eq(nownow).fadeOut(400,function(){$('#album li').eq(0).fadeIn(500); btnSwitch = 0;});
			nownow = 0;
			} else {
				$('#album li').eq(nownow).css('z-index','900');
				$('#album li').eq(newone).css({'z-index':'800'}).show();
				slidedot.eq(newone).addClass('currentdot').siblings('li').removeClass('currentdot');
				$('#album li').eq(nownow).fadeOut(400,function(){$('#album li').eq(newone).fadeIn(500);btnSwitch = 0;});
				nownow = newone;
				
				}
				
				
				}
		
		return false;
		}
		
	function PREV(){
		var newone = nownow - 1;
		
		if( btnSwitch == 1){
			
			} else {
				btnSwitch=1;
				if( newone < 0){
			$('#album li').eq(nownow).css('z-index','900');
			$('#album li').eq(numpic).css({'z-index':'800'}).show();
			slidedot.eq(numpic).addClass('currentdot').siblings('li').removeClass('currentdot');
			$('#album li').eq(nownow).fadeOut(400,function(){$('#album li').eq(numpic).fadeIn(500); btnSwitch =0});
			nownow = numpic;
			} else {
				$('#album li').eq(nownow).css('z-index','900');
				$('#album li').eq(newone).css({'z-index':'800'}).show();
				slidedot.eq(newone).addClass('currentdot').siblings('li').removeClass('currentdot');
				$('#album li').eq(nownow).fadeOut(400,function(){$('#album li').eq(newone).fadeIn(500); btnSwitch =0});
				nownow = newone;
				
				}
				
				}
		
		return false;
		}
	
	function ADDLI(){
		if( numpic != 0){
			var ulstart = '<ul id="slidedot">',
			ulcontent = '',
			ulend = '</ul>';
		//var slidedot = $('#slidedot li');	
			for(var i = 0; i <= numpic; i++){
				ulcontent += '<li>' + '<a href="#">' + (i+1) + '</a>' + '</li>';
			}
			
			$('#album').after(ulstart + ulcontent + ulend);
			$('#slidedot').css('width',22+20*numpic);	
			slidedot = $('#slidedot li');
			slidedot.eq(0).addClass('currentdot');
			slidedot.on('click',DOTCHANGE);
			slidedot.on('mouseenter',function(){ inout = 1;});
			slidedot.on('mouseleave',function(){ inout = 0;});
			}

	}
	
	/*=============================================================
	
	# Event Listener
	
	=============================================================*/
	
	
	
	function DOTCHANGE(){
		
		var changenow = $(this).index();
		if( changenow == nownow){
			} else {
				$('#album li').eq(nownow).css('z-index','900');
				$('#album li').eq(changenow).css({'z-index':'800'}).show();
				slidedot.eq(changenow).addClass('currentdot').siblings('li').removeClass('currentdot');
				$('#album li').eq(nownow).fadeOut(400,function(){$('#album li').eq(changenow).fadeIn(500);});
				nownow = changenow;
				}
		return false;
	}
/*	
	slidedot.mouseenter(function(){	inout = 1;})
	
	slidedot.mouseleave(function(){	inout = 0;})*/
	
	function GOGO(){
		
		var NN = nownow+1;
		
		if( inout == 1 ){
			} else {
			if(nownow < numpic){
			$('#album li').eq(nownow).css('z-index','900');
			$('#album li').eq(NN).css({'z-index':'800'}).show();
			//$('#galleryaaaaaaaaa li').eq(NN).addClass('currentli').siblings('li').removeClass('currentli');
			slidedot.eq(NN).addClass('currentdot').siblings('li').removeClass('currentdot');
			$('#album li').eq(nownow).fadeOut(400,function(){$('#album li').eq(NN).fadeIn(500);});
			nownow += 1;

		}else{
			NN = 0;
			$('#album li').eq(nownow).css('z-index','900');
			$('#album li').eq(NN).stop(true,true).css({'z-index':'800'}).show();
			$('#album li').eq(nownow).fadeOut(400,function(){$('#album li').eq(0).fadeIn(500);});
			slidedot.eq(NN).addClass('currentdot').siblings('li').removeClass('currentdot');
			nownow=0;

			}
		}
		TT = setTimeout(GOGO, SPEED);
	}
	
	
	if( numpic != 0){
		TT = setTimeout(GOGO, SPEED);	
	}
	
})