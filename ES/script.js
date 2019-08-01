$(document).ready(function() {

	var modal1= false;
	var modal2= false;
	$('#open_modal1').click(function(){
		$('.modal_1').fadeIn();
		$('.fondo_modal1').fadeIn();
		modal1 = true;
	});
	$('.close_modal p').click(function(){
		$('.modal_1').fadeOut();
		$('.fondo_modal1').fadeOut();
		modal1=false;
	});
	$('#open_modal2').click(function(){
		$('.modal_2').fadeIn();
		$('.fondo_modal1').fadeIn();
		modal2 = true;
	});
	$('#close').click(function(){
		$('.modal_2').fadeOut();
		$('.fondo_modal1').fadeOut();
		modal1 = false;
	});
	$('.fondo_modal1').click(function(){
			if(modal1){
				$('.modal_1').fadeOut();
				$('.fondo_modal1').fadeOut();
			}
			if(modal2){
				$('.modal_2').fadeOut();
				$('.fondo_modal1').fadeOut();
			}
			
	});
	if($( window ).width() < 1200){
		$("#texto_video").append($(".content_video_player"));
		$('iframe').attr('height','250em');
		$('.section_5').css('display','none');
		$('.section_5_2').css('display','block');
	}
	$("#style2").click( function() {
		if ($('#style2').attr(':checked')); {
			console.log('true2');
			$('.sol_img').attr('src','img/sun.png');
			$('.luna_img').attr('src','img/luna.png');
			$('body').attr('style','background-color: black !important');
			$('.content_idioma').attr('style','color: white !important');
			$('.marcas').attr('style','background-color: #464646 !important');
			$('.modal_1').attr('style','background-color: black');
			$('.modal_2').attr('style','background-color: black');
			$('input').attr('style','background-color: black');
			$('select').attr('style','background-color: black; color: white');
			$('#open_modal1 p').attr('style','border-color: #969696');
			$('#open_modal2 p').attr('style','border-color: #969696');
			$('.logo_influmedia img').attr('style','background-color: #464646');
			$('#style1').removeAttr(':checked');

		}
	});
	$("#style1").click( function() {
		if ($('#style1').attr(':checked')); {
			console.log('true1');
			$('.sol_img').attr('src','img/sun1.png');
			$('.luna_img').attr('src','img/moon1.png');
			$('body').attr('style','background-color: white !important');
			$('.content_idioma').attr('style','color: black !important');
			$('.marcas').attr('style','background-color: #F6F6F6 !important');
			$('.modal_1').attr('style','background-color: white');
			$('.modal_2').attr('style','background-color: white');
			$('input').attr('style','background-color: white');
			$('select').attr('style','background-color: white; color: black');
			$('#open_modal1 p').attr('style','border-color: white');
			$('#open_modal2 p').attr('style','border-color: white');
			$('.logo_influmedia img').attr('style','background-color: white');
			$('#style2').removeAttr(':checked');
		}
	});
	
});