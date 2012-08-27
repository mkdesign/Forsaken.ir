$(function () {
	var options   = $('ul.options > li'),
	toggleTargets = $('div.container ul.toggle');
	options.each(function(){
		$(this).click(function(){
			toggleTargets.eq($(this).index()).animate({
				height:300
			},300)
		});
	});
});