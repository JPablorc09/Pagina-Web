$(document).ready(function() {

	$(window).scroll(function(){
		var windowWidth = $(window).width();
		if(windowWidth>800){
			var scroll = $(window).scrollTop();

			$('header .textos').css({
				// se puede mover horizontal o vertical, en este caso solo vertical
				'transform':'translate(0px,' + scroll / 3 + '%)'
			});
			$('.acerca-de article ').css({
				// se puede mover horizontal o vertical, en este caso solo vertical
				'transform':'translate(0px, -' + scroll / 4 + '%)'
			});
		}
	});
	/*se trabaja con el tamaño de la ventana por los dispositvios moviles,
	 para que no tenga problema con el responsive*/
	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth<800){
			$('.acerca-de article ').css({
				'transform':'translate(0px, 0px) '
			});
		}
	});
});