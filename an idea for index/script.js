Math.rnd    = Math.random;
Math.random = function (a,b){

	return Math.floor(Math.rnd()*(b-a+1))+a;
};

$(function () {

	var vibrate = function(){

		toggleContent.each(function(){

			$(this).animate({

				//rotate : Math.random(-25,25)+'deg',
				//left   : Math.random(-8,8)
				
			});
		});
	};

	var options       = $('ul.options > li'),
		toggleTargets = $('div.container ul.toggle'),
		toggleContent = $('div.container ul.toggle > li');

	options.each(function(){

		var that = this;

		$(this).click(function(){

			if(toggleTargets.eq($(that).index()).css('display') == 'none'){

				//var VibStart=setInterval(vibrate,90);

				$(that).animate({

					'box-shadow' : '0 0 10px #111'

				},100);

				toggleTargets.eq($(that).index()).animate({
					display : 'block'

				},0,'linear',function(){
					toggleTargets.eq($(that).index()).animate({ height : 300 },170)
				});
			}
			else{

				$(that).animate({

					'box-shadow' : 'none'

				},800);

				toggleTargets.eq($(that).index()).animate({

					height : 0

				},170,'linear',function(){
					toggleTargets.eq($(that).index()).css({ display : 'none' })
				});
			}
			
		});
	});
	
});