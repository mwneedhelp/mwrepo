// JavaScript Document
$(function(){
	
	//$('a').click(function(){ return false})	
	var licount = $('#magazine_years ul li').size();
	
	
	$('#magazine_years ul').css('width',licount*50);
	
	
	
	
	// slider
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var liCount = $('#product_ov ul li').size();
	var changeSwitch = 0;
	var cloneOne;
	var liwidth;
	var divide;
	var productCate = $('#product_ov').attr('title');
	if( productCate == 'comforter'){
		divide = 3;
		} else {
			divide = 5;
			}
	//alert(productCate);
	$('#store_out').css({'height':winHeight-180})
	REWIDTH();
	
	$('#prev').on('click',PREV);
	$('#next').on('click',NEXT);
	$('#prevComforter').on('click',prevComforter);
	$('#nextComforter').on('click',nextComforter);
	$('.dropmenu').hover(subMenu,hideMenu);
	$('.normalmenu').hover(subMenu,hideMenu);
/*	$('#prevComforter').on('touchstart',prevComforter);
	$('#nextComforter').on('touchstart',nextComforter);*/
	
	// for 5
	function PREV(){
		if( changeSwitch == 0){
			changeSwitch=1;	
			cloneOne = $('#slideBedding li').eq(liCount-1).clone();
			$('#slideBedding li').eq(0).before(cloneOne);
			//$('#slideBedding li').removeClass('current');
			//$('#slideBedding li').eq(2).addClass('current');
			$('#slideBedding li').eq(0).css('width',0).animate({'width':liwidth},300,function(){$('#slideBedding li').eq(liCount).remove(); changeSwitch=0 });
			
		}
	}
	
	function NEXT(){
		if( changeSwitch == 0){
			changeSwitch=1;
			cloneOne = $('#slideBedding li').eq(0).clone();	
			$('#slideBedding li').eq(liCount-1).after(cloneOne);
			//$('#slideBedding li').removeClass('current');
			//$('#slideBedding li').eq(3).addClass('current');
			$('#slideBedding li').eq(0).animate({'width':0},300,function(){$(this).remove(); changeSwitch=0 });
		}
	}
	
	function REWIDTH(){
		winWidth = $(window).width();
		liwidth = winWidth/divide;
		$('#product_ov ul li').css('width',liwidth);
	}
	
	// for 3
	function prevComforter(){
		if( changeSwitch == 0){
			changeSwitch=1;	
			cloneOne = $('#slideComforter li').eq(liCount-1).clone();
			$('#slideComforter li').eq(0).before(cloneOne);
			$('#slideComforter li').removeClass('current');
			$('#slideComforter li').eq(1).addClass('current');
			$('#slideComforter li').eq(0).css('width',0).animate({'width':liwidth},300,function(){$('#slideComforter li').eq(liCount).remove(); changeSwitch=0 });
			
		}
	}
	
	function nextComforter(){
		if( changeSwitch == 0){
			changeSwitch=1;
			cloneOne = $('#slideComforter li').eq(0).clone();	
			$('#slideComforter li').eq(liCount-1).after(cloneOne);
			$('#slideComforter li').removeClass('current');
			$('#slideComforter li').eq(2).addClass('current');
			$('#slideComforter li').eq(0).animate({'width':0},300,function(){$(this).remove(); changeSwitch=0 });
		}
	}
	
	//$('.dropmenu').on('mouseenter',subMenu)
	
	function subMenu(){
		$(this).find('span:first-child').addClass('dropCurrent');
		$(this).find('.submenu').stop(true,true).slideDown(300)
	}
	function hideMenu(){
		$(this).find('span:first-child').removeClass('dropCurrent');
		$(this).find('.submenu').stop(true,true).slideUp(200)
	}
	
	
	/*member lightbox*/
	$('#member').click(function(){
		$('#direct-to').fadeIn(200)
		return false;
		
	})
	$('.close-popup').click(function(){
		$('#direct-to').fadeOut(200)
		})


	$(window).resize(function(){
		REWIDTH();
		if( $('#store_out') != null){
			winHeight = $(window).height();
			$('#store_out').css({'height':winHeight-180})
		}
		
		
	});
	
	/**************************/
	
	if($('#ty-wrapper').size()){
		$('#ty-wrapper').after(
			'<div id="control">'+
			'<a id="ty-prev" href="#">PREV</a>'+
			'<span></span>'+
			'<a id="ty-next" href="#">NEXT</a>'+
			'</div>')
		
		 } else {
			 
			 }
	
	
	var tynow = 0,tycount = $('#ty-wrapper a').size(),cheight=$('#timeline-year').height(),tyhheight=96;
	$('#ty-prev').click(function(){ TYCHANGE(-1)});
	$('#ty-next').click(function(){ TYCHANGE(1)});
	$('#ty-wrapper a').click(function(){
		var clicknow = $(this).index('#ty-wrapper a'),
			newpos = cheight*clicknow*-1,
			newapos = tyhheight+tyhheight+tyhheight*clicknow*-1;
		
		//alert(clicknow)
		if( clicknow == tynow){
			
			} else {
				$('#tc-wrapper').animate({'margin-top':newpos},400);
				$('#ty-wrapper a').eq(clicknow).addClass('current').siblings().removeClass();
				$('#ty-wrapper').animate({'margin-top':newapos},400,function(){
						tynow=clicknow;	
						})
				
				}
		
		
		
		})
	
	/*$('#thumbnail a').click(function(){ 
		var clicknow = $(this).index('#thumbnail a');
		//alert(clicknow);
		if( clicknow == current){
			
			} else {
				$('#main-stage li').eq(current).fadeOut(speed);
				$('#main-stage li').eq(clicknow).fadeIn(speed,function(){ current = clicknow});
				$('#thumbnail a').eq(clicknow).addClass('current').siblings('a').removeClass('current');
				
				}
		
		return false;
	});
*/
	
	function TYCHANGE(e){
		var e = e, newone = tynow+e, newpos = cheight*newone*-1, realserial = tycount-1,limitpos=cheight*(tycount-1)*-1, newapos = tyhheight+tyhheight+tyhheight*newone*-1,limitapos=tyhheight+tyhheight+tyhheight*(tycount-1)*-1;
		 ;
		if( e==-1 && tynow==0 ){
			//$('#main-stage ul').eq(realserial).addClass('current').siblings().removeClass('current');
			$('#tc-wrapper').animate({'margin-top':0},400);
			$('#ty-wrapper a').eq(0).addClass('current').siblings().removeClass();
			$('#ty-wrapper').animate({'margin-top':tyhheight*2},400,function(){
				tynow=0;
				})
				
			} else if ( e==1 && tynow == realserial){
				$('#tc-wrapper').animate({'margin-top':limitpos},400)
				$('#ty-wrapper a').eq(tycount-1).addClass('current').siblings().removeClass();
				$('#ty-wrapper').animate({'margin-top':limitapos},400,function(){
					tynow=realserial;
					})
				
				} else {
					$('#tc-wrapper').animate({'margin-top':newpos},400);
					$('#ty-wrapper a').eq(newone).addClass('current').siblings().removeClass();
					$('#ty-wrapper').animate({'margin-top':newapos},400,function(){
						tynow=newone;	
						})
					}
		
		
		}
	
	 
})