$(function () {
	var options   = $('ul.options > li'),
	toggleTargets = $('div.container ul.toggle');
	options.each(function(){
		$(this).click(function(){
			alert($(this).index());
		});
	});
});