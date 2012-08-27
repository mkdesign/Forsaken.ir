$(function () {
	var options   = $('ul.options > li'),
	toggleTargets = $('div.container ul.toggle');
	options.each(function(){
		$(this).click(function(){
			toggleTargets.animte({
				if(height<=0)
					height:100
				else
					height:0
			});
		});
	});
});