Math.rnd = Math.random;
Math.random = function (a,b){
	return Math.floor(Math.rnd()*(b-a+1))+a;
};

$(function () {
	var vibrate = function(){
		toggleContent.each(function(){
			$(this).animate({
				rotate:Math.random(-7,7)+'deg',
				left:Math.random(-4,4),
				top:Math.random(-3,3)
			})
		})
	};
	var options   = $('ul.options > li'),
	toggleTargets = $('div.container ul.toggle');
	toggleContent = $('div.container ul.toggle > li')
	options.each(function(){
		var that=this;
		$(this).click(function(){
			if(toggleTargets.attr('display','none')) alert(1);
			$(that).animate({
				'box-shadow' : '0 0 10px #111'
			},100)
			toggleTargets.eq($(that).index()).animate({
				height:300
			},170,toggleTargets.eq($(that).index()).css({display:'block'}));
			
		});
	});
	setInterval(vibrate,100)
});