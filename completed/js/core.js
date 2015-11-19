var inputObject = {
	widthHoverPlus : 100,
	goLarge : function(obj) {	
		if (!obj.hasClass('wide')) {
			obj.animate({ 'width' : (obj.width() + parseInt(this.widthHoverPlus, 10)) + 'px' }, 'fast');
		}
	},
	goSmall : function(obj) {
		if (obj.val() === '') {
			obj.animate({ 'width' : (obj.width() - parseInt(this.widthHoverPlus, 10)) + 'px' }, 'fast');	
			if (obj.hasClass('wide')) {
				obj.removeClass('wide');
			}
		} else {
			if (!obj.hasClass('wide')) {
				obj.addClass('wide');
			}
		}
	}
}
$(function() {
	
	$('#search').focus(function() {
		inputObject.goLarge($(this));
	});
	
	$('#search').blur(function() {
		inputObject.goSmall($(this));
	});
	
});