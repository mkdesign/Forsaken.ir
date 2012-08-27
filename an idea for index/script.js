$(function () {
	var options   = $('ul.options > li'),
	toggleTargets = $('div.container ul.toggle');
	options.each(function(){
		var that=this;
		$(this).click(function(){
			toggleTargets.eq($(that).index()).animate({
				height:300
			},100,toggleTargets.eq($(that).index()).css({display:'block'}))
		});
	});
});