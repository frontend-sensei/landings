$(document).ready(function() {	
	$('.counter__btn').click(function () {
		$('.counter__heart').addClass('counter__heart-fly');
		$('.counter__quantity').html(function(i, val) { return val*1+1 });

	})
});